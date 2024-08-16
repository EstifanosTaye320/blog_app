require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use("/", require("./server/routes/main"));

app.listen(PORT, function () {
  console.log(`App listeing at port ${PORT}`);
});
