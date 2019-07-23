let express = require("express"),
    bodyParser = require("body-parser"),
    session = require("express-session"),
    taskRouter = require("./routes/tasks"),
    dashboardRouter = require("./routes/dashboard"),
    authRouter = require("./routes/auth"),
    db = require("./helpers/database"),
    app = express();

db.connection();

app.use(session({
    secret: "abcd1234",
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.redirect("/login");
});
app.use("/", authRouter);
app.use("/tasks", taskRouter);
app.use("/dashboard", dashboardRouter);

module.exports = app;