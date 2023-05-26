const mongoose = require("mongoose");

const Ville = mongoose.model(
  "Ville",
  new mongoose.Schema({
   
    code: {
      type: Number,
      required:[true,'le champ code est obligatoire']
    },
    nom: {
      type: String,
      required:[true,'le champ nom est obligatoire']
    },
    longitude: {
      type: Number,
      required: [true, 'ce champ est obligatoire'],
      float: true,
     }, 
     latitude: {
      type: Number,
      float: true,
      required: [true, 'ce champ est obligatoire']
     }
     
  })
);

module.exports = Ville;
