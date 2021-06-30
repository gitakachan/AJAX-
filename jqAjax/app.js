const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  //將響應體設為json格式
  const data = { msg: "hello it's a get request" };
  res.send(JSON.stringify(data));
});
app.post("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const data = "hello it's a post request";
  res.send(data);
});

app.listen(8000, () => {
  console.log("server is running on port 8000.");
});
