const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
   
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
     permissions: {
      type: [String],
      enum: ['none','ajouter_lieu','modifier_lieu','supprimer_lieu',
              'ajouter_event','modifier_event','supprimer_event',
              'ajouter_guide','modifier_guide','supprimer_guide','all']
     },
     favoris: {
      type: [mongoose.SchemaTypes.ObjectId],
      ref: 'Lieu'
     },
     wilaya: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Wilaya',
      required: false
     }
     
  })
);

module.exports = User;
