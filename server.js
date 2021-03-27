const express = require("express");
const app = express();

const PORT = process.env.port || 8000;
app.use(express.static("public"));
app.set("view engine", "ejs");

const home = require("./routes/index");
const list = require("./routes/list/list");

app.use(home);
app.use("/list", list);

app.listen(PORT, () => {
  console.log(`Listining on ${PORT}`);
});
