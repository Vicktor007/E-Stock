import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const API_URL = `${BACKEND_URL}/api/products/`;


// create new product
export const createProduct = async (FormData) => {
    const response = await axios.post(API_URL, FormData)
    return response.data
}

const productService = {
    createProduct
}

export default productService;