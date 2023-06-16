const mongoose = require("mongoose");

const EvaluationSchema = new mongoose.Schema({
  nbEtoiles: {
    type: Number,
    max: 5,
    min: 0,
    required: [true, 'le nombre d\'étoiles est obligatoire']
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: [true, 'le champ user est obligatoire']
  },
  lieu: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Lieu',
    required: [true, 'le champ lieu est obligatoire']
  }
});

module.exports = mongoose.models.Evaluation || mongoose.model('Evaluation', EvaluationSchema);