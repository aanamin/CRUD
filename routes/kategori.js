const express = require('express')
const router = express.Router()
const controller = require('../controllers/kategori')

router.get('/', controller.tampilKategori)
router.post('/', controller.addKategori)
// router.put('/update/:id_kategori', controller.updateKategori)
router.post('/update/:id_kategori', controller.updateKategori)      //sementara pakai method post dulu, karena di html cuma ada get dan post
// router.delete('/:id_kategori', controller.deleteKategori)
router.get('/hapus/:id_kategori', controller.deleteKategori)    //sementara pakai method get dulu biar mudah


module.exports = router;


