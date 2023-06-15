// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const connectDB = require("../../libs/connectDB.js")
const User = require('../../models/userSchema.js') 
const {createUser} = require('../../server/services/authService.js')
const {getUsers} = require('../../server/services/userService.js')
const {checkDuplicateEmail} = require('../../middlewares/verifySignUp.js')
export default async function handler(req, res) {
  connectDB()
  

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
