let User = require("../models/User"),
    bcrypt = require("bcryptjs");

exports.loginForm = function (req, res) {
    // res.send("Login Works");
    let error = req.session.errorMsg;
    req.session.errorMsg = "";
    res.render("auth/login", {
        errorMsg: error
    });
}

exports.login = function (req, res) {
    let uname = req.body.username,
        pwd = req.body.password;

    User.findOne({ username: uname }).then(function (user) {
        if (user) {
            if (bcrypt.compareSync(pwd, user.passwordHash)) {
                req.session.user = {
                    name: user.name,
                    email: user.email
                }
                res.redirect("/dashboard");
            } else {
                req.session.errorMsg = "Invalid Credentials";
                res.redirect("/login");
            }
        } else {
            req.session.errorMsg = "No User found";
            res.redirect("/login");
        }
    });
}

exports.registerForm = function (req, res) {
    res.send("Register Form Works");
}

exports.register = function (req, res) {
    res.send("Register Process Works");
}

exports.logout = function (req, res) {
    delete req.session.user;
    res.redirect("/login");
}

exports.loginFormValidator = function (req, res, next) {
    next();
}

exports.registerFormValidator = function (req, res, next) {
    next();
} 

exports.authMiddleware = function (req, res, next) {
    if(typeof req.session.user === "undefined") {
        res.redirect("/login");
    } else {
        next();
    }
} 