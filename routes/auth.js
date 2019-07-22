let router = require("express").Router();
let AuthController = require("../controllers/AuthController");

router.get("/login", AuthController.loginForm);
router.post("/login", [AuthController.loginFormValidator, AuthController.login]);
router.get("/register", AuthController.registerForm);
router.post("/register", [AuthController.registerFormValidator, AuthController.register]);
router.get("/logout", AuthController.logout);

module.exports = router;