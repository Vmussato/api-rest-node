const express = require("express");
const consign = require("consign");

const PORT = "4000";

const app = express();

app.set("json spaces", 4);

consign()
    .include("models")
    .then("routes")
    .into(app);

app.listen(PORT, () => console.log('NTask API - porta ' + PORT));