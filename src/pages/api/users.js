// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const {createUser} = require('../../server/services/authService.js')
const {getUsers} = require('../../server/services/userService.js')
const {checkDuplicateEmail} = require('../../middlewares/verifySignUp.js')
import connectDB from '../../libs/connectDB.js'




export default async function handler(req, res) {
  console.log("connecting to Database");
  await connectDB();
  console.log("CONNECTED to Database");
  

  if (req.method === 'GET') {
      const users= await getUsers(res)
      res.status(200).json({data:users})    
  } 
  
  else if (req.method === 'POST') {
    checkDuplicateEmail(req, res, async () => {
      const newUser = await createUser(req, res)
      res.status(200).json({message:`User ${newUser.nom} ${newUser.prenom} created successfully`,data:newUser})
    })    
  } 
  else {
    res.status(400).json({ success: false })
  }
}
