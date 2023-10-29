const asyncHandler = require("express-async-handler");
const User = require("../models/userModels");
const jwt = require("jsonwebtoken");

const protect = asyncHandler (async(req, res, next) => {
    try {
        const token = req.cookies.token
        if(!token) {
            res.status(401) 
            throw new Error("Not authorized, please login")      
           }

        //    verify token
        const verifiedToken = jwt.verify(token, process.env.JWT_SECRET)
        // get user id from token
        const user = await User.findById(verifiedToken.id).select("-password")

        if(!user) {
            res.status(401)
        throw new Error("User not found");
    
        }
        req.user = user
        next()
    } catch (error) {
        res.status(401) 
        throw new Error("Not authorized, please login")  
    }
})

module.exports = protect; 