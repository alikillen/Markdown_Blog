const express = require("express")
const articleRouter = require("./routes/articles.js")
const app = express()

// setting our view engine which will convert our code to HTML
app.set("view engine", "ejs")

// need to set all routes for articles after /articles
app.use("/articles", articleRouter)

app.get("/", (req, res)=>{
  // res.send("hello world")
  res.render("index", {articles: articles})
})

app.listen(5000)