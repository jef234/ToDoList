let Task = require("../models/Task"),
    totalTasks = 0,
    completedTasks = 0
    toDoTasks = 0;

exports.getTotalTasks = function (req, res, next) {
    Task.find().count().then(function (count) {
        totalTasks = count;
    });
    next();
}

exports.getCompletedTasks = function (req, res, next) {
    Task.find({ completed: true }).count().then(function (count) {
        completedTasks = count;
    });
    next();
}

exports.getToDoTasks = function (req, res, next) {
    Task.find({ completed: false }).count().then(function (count) {
        toDoTasks = count;
    });
    next();
}

exports.displaytTasksCount = function (req, res) {
    // res.send("Task list works!");
    res.render("dashboard/index", {
        toDoTasks: toDoTasks,
        totalTasks: totalTasks,
        completedTasks: completedTasks        
    });
}