const express = require("express");

const router = express.Router();
const { checkCookie, savecookie } = require("../../middleware/check_auth");
const { data } = require("../../data");

router.get("/", checkCookie, (req, res) => {
  res.render("pages/list", { data });
});

module.exports = router;
