const express = require('express')
const router = express.Router()
const controller = require('../controllers/produk')

router.get('/', controller.tampilProduk)

module.exports = router