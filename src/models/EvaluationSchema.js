const mongoose = require("mongoose");

const Evaluation = mongoose.model(
  "Evaluation",
  new mongoose.Schema({
   
    nbEtoiles: {
        type: Number,
        max: 5,
        min: 0,
        required: [true, 'le nombre detoiles est obligatoire']
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: [true, 'le champ user est obligatoire']
    },
    lieu: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Lieu',
        required: [true, 'le champ lieu est obligatoire']
    }
   

     
  })
);

module.exports = Evaluation;
