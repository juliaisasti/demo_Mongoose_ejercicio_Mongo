const mongoose = require('mongoose');

const objectSchema = {
    title: String,
    publisher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Publisher'
    }
}

// Crear el esquema
const gameSchema = mongoose.Schema(objectSchema);
// Crear el modelo
const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
