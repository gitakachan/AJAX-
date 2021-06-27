const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  //三秒後才響應
  setTimeout(function () {
    res.send("hello userrrrr!");
  }, 3000);
});

app.listen(8000, () => {
  console.log("server is running on port 8000.");
});
