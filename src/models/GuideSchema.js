const mongoose = require("mongoose");

const Guide = mongoose.model(
  "Guide",
  new mongoose.Schema({
   
   nom: {
    type: String,
    required: [true, 'le nom est obligatoire']
   },
   prenom: {
    type: String,
    required: [true, 'le prenom est obligatoire']
   },
   email: {
    type: String,
    required: [true, 'email est obligatoire']
   },
   tel: {
    type: Number,
    required: [true, 'le telephone est obligatoire']
   },
   commission: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Commission'
   },
   services: {
    type: [mongoose.SchemaTypes.Mixed],
    enum: [
      {'assisatnce linguistique':'2000'},
      {'informations et destinations':'2000',},
      {'accompagnement et securité':'2000'},
      {'service personalisé':'2000'},
    ]
   }
     
  })
);

module.exports = Guide;
