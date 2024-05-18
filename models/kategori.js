const {DataTypes} = require('sequelize')
const sequelize = require('../config/dbConfig')

const kategori = sequelize.define('kategori', {
    id_kategori:{
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    nama_kategori: {
        type: DataTypes.STRING(50),
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
    tableName: 'kategori',
    timeStamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

module.exports = kategori