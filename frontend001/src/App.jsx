import{ BrowserRouter, Routes, Route  } from "react-router-dom"
import Home from "./pages/Home/Home";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Register from "./pages/auth/Register";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import Layout from "./components/layout/Layout";
import axios from "axios";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { getLoginStatus } from "./services/authService";
import { SET_LOGIN } from "./redux/features/auth/authSlice";
import { useEffect } from "react";

axios.defaults.withCredentials = true; //axios feature for saving user credentials to backend db


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status));
    }
    loginStatus();
  }, [dispatch]);
  return (
    <BrowserRouter>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      <Route path="/resetpassword/:resetToken" element={<ResetPassword/>}/>

      <Route path="/dashboard" element={<Sidebar>
        <Layout>
          <Dashboard/>
        </Layout>
      </Sidebar>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
