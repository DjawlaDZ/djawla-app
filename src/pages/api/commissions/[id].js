import connectDB from '../../../libs/connectDB.js'
const {updateCommission, deleteCommission, getCommissionDetail} = require('../../../server/services/commissionService.js')
const {checkIfAdminMinistere} = require('../../middlewares/authorization.js')
const {verifyToken} = require('../../middlewares/authJWT.js')
   
export default async function handler(req, res) {
    //database connection
    console.log("connecting to Database");
    await connectDB();
    console.log("CONNECTED to Database");

    //request handling
    if (req.method === 'GET') {
        const {id} = req.query
        const commission= await getCommissionDetail(id, res)
        res.status(200).json({data:commission})
  
    } else if (req.method === 'PUT') {

        verifyToken(req, res, () => {
            checkIfAdminMinistere(req, res, async () => {
                const {id} = req.query
                const newCommission = await updateCommission(id, req.body, res)
                res.status(200).json({message:`Commission ${newCommission.nom} created successfully`,data:newCommission})
            })
        })
    } else if (req.method === 'DELETE') {
        verifyToken(req, res, () => {
            checkIfAdminMinistere(req, res, async () => {
                const {id} = req.query
                const commission = await deleteCommission(id, res)
                res.status(200).json({message:`Commission ${commission.nom} created successfully`,data:commission})
            })
        })
    
    } else {
    res.status(400).json({ success: false })
  }
}