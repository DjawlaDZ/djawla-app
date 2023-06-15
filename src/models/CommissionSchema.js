const mongoose = require("mongoose");

const Commission = {
   
   nom: {
    type: String,
    required: [true, 'le nom de la commission est obligatoire']
   },
   description: {
    type: String
   },
   responsable: {
    type: String,
    required: [true, 'le nom du responsable de la commission est obligatoire']
   },
   admin: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    unique: true,
    required: [true, 'le champ admin est obligatoire']
   }
  }

module.exports = mongoose.models.Commission || mongoose.model("Commission", new mongoose.Schema(Commission));
