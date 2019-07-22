let http = require("http"),
    app = require("./app"),
    PORT = 3000,
    server = http.createServer(app);

server.listen(PORT, function () {
    console.log("Server started on PORT: " + PORT);
});