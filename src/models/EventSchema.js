const mongoose = require("mongoose");

const Event = mongoose.model(
  "Event",
  new mongoose.Schema({
   
   nom: {
    type: String,
    required: [true, 'le nom est obligatoire']
   },
   descripton: {
    type: String,
    required: [true, 'ce champ est obligatoire']
   },
   frais: {
    type: Number,
    default: 0,
  },
  lieu: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Lieu'
  },
  ouverture: {
    type: Date,
    required: [true, 'la date et le temps d ouverture est obligatoire']
  },
  fermeture: {
    type: Date,
    required: [true, 'la date et le temps de fermeture est obligatoire']
  }

     
  })
);

module.exports = Event;
