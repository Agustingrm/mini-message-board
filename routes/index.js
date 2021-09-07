var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    name: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    name: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("new", { title: "New Message" });
});

router.post("/new", (req, res) => {
  messages.push({
    name: req.body.name,
    text: req.body.text,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
