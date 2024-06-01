const modelProduk = require('../models/produk.js')
const modelKategori = require('../models/kategori.js')

const {Op,where, Model} = require('sequelize')

const tampilProduk = async (req,res) =>{
    try{
        const dataProduk = await modelProduk.findAll();

        if (dataProduk.length > 0) {
            res.status(200).render('produk', {dataProduk});
        } else {
            res.status(400).json({ success: false, message: 'Data kategori tidak tersedia', data: dataProduk });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error });
    }
}


module.exports = {
    tampilProduk
}