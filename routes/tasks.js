let express = require("express"),
    TaskConstroller = require("../controllers/TaskController"),
    router = express.Router(),
    AuthController = require("../controllers/AuthController");

router.use(AuthController.authMiddleware);

router.get("/", TaskConstroller.getTasks);
// res.render("tasks/index");
router.get("/add", TaskConstroller.addTask);
router.get("/delete/:id", TaskConstroller.deleteTask);
router.post("/store", [TaskConstroller.taskValidator, TaskConstroller.storeTask]);
router.get("/status/:id", TaskConstroller.toggleStatus);

module.exports = router;