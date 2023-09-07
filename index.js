const http = require("http");
const fs = require("fs");
//create an server
const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Request REcieved\n`;
    fs.appendFile('log.txt', log, (err, data) => {
        switch (req.url) {
            case '/':
                res.end("Hello From Server Again at HomePage");
                break;
            case '/about':
                res.end("I am Mohammed Shakir");
                break;
            default:
                res.end("404 Not found");
        }

    })
});

//Create a door(port) on which server will run
myServer.listen(8000, () => console.log("Server Started"));