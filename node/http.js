import http from "http";
import cors from "cors";

const cors = require("cors");

use(cors());

// allow all react frontend to call api

//create server
// req => request  (what client sends )
//res => response (what server sends back )

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });

  res.end("hello, Sla MERN  ,,, This is my Node.js server (using import )");
});

server.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
