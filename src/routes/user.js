const express = require("express");

const router = express.Router();

//crear usuario
router.post('/users',(req, res) => {
    res.send("crear usuario");
});


module.exports = router;
