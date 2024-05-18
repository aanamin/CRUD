const modelProduk = require('../models/produk.js')
const modelKategori = require('../models/kategori.js')

const {Op,where, Model} = require('sequelize')

const tampilProduk = async (req,res) =>{
    try{
        const findAllKategori = await modelProduk.findAll({
            
        });

        if (findAllKategori.length > 0) {
            res.status(200).json({ success: true, message: 'Data kategori tersedia', data: findAllKategori });
        } else {
            res.status(400).json({ success: false, message: 'Data kategori tidak tersedia', data: findAllKategori });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error });
    }
}


module.exports = {
    tampilProduk
}