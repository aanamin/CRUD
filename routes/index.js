const server={}
const kategori = require('./kategori')
var express = require('express');
const produk = require('./produk')

server.kategori = kategori
server.produk = produk

module.exports = server;
