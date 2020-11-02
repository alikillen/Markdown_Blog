const express = require("express")
const router = express.Router()

// router.get("/")
router.get("/", (req, res)=> {
  res.send("in articles")
})

// router.get("/", (req,res) => {

// })

module.exports = router