const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const data = "hello it's a get request";
  res.send(data);
});
app.post("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  //響應體為json格式
  const data = { mag: "hello it's a get request" };
  res.send(JSON.stringify(data));
});

app.listen(8000, () => {
  console.log("server is running on port 8000.");
});
