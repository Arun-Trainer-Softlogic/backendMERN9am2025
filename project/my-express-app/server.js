const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // important: parse JSON body

// POST route
app.post("/user", (req, res) => {
  const { name } = req.body;
  console.log("✅ Received name in backend:", name); // <-- this will show in terminal
  res.send(`User ${name} created!`);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
