const express = require("express");
const app = express();

app.get("/jsonp", (req, res) => {
  const data = {
    msg: "帳號已存在",
  };
  let str = JSON.stringify(data);
  res.end(`handle(${str})`);
});

app.get("/jq-jsonp", (req, res) => {
  const data = {
    name: "Alisu",
    city: "Tokyo",
  };
  let str = JSON.stringify(data);
  //接收callback參數
  let cb = req.query.callback;
  res.end(`${cb}(${str})`);
});
app.listen(8000, () => {
  console.log("server is running on port 8000.");
});
