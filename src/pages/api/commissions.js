const connectDB = require("../../libs/connectDB.js")
const {getCommissions, createCommission} = require('../../server/services/commissionService.js')
const {checkIfAdminMinistere} = require('../../middlewares/authorization.js')
const {verifyToken} = require('../../middlewares/authJWT.js')

export default async function handler(req, res) {
  
    connectDB()
  

  if (req.method === 'GET') {
      const commissions= await getCommissions(res)
      res.status(200).json({data:commissions})    
  } 
  
  else if (req.method === 'POST') {

    verifyToken(req, res, () => {
        checkIfAdminMinistere(req, res, async () => {
            const newCommission = await createCommission(req, res)
            res.status(200).json({message:`Commission ${newCommission.nom} created successfully`,data:newCommission})
        })
    })
  
  } 

  else {
    res.status(400).json({ success: false })
  }
}
