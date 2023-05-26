const mongoose = require("mongoose");

const Wilaya = mongoose.model(
  "Wilaya",
  new mongoose.Schema({  
    code: {
      type: Number,
      required:[true,'le champ code est obligatoire']
    },
    nom: {
      type: String,
      required:[true,'le champ nom est obligatoire']
    }, 
  })
);

module.exports = Wilaya;
