var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

var Reservas = require("../models/reservas");
const Manga = require('../models/manga')

router.post('/addToReserva', async function (req, res, next) {
    //const itemId = req.params.id // _id
    console.log(req.body)

    try {
        Manga.findOne({ _id: req.body._id }, async (err, item) => {
            if (err) {
                return res.status(500).json({
                    myErrorTitle: "Um erro aconteceu na hora de salvar.",
                    myError: err,
                });
            } else {
                if (item) {

                    const reservas = new Reservas({
                        //characters: [{ type: Schema.Types.ObjectId, ref: 'Characters' }],
                        //genres: [{ type: Schema.Types.ObjectId, ref: 'Genres' }],
                        reserva: new Date(),
                        quantity: 1,
                        livro: req.body._id,
                    });

                    const userSaved = await reservas.save();

                    return res.status(200).json({
                        myMsgSucess: "Livro recuperada com sucesso.",
                        mangas: userSaved,
                    });
                }
            }
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            myErrorTitle: "Um erro aconteceu na hora de salvar.",
            myError: e,
        });
    }
});

router.get('/lista', function (req, res, next) {
    Reservas.find({}).populate({
        path: 'livro',
        populate: {
          path: 'authors',
          model: 'Author'
        }
      }).exec((err, documento) => {
        if (err) {
            console.log(res)
            return res.status(500).json({
                myErrorTitle: "Um erro aconteceu na hora de salvar.",
                myError: err,
            });
        } else {
            console.log(documento)
            return res.status(200).json({
                myMsgSucess: "Livro recuperada com sucesso.",
                books: documento,
            });
        }
    });
});

router.delete("/removeReserva/:id", async function (req, res) {
    const itemId = req.params.id
    console.log(itemId)

    try {
        Reservas.findOneAndRemove({ _id: itemId }, (err, Livro) => {
            if (err) {
                res.status(500).json({ message: 'Erro ao excluir o Livro' });
            } else {
                if (Livro) {
                    res.json({ message: 'Livro excluído com sucesso' });
                } else {
                    res.status(404).json({ message: 'Livro não encontrado' });
                }
            }
        });
    } catch (e) {
        return res.status(500).json({
            errorRecebido: "Um erro aconteceu na hora de buscar a mensagem",
            myError: e,
        });
    }
});

module.exports = router; 