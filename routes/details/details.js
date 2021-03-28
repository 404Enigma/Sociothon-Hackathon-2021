const express = require("express");
const axios = require("axios");

const router = express.Router();
const { checkCookie } = require("../../middleware/check_auth");
const { get_drug_list } = require("../../modal/drug_list/drug_list");
const { find_drug_list } = require("../../modal/drug_list/find_list");

router.get("/:id/details", checkCookie, async (req, res) => {
  console.log(req.decodedClaims);
  const drug_data = await find_drug_list(req.params.id);

  console.log("\x1b[36m%s\x1b[0m", drug_data);

  // drug_data.map((data) => {
  //   console.log("\x1b[36m%s\x1b[0m", data);
  // });
  res.render("pages/details", { drug_data });
});

module.exports = router;
