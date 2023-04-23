const fs = require("fs");
const path = require("path");
const jsonServer = require("json-server");

const server = jsonServer.create();

const db = JSON.parse(fs.readFileSync(path.join(__dirname, "db.json")));
const router = jsonServer.router(db);

server.use(jsonServer.defaults());
server.use(router);

server.listen(process.env.PORT || 8000, () => {
  console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
