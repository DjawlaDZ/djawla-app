const jwt = require("jsonwebtoken");
const User = require('../models/userSchema.js') 


const verifyToken = (req, res, next) => {
  let authorization = req.headers.authorization 
  

  if (!authorization) { /*authorization not specified in headers*/
    return res.status(403).send({ message: "Accés non authorisé, Token non present dans l'entete (headers) de la requête." }); 
  }

  let token = authorization.split(' ')[1];
  /*headers: {Authorization: "Token <token>*} 
   we extract the <token part from the request headers */

  jwt.verify(token, process.env.secret, (err, decoded) => { /*decrypt jwt*/
    if (err) {
      return res.status(401).send({ message: "Unauthorized" });
    }
    req.userId = decoded.id; /*get id from decrypted token*/
    next(); /*execute upcoming middlware*/
  });
};



module.exports={verifyToken}