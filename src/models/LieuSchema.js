const mongoose = require("mongoose");

const Lieu = mongoose.model(
  "Lieu",
  new mongoose.Schema({
   
   nom: {
    type: String,
    required: [true, 'ce champ est obligatoire']
   },
   imagesUrl: {
   type: [String]
   },
   descripton: {
    type: String,
    required: [true, 'ce champ est obligatoire']
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
   }, 
     heureOuverture: {
      type: Date,
      required: [true, 'ce champ est obligatoire']
     },
     heureFermeture: {
      type: Date,
      required: [true, 'ce champ est obligatoire']
     },
     joursOuverture: {
      type: [String],
      enum: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
      required: [true, 'ce champ est obligatoire']
     },
     categorie: {
      type: [String],
      enum: ['Monuments','Musées','Places']
     },
     theme: {
      type: [String],
      enum: ['Naturel','Histoire']
     },
     ville: {
      type: mongoose.SchemaTypes.ObjectId,
      ref:'Ville',
      enum: ['Monuments','Musées','Places']
     },
     createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref:'User'    
    }

  })
);

module.exports = Lieu;
