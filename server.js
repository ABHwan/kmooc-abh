const http = require("http");
const express = require("express");
const path = require("path");

const app = express();

const host = '43.201.20.139';

const port = 22; //인스턴스 생성시 만들었던 포트번호 기입

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/*", (req, res) => {
  res.set({
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Date: Date.now()
  });
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

http.createServer(app).listen(port, host, () => {
  console.log(`app listening at ${port}`);
});