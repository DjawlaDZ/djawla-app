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