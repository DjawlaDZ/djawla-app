
const User = require('../models/userSchema.js') 


const checkIfAdminMinistere = async (req, res, next) => { //for actions only permited for adminMinistere
    try {
        const user = await User.findById(req.userId)
        console.log(user.roles)
        if (user.roles == "adminMinistere") {
            next()
        
        } else {
            res.status(401).send({ message: "Seul l'admin du ministère peut effectuer cette operation" });
        }
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const checkIfAdminWilaya = async (req, res, next) => { //for actions only permited for adminMinistere
    try {
        const user = await User.findById(req.userId)
        console.log(user.roles)
        if (user.roles == "adminWilaya") {
            next()
        
        } else {
            res.status(401).send({ message: "Seul l'admin de la wilaya peut effectuer cette operation" });
        }
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
}


const checkIfFromWilaya = async (req, res, wilaya,  next) => { //pour les actions permises que à l'echelle de la wilaya
    try {
        const user = await User.findById(req.userId)
        console.log(user.wilaya)
        console.log(wilaya)
        console.log(wilaya==user.wilaya)
        if (user.wilaya == wilaya) {
            next()
        } else {
            res.status(401).send({ message: "Vous n'etes pas authorisés à effectuer cette operation sur la wilaya: "+wilaya });
            }
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
}




module.exports={checkIfAdminMinistere, checkIfAdminWilaya, checkIfFromWilaya}