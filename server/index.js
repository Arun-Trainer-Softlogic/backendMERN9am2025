const http = require("http");
const cors = require("cors");

// Create a CORS middleware instance
const corsMiddleware = cors();

// A tiny helper to run middleware manually since we're not using Express
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

const server = http.createServer(async (req, res) => {
  // Run CORS middleware
  try {
    await runMiddleware(req, res, corsMiddleware);
  } catch (err) {
    res.statusCode = 500;
    res.end("CORS error");
    return;
  }

  // Handle routes
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello from pure Node.js with CORS!" }));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
