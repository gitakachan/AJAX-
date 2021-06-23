const express = require("express")
let app = express()

app.post("/server", (request, response)=>{
  //設置響應頭，允許跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  //設置響應
  response.send("ajax post response");
})

//監聽端口啟動服務
app.listen(8000,()=>{
    console.log("server is running on port 8000.")
})