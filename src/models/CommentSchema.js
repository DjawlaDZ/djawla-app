const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  contenu: {
    type: String,
    required: [true, 'ce champ est obligatoire']
  },
  utilisateur: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User'
  },
  lieu: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Lieu'
  },
  repliedTo: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Comment'
  }
});

module.exports = mongoose.models.Comment || mongoose.model('Comment', CommentSchema);