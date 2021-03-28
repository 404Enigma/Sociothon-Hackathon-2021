const express = require("express");
const axios = require("axios");

const router = express.Router();
const { checkCookie, savecookie } = require("../../middleware/check_auth");
const { get_drug_list } = require("../../modal/drug_list/drug_list");

router.get("/", checkCookie, async (req, res) => {
  console.log(req.decodedClaims);
  const drug_data = await get_drug_list();

  console.log("\x1b[36m%s\x1b[0m", drug_data);
  console.log("ab");

  // drug_data.map((data) => {
  //   console.log("\x1b[36m%s\x1b[0m", data);
  // });
  res.render("pages/list", { drug_data });
});

router.get("/python", checkCookie, async (req, res) => {
  console.log(req.decodedClaims);
  const response = await axios.get(`https://healthapi1.herokuapp.com/35/R06`);
  console.log(response.data);
  //res.render("pages/list", { data });
  //res.status(200).send("Response : ", response.data);
});

module.exports = router;
