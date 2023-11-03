import{ BrowserRouter, Routes, Route  } from "react-router-dom"
import Home from "./pages/Home/Home";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Register from "./pages/auth/Register";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import Layout from "./components/layout/Layout"



function App() {
  return (
    <BrowserRouter>
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
