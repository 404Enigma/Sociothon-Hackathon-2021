const express = require("express");
const router = express.Router();

const { checkCookie, savecookie } = require("../middleware/check_auth");

router.get("/", (req, res) => {
  res.render("pages/home");
});

router.get("/register", (req, res) => {
  res.render("pages/register");
});

router.get("/details", (req, res) => {
  res.render("pages/details");
});

router.get("/cart", (req, res) => {
  res.render("pages/cart");
});

router.get("/customer", (req, res) => {
  res.render("pages/customer");
});

router.get("/login", (req, res) => {
  res.render("pages/login");
});

router.get("/logout", (req, res) => {
  res.clearCookie("__session");
  res.redirect("/");
});

router.get("/success", checkCookie, (req, res) => {
  res.sendFile(__dirname + "/success.html");
  console.log("UID of Signed in User is" + req.decodedClaims.uid);
  //You will reach here only if session is working Fine
});

router.get("/savecookie", (req, res) => {
  const Idtoken = req.query.idToken;
  console.log(Idtoken);
  savecookie(Idtoken, res);
});

router.get("/python", (req, res) => {
  const spawn = require("child_process").spawn;
  console.log(req.query.firstname);

  const process = spawn("python", ["./scripts/demo.py", req.query.firstname, req.query.lastname]);

  process.stdout.on("data", function (data) {
    res.send(data.toString());
  });
});

module.exports = router;
