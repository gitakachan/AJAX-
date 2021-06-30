const express = require("express");
const app = express();

//跨域設置
//需要先下載 npm install cors --save
//引入cors
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  //允許跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  //設置響應
  res.send("get request!");
});

app.post("/server", (request, response) => {
  //允許跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  //設置響應
  response.send("post request!!");
});

//監聽端口啟動服務
app.listen(8000, () => {
  //http://127.0.0.1:8000/
  console.log("server is running on port 8000");
});
