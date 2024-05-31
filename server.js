const express = require("express");
const ejs = require("ejs");
const port = 4000;
const app = express();
const articles = require("./data/articles.json");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("static"));

app.get("/", (req, res) => {
  res.render("index", { articles });
});

app.get("/article/:id", (req, res) => {
  let article = undefined;

  for (const object of articles) {
    if (object.id === Number(req.params.id.slice(0, 1))) {
      article = object;
    }
  }
  res.render("article", { article });
});

app.listen(port, () => {
  console.log("server launched");
});
