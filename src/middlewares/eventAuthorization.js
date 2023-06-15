const User = require('../models/userSchema.js') 


//event middlewares
const checkIfCanAddEvent = async (req, res,  next) => { //pour les actions permises que à l'echelle de la wilaya
    try {
        const user = await User.findById(req.userId)
        if (!user.permissions.includes("ajouter_event") || !user.permissions.includes("all")) {
            res.status(401).send({ message: "Vous n'etes pas authorisés à ajouter un evenement" });
        } else {
            next()
            }
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const checkIfCanModifyEvent = async (req, res,  next) => { //pour les actions permises que à l'echelle de la wilaya
    try {
        const user = await User.findById(req.userId)
        if (!user.permissions.includes("modifier_event") || !user.permissions.includes("all")) {
            res.status(401).send({ message: "Vous n'etes pas authorisés à modifier un evenement" });
        } else {
            next()
            }
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const checkIfCanDeleteEvent = async (req, res,  next) => { //pour les actions permises que à l'echelle de la wilaya
    try {
        const user = await User.findById(req.userId)
        if (!user.permissions.includes("supprimer_event") || !user.permissions.includes("all")) {
            res.status(401).send({ message: "Vous n'etes pas authorisés à supprimer un evenement" });
        } else {
            next()
            }
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
}

module.exports={ checkIfCanAddEvent, checkIfCanModifyEvent, checkIfCanDeleteEvent }