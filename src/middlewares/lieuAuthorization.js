const User = require('../models/userSchema.js') 


//lieu middlewares
const checkIfCanAddLieu = async (req, res,  next) => { //pour les actions permises que à l'echelle de la wilaya
    try {
        const user = await User.findById(req.userId)
        if (!user.permissions.includes("ajouter_lieu") || !user.permissions.includes("all")) {
            res.status(401).send({ message: "Vous n'etes pas authorisés à ajouter un lieu" });
        } else {
            next()
            }
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const checkIfCanModifyLieu = async (req, res,  next) => { //pour les actions permises que à l'echelle de la wilaya
    try {
        const user = await User.findById(req.userId)
        if (!user.permissions.includes("modifier_lieu") || !user.permissions.includes("all")) {
            res.status(401).send({ message: "Vous n'etes pas authorisés à modifier un lieu" });
        } else {
            next()
            }
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const checkIfCanDeleteLieu = async (req, res,  next) => { //pour les actions permises que à l'echelle de la wilaya
    try {
        const user = await User.findById(req.userId)
        if (!user.permissions.includes("supprimer_lieu") || !user.permissions.includes("all")) {
            res.status(401).send({ message: "Vous n'etes pas authorisés à supprimer un lieu" });
        } else {
            next()
            }
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
}

module.exports={ checkIfCanAddLieu, checkIfCanModifyLieu, checkIfCanDeleteLieu }