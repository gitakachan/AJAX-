const express = require("express");
const app = express();

app.get("/jsonp", (req, res) => {
  const data = {
    msg: "帳號已存在",
  };
  let str = JSON.stringify(data);
  res.end(`handle(${str})`);
});

app.get("/cors", (req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "*") 星號表示通配 所有的網頁都可以
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500"); //只有這個url可以
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Method", "*");

  res.send("hello cors");
});
app.listen(8000, () => {
  console.log("server is running on port 8000.");
});
