const http = require("http");
const express = require("express");
const path = require("path");
const app = express();
const booksRouter = require('./src/js/books.js')
const chatRouter = require('./src/js/chat.js')

const port = 3000; //인스턴스 생성시 만들었던 포트번호 기입

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.use(express.json())
app.use('/books', booksRouter)
app.use('/chat', chatRouter)
app.use(express.static(path.join(__dirname, "public")));


app.get("/*", (req, res) => {
  res.set({
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Date: Date.now()
  });
  res.sendFile(path.join(__dirname, "public", "index.html"));
});




http.createServer(app).listen(port, () => {
  console.log(`app listening at ${port}`)
})