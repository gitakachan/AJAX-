const express = require("express");
const app = express();

app.all("/jsonp", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  const data = {
    name: "Alisu",
    age: 18,
  };
  let str = JSON.stringify(data);
  response.end(`handle(${str})`);
});
app.listen(8000, () => {
  console.log("server is running on port 8000.");
});
