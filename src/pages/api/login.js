// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const connectDB = require("../../libs/connectDB.js")
const User = require('../../models/userSchema.js') 
const { loginUser} = require('../../server/services/authService.js')
   

export default async function handler(req, res) {
    connectDB()
  if (req.method === 'POST') {
    const users= await loginUser(req, res)
    res.status(200).json({data:users})
  } else {
    res.status(400).json({ success: false })
  }
}