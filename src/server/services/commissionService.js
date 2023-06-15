const commissionModel = require('../../models/CommissionSchema') 

const getCommissions = async (res) => {   
    try {
        const commissions = await commissionModel.find()
        return commissions
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"failed to get Commission"});
    }    
}

const createCommission = async (req,res) => {
    const commission = new commissionModel({
        nom: req.body.nom,
        description: req.body.description =! null ? req.body.description : '',
        responsable: req.body.responsable,
        admin: req.body.admin
      });
      
    try {
        await commission.save();
        return commission
      } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message});
      }
}

const getCommissionDetail = async (id, res) => {
    try {
        const commission = await commissionModel.findById(id)
        return commission
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"failed to get commission"});
    }    
}


const updateCommission = async (id, data, res) => { // id + request body 
    try {
        const commission = await commissionModel.findByIdAndUpdate(id, data, {"new":true})
        await commission.save()
        return commission
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message});
        }
    
    
}
const deleteCommission = async (id, res) => {
    try {
        const commission = await commissionModel.findByIdAndDelete(id)
        return commission
    } catch {
        res.status(500).json({message:error.message});
    }
    
}

module.exports = {getCommissions, createCommission, getCommissionDetail, updateCommission, deleteCommission}