const express = require('express')
const router = express.Router()
const controller = require('../controllers/kategori')

router.get('/', controller.tampilKategori)
router.post('/add', controller.addKategori)
router.put('/update/:id_kategori', controller.updateKategori)
router.delete('/:id_kategori', controller.deleteKategori)


module.exports = router;


