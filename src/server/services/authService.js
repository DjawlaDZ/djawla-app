// TO DO

// 1- REGISTER FCT (CREATE USER)
// 2- LOGIN FCT 

const User = require('../../models/userSchema') 

var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");


const createUser = async (req,res) => {
    const user = new User({
        nom: req.body.nom,
        prenom: req.body.prenom,
        roles: req.body.roles =! null ? req.body.roles : 'visiteur',
        email: req.body.email,
        mdp: bcrypt.hashSync(req.body.mdp, 8),
        permissions: req.body.permissions =! null ? req.body.permissions : ['none'], 
        wilaya: req.body.wilaya
      });
      
    try {
        await user.save();
        return user
      } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message});
      }
}


const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email,});

    if (!user) {
      return res.status(404).send({ message: "User with given email doesn't exist." });
    }

    const passwordIsValid = bcrypt.compareSync( /*compare given password with the user's password*/
      req.body.mdp,
      user.mdp
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        message: "Invalid Password.",
      });
    }

    const token = jwt.sign({ id: user.id }, process.env.secret, {
      expiresIn: 86400, /* 24 hours*/
    });



    return {
      id: user.id,
      nom: user.nom,
      prenom: user.prenom,
      email: user.email,
      permissions: user.permissions,
      roles: user.roles,
      wilaya:user.wilaya,
      token: token
    };
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};


module.exports = {createUser, loginUser}