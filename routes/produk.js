const express = require('express')
const router = express.Router()
const {tampilProduk, tambahProduk, hapusProduk} = require('../controllers/produk')

router.get('/', tampilProduk);
router.post('/', tambahProduk);
router.get('/hapus/:idproduk', hapusProduk)     //harusnya menggunakan method delete, tapi supaya lebih mudah pakai get saja

module.exports = router