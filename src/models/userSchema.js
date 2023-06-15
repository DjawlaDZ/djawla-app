const mongoose = require("mongoose");


const User = {
   
    nom: {
      type: String,
      required: [true, 'la champ nom est obligatoire']
     },
     prenom: {
      type: String,
      required: [true, 'la champ prenom est obligatoire']
     },
     email: {
      type: String,
      required: [true, 'la champ email est obligatoire']
     },
     mdp: {
      type: String,
      required: [true, 'le mot de passe est obligatoire']
     },
     dateCreation: {
      type: Date,
      default: Date.now,
     },
     dateDerniereConnexion: {
      type: Date,
      default: Date.now,
     },
     roles: {
      type: [String],
      enum: ['normal','adminMinistere','adminWilaya'],
     },
     permissions: {
      type: [String],
      enum: ['none','ajouter_lieu','modifier_lieu','supprimer_lieu',
              'ajouter_event','modifier_event','supprimer_event',
              'ajouter_guide','modifier_guide','supprimer_guide','all'],
     },
     favoris: {
      type: [mongoose.SchemaTypes.ObjectId],
      required: false,
      ref: 'Lieu'
     },
     wilaya: {
      required:[true,'la wilaya est obligatoire'],
      type: String,
      enum: ['Alger','Tizi','Bejaia','Batna','Oran','Adrar','Tiaret'],
     }
     
  }

module.exports =  mongoose.models.User || mongoose.model("User",new mongoose.Schema(User));
