exports.loginForm = function(req, res){
    // res.send("Login Works");
    res.render("auth/login");
}

exports.login = function(req, res){
    res.send("Login Process Works");
}

exports.registerForm = function(req, res){
    res.send("Register Form Works");
}

exports.register = function(req, res){
    res.send("Register Process Works");
}

exports.logout = function(req, res){
    res.send("Logout Process Works");
}

exports.loginFormValidator = function(req, res,next){
    next();
}

exports.registerFormValidator = function(req, res,next){
    next();
} 