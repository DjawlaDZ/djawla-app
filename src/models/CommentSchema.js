const mongoose = require("mongoose");

const Comment = mongoose.model(
  "Comment",
  new mongoose.Schema({
   
   contenu: { 
    type: String,
    required: [true, 'ce champ est obligatoire']
  },
   utilisateur: {
    type: mongoose.SchemaTypes.ObjectId,
    Ref : 'User'
   },
   lieu: {
    type: mongoose.SchemaTypes.ObjectId,
    Ref : 'Lieu'
   },
   repliedTo: {
    type: mongoose.SchemaTypes.ObjectId,
    Ref : 'Comment'
   },
     
  })
);

module.exports = Comment;
