var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    quantity: {type: Number, required: true, default:1},
    reserva: {type: Date, required: true, default: Date.now},
    livro: {type: Number, ref: 'Manga'},
});

module.exports = mongoose.model('reservas', schema);