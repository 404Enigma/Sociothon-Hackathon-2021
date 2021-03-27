const express = require("express");

const router = express.Router();

const { data } = require("../../data");
const obj = data[0];

console.log(data);
console.log(obj.Medicine_Name);

router.get("/", (req, res) => {
  res.render("pages/list", { data });
});

module.exports = router;
