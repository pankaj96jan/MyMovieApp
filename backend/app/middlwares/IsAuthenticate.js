const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const isAuthenticate = async (req, res, next) => {
    const { token } = req.cookies;
       console.log(token,"tmkc");

    if (!token) {   
        res.json({
            message: "please login to access this resource"
        })
    }
    const decodedData = jwt.verify(token, "secret123");
    req.user = await User.findById(decodedData.id)
    next()
}

const authorizeUser = (req, res, next) => {
    const token = req.cookie

}

module.exports = {
    isAuthenticate
}