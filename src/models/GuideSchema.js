const mongoose = require("mongoose");

const GuideSchema = new mongoose.Schema({
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
    // required: [true, 'le telephone est obligatoire']
  },
  wilaya: {
    type: String,
    enum: ['Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar', 'Blida', 'Bouira', 'Tamanrasset', 'Tébessa', 'Tlemcen', 'Tiaret', 'Tizi Ouzou', 'Alger', 'Djelfa', 'Jijel', 'Sétif', 'Saïda', 'Skikda', 'Sidi Bel Abbès', 'Annaba', 'Guelma', 'Constantine', 'Médéa', 'Mostaganem', 'MSila', 'Mascara', 'Ouargla', 'Oran', 'El Bayadh', 'Illizi', 'Bordj Bou Arreridj', 'Boumerdès', 'El Tarf', 'Tindouf', 'Tissemsilt', 'El Oued', 'Khenchela', 'Souk Ahras', 'Tipaza', 'Mila', 'Aïn Defla', 'Naâma', 'Aïn Témouchent', 'Ghardaïa', 'Relizane']
  },
  commission: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Commission'
  },
  services: {
    type: [String],
    enum: [
      'assisatnce linguistique',
      'informations et destinations',
      'accompagnement et securité',
      'service personalisé',
    ]
  }
});

module.exports = mongoose.models.Guide || mongoose.model('Guide', GuideSchema);