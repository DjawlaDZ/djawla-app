const mongoose = require("mongoose");

const LieuSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: [true, 'ce champ est obligatoire']
  },
  imagesUrl: {
    type: [String]
  },
  description: {
    type: String,
    // required: [true, 'ce champ est obligatoire']
  },
  longitude: {
    type: Number,
    // required: [true, 'ce champ est obligatoire'],
    float: true,
  },
  latitude: {
    type: Number,
    float: true,
    // required: [true, 'ce champ est obligatoire']
  },
  heureOuverture: {
    type: Date,
    // required: [true, 'ce champ est obligatoire']
  },
  heureFermeture: {
    type: Date,
    // required: [true, 'ce champ est obligatoire']
  },
  joursOuverture: {
    type: [String],
    enum: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    // required: [true, 'ce champ est obligatoire']
  },
  categorie: {
    type: [String],
    enum: ['Monuments', 'Musées', 'Places']
  },
  theme: {
    type: [String],
    enum: ['Naturel', 'Histoire']
  },
  wilaya: {
    type: String,
    enum: ['Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar', 'Blida', 'Bouira', 'Tamanrasset', 'Tébessa', 'Tlemcen', 'Tiaret', 'Tizi Ouzou', 'Alger', 'Djelfa', 'Jijel', 'Sétif', 'Saïda', 'Skikda', 'Sidi Bel Abbès', 'Annaba', 'Guelma', 'Constantine', 'Médéa', 'Mostaganem', 'MSila', 'Mascara', 'Ouargla', 'Oran', 'El Bayadh', 'Illizi', 'Bordj Bou Arreridj', 'Boumerdès', 'El Tarf', 'Tindouf', 'Tissemsilt', 'El Oued', 'Khenchela', 'Souk Ahras', 'Tipaza', 'Mila', 'Aïn Defla', 'Naâma', 'Aïn Témouchent', 'Ghardaïa', 'Relizane']
  },
  createdBy: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.models.Lieu || mongoose.model('Lieu', LieuSchema);