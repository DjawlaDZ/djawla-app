const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: [true, 'le nom est obligatoire']
  },
  description: {
    type: String,
    required: [true, 'ce champ est obligatoire']
  },
  ville: {
    type: String,
    },
  frais: {
    type: Number,
    default: 0,
  },
  lieu: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Lieu'
  },
  ouverture: {
    type: Date,
    required: [true, 'la date et le temps d ouverture est obligatoire']
  },
  fermeture: {
    type: Date,
    required: [true, 'la date et le temps de fermeture est obligatoire']
  }
});

module.exports = mongoose.models.Event || mongoose.model('Event', EventSchema);