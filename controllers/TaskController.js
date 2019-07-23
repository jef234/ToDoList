let Task = require("../models/Task");

exports.getTasks = function (req, res) {
    // res.send("Task list works!");
    Task.find().then(function (tasks) {
        res.render("tasks/index", {
            taskItems: tasks,
            user: req.session.user
        });
    });
}

exports.taskValidator = function (req, res, next) {
    // console.log("Inside task validator");
    if (req.body.title === "") {
        req.session.errorMsg = "Title can not be blank";
        res.redirect("/tasks/add");
    } else {
        next();
    }
}

exports.addTask = function (req, res) {
    // res.send("Task add form works!");
    let error = req.session.errorMsg;
    req.session.errorMsg = "";
    res.render("tasks/add", {
        errorMsg: error,
        user: req.session.user
    });
}

exports.storeTask = function (req, res) {
    // console.log(req.body.title);
    // res.send("Store Task Works!");

    let task = new Task();

    task.title = req.body.title;
    task.description = req.body.description;

    task.save().then(function () {
        res.redirect("/tasks");
    });
}

exports.deleteTask = function (req, res) {
    // console.log(req.params);
    Task.findByIdAndRemove(req.params.id).then(function () {
        res.redirect("/tasks");
    });
    // res.send("Delete Task Works!");
}

exports.toggleStatus = function (req, res) {
    // console.log(req.params);
    Task.findById(req.params.id).then(function (task) {
        task.completed = !task.completed;
        task.save().then(function () {
            res.redirect("/tasks");
        });
    });
    // res.send("Delete Task Works!");
}
