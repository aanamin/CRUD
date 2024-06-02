require('../models/assosiation.js');
const modelProduk = require('../models/produk.js')
const modelKategori = require('../models/kategori.js')

const {Op,where, Model} = require('sequelize')

const tampilProduk = async (req,res) =>{
    try{
        const dataProduk = await modelProduk.findAll({
            include: modelKategori
        });

        // if (dataProduk.length > 0) {
        //     res.status(200).render('produk', {dataProduk});
        // } else {
        //     res.status(400).json({ success: false, message: 'Data kategori tidak tersedia', data: dataProduk });
        // }

        // console.log(dataProduk);
        // return res.json(dataProduk)

        const dataKategori = await modelKategori.findAll({
            attributes: ['id_kategori', 'nama_kategori']
        });

        res.status(200).render('produk', {dataProduk, dataKategori});


    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error });
    }
}

const tambahProduk = async (req,res) =>{
    try{
        const {nama, harga, idkategori} = req.body;

        const findProduk = await modelProduk.findOne({      //dipastikan dulu apakah kategori sudah ada atau belum, dengan mencari nama kategori yang sama dengan yang diinput user pada req.body
            where: {
                nama_produk: nama
            }
        });

        if (findProduk) return res.status(400).json({success: false, message:"Produk tersebut telah ada"});

        const tambah = await modelProduk.create({
            nama_produk: nama,
            harga,
            id_kategori: idkategori
        });

        console.log(tambah);

        return res.status(200).redirect('/produk');

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error });
    }
};

const hapusProduk = async (req,res) =>{
    try{
        const {idproduk} = req.params;

        const findProduk = await modelProduk.findOne({      //dipastikan dulu apakah kategori sudah ada atau belum, dengan mencari nama kategori yang sama dengan yang diinput user pada req.body
            where: {
                id_produk: idproduk
            }
        });

        if (!findProduk) return res.status(400).json({success: false, message:"Produk tersebut tidak ada"});

        const hapus = await modelProduk.destroy({
            where: {
                id_produk: idproduk
            }
        });

        console.log(hapus);

        return res.status(200).redirect('/produk');

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error });
    }
};

const editProduk = async (req,res) =>{
    try{
        const {idproduk} = req.params;
        const {nama_produk, harga, id_kategori} = req.body;

        const findProduk = await modelProduk.findOne({      //dipastikan dulu apakah kategori sudah ada atau belum, dengan mencari nama kategori yang sama dengan yang diinput user pada req.body
            where: {
                id_produk: idproduk
            }
        });

        if (!findProduk) return res.status(400).json({success: false, message:"Produk tersebut tidak ada"});

        const edit = await modelProduk.update({
            nama_produk, harga, id_kategori
        }, {
            where: {
                id_produk: idproduk
            }
        });

        console.log(edit);

        return res.status(200).redirect('/produk');

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error });
    }
};




module.exports = {
    tampilProduk, tambahProduk, hapusProduk, editProduk
}