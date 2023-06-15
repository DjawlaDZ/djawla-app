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
      enum: ['Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar', 'Blida', 'Bouira', 'Tamanrasset', 'Tébessa', 'Tlemcen', 'Tiaret', 'Tizi Ouzou', 'Alger', 'Djelfa', 'Jijel', 'Sétif', 'Saïda', 'Skikda', 'Sidi Bel Abbès', 'Annaba', 'Guelma', 'Constantine', 'Médéa', 'Mostaganem', 'MSila', 'Mascara', 'Ouargla', 'Oran', 'El Bayadh', 'Illizi', 'Bordj Bou Arreridj', 'Boumerdès', 'El Tarf', 'Tindouf', 'Tissemsilt', 'El Oued', 'Khenchela', 'Souk Ahras', 'Tipaza', 'Mila', 'Aïn Defla', 'Naâma', 'Aïn Témouchent', 'Ghardaïa', 'Relizane'],
     }
     
  }

module.exports =  mongoose.models.User || mongoose.model("User",new mongoose.Schema(User));
