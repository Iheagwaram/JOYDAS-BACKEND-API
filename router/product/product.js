const express = require("express");
const { createProductController, fetchAllProductController } = require("../../controllers/product")

const router = express.Router();

router.post('/product', createProductController)
router.get("/products", fetchAllProductController)

module.exports = router;