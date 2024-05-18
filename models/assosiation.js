const kategori = require('./kategori')
const produk = require('./produk')

kategori.hasMany(produk, {foreignKey: 'id_kategori'})
produk.belongsTo(kategori, {foreignKey: 'id_kategori'})

module.exports = {produk, kategori}