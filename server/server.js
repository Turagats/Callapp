const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  fs.readFile("data.json", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});