const User = require('../models/userSchema.js') 


//guide middlewares
const checkIfCanAddGuide = async (req, res,  next) => { //pour les actions permises que à l'echelle de la wilaya
    try {
        const user = await User.findById(req.userId)
        if (!user.permissions.includes("ajouter_guide") || !user.permissions.includes("all")) {
            res.status(401).send({ message: "Vous n'etes pas authorisés à ajouter un guide" });
        } else {
            next()
            }
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const checkIfCanModifyGuide = async (req, res,  next) => { //pour les actions permises que à l'echelle de la wilaya
    try {
        const user = await User.findById(req.userId)
        if (!user.permissions.includes("modifier_guide") || !user.permissions.includes("all")) {
            res.status(401).send({ message: "Vous n'etes pas authorisés à modifier un guide" });
        } else {
            next()
            }
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const checkIfCanDeleteGuide = async (req, res,  next) => { //pour les actions permises que à l'echelle de la wilaya
    try {
        const user = await User.findById(req.userId)
        if (!user.permissions.includes("supprimer_guide") || !user.permissions.includes("all")) {
            res.status(401).send({ message: "UnauthorVous n'etes pas authorisés à supprimer un guide" });
        } else {
            next()
            }
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
}

module.exports={ checkIfCanAddGuide, checkIfCanModifyGuide, checkIfCanDeleteGuide }