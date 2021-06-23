//引入express
const express = require("express");

//創建應用物件
const app = express();

//創建路由規則
//request是對請求報文的封裝
//response是對響應報文的封裝
app.get("/server", (request, response) => {
  //設置響應頭，允許跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  //設置響應
  response.send("hello express");
});

//監聽端口啟動服務
app.listen(8000, () => {
  //http://127.0.0.1:8000/
  console.log("server is running on port 8000");
});
