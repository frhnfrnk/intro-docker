const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/api/name", (req, res) => {
  // Return a JSON response with a name
  res.json({ name: "Night Login" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
