const modelKategori = require('../models/kategori')
const {Op, where, Model} = require('sequelize')

const tampilKategori = async(req,res) =>{
    try{
        const dataKategori = await modelKategori.findAll();       //ambil semua data

        // console.log(dataKategori);

        if (dataKategori.length > 0) {       //di cek dulu berapa penjang data yang didapat, karena datanya berupa array, jadi length nya dapat diketahui, jika tidak ada data, maka length nya 0
            res.status(200).render('kategori', {dataKategori});
        } else {
            res.status(400).json({ success: false, message: 'Data kategori tidak tersedia', data: dataKategori });
        }


    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error });
    }
}

const addKategori = async(req,res) =>{
    try {
        const {nama_kategori} = req.body
        if(!nama_kategori){
            return res.status(400).json({ success: false, message: 'Maaf masukkan nama kategori terlebih dahulu'})
        }
        const findKategori = await modelKategori.findOne({      //dipastikan dulu apakah kategori sudah ada atau belum, dengan mencari nama kategori yang sama dengan yang diinput user pada req.body
            where: {
                nama_kategori: nama_kategori
            }
        })
        
        if (findKategori) {
            return res.status(400).json({success: false, message:"Kategori tersebut telah ada"})
        }

        const tambahKategori = await modelKategori.create({     //jika tidak ada, maka inputkan kategori ke database
            nama_kategori: nama_kategori
        })

        if (tambahKategori) {
            // res.status(200).json({success: true, message:"Kategori berhasil ditambah"})
            res.status(200).redirect('/kategori')
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error });
    }
}

const deleteKategori = async(req,res)=>{
    try {
        const {id_kategori} = req.params
        console.log(id_kategori);
        const hapus = await modelKategori.destroy({
            where:{
                id_kategori: id_kategori
            }
        })
        console.log(hapus);
        // if (hapus) {
        //     return res.status(200).json({
        //         success: true,
        //         message:"data berhasil dihapus"
        //     })
        // } else {
        //     return res.status(500).json({
        //         success: false,
        //         message: "data gagal dihapus"
        //     })
        // }

        res.status(200).redirect('/kategori');

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error });
    }
}

const updateKategori = async(req,res)=>{
    try {
    const {nama_kategori} = req.body
    const {id_kategori} = req.params
        console.log(nama_kategori);
    const findKategori = await modelKategori.findOne({
        where:{
            nama_kategori: nama_kategori
        }
    })
    if (findKategori) {
        return res.status(400).json({
            success: false,
            message:"kategori tersebut telah ada"
        })
       
    }
    
    const doneUpdate = await modelKategori.update({
            nama_kategori: nama_kategori
    },{
        where:{
            id_kategori: id_kategori
        }
    })

    if(doneUpdate){
        res.status(200).json({success: true,
            message: "data berhasil diupdate"
        })
        return
    }else{
        res.status(400).json({
            success: false,
            message:"data gagal diupdate"
        })
        return
    }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message:"data gagal diupdate"
        })
    }
}
module.exports = {
    tampilKategori,
    addKategori,
    deleteKategori,
    updateKategori
}