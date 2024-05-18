const {DataTypes} = require('sequelize')
const sequelize = require('../config/dbConfig')

const produk = sequelize.define('produk', {
    id_produk:{
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    id_kategori:{
        type: DataTypes.UUID,
        allowNull: false
    },
    nama_produk: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    harga:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    created_at:{
        type:DataTypes.DATE,
        allowNull: false
    },
    updated_at: {
        type:DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'produk',
    timeStamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

module.exports = produk