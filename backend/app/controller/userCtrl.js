const User = require("../models/userModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userCtrl = {};

userCtrl.signup = (req, res, next) => {
    const body = req.body;
    const user = new User(body);
    bcryptjs.genSalt().then((salt) => {
        bcryptjs.hash(user.password, salt).then((encrypted) => {
            user.password = encrypted;
            user
                .save()
                .then((user) => {
                    res.json(user);
                })
                .catch((err) => {
                    res.json(err.message);
                });
        });
    });
};

userCtrl.login = (req, res, next) => {
    const body = req.body; //only jab post m kuch likha ho tbhi toh req.body m se lega
    User.findOne({ email: body.email }).then((user) => {
        if (!user) {
            res.json({
                error: "invalid email or password",
            });
        }
        bcryptjs.compare(body.password, user.password).then((match) => {
            if (match) {
                const tokenData = {
                    id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                };
                const token = jwt.sign(tokenData, "secret123", { expiresIn: "90d" });
                res.cookie("token", token);
                res.json({
                    token: `${token}`,
                });
            } else {
                res.json({ errors: "invalid email or passowrd" });
            }
        });
    });
};

userCtrl.account = (req, res) => {
    const user = req.user
    res.json(user);
};
userCtrl.logout = (req, res) => {
    res.cookie("token","null");
    res.json({
        message: "succesfully logout!"
    })
}

module.exports = userCtrl;
