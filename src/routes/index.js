const express = require("express");
const router = express.Router();


router.use("/object", require("./objectRoutes"));
router.use("/user", require("./userRoutes"));
router.use("/userType", require("./userTypeRoutes"));
module.exports = router;
