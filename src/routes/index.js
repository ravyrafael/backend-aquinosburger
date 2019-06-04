const express = require("express");
const router = express.Router();


router.use("/object", require("./objectRoutes"));

module.exports = router;
