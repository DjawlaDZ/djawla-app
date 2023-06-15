const User = require('../models/userSchema.js') 


const checkDuplicateEmail = async (req, res, next) => {

    try {
        const user = await User.findOne({ email: req.body.email }).exec();
      
        if (user) {
          return res.status(400).send({ message: "Un utilisateur avec l'email introduit existe déja" });
        }
      
        next(); /* executer le middleware suivant */
      } catch (error) {
        return res.status(500).send({ message: error });
      }
}



module.exports={checkDuplicateEmail}