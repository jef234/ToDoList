let express = require("express"),
    DashboardConstroller = require("../controllers/DashboardController"),
    router = express.Router();

// router.get("/",function(req,res){
//     // res.send("Dashboard Works!");
//     res.render("dashboard/index");
// });

router.get("/",
    [DashboardConstroller.getTotalTasks,
    DashboardConstroller.getCompletedTasks,
    DashboardConstroller.getToDoTasks,
    DashboardConstroller.displaytTasksCount]
);

module.exports = router;