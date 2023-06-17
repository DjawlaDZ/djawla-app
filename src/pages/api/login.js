// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from '../../libs/connectDB.js'
const { loginUser} = require('../../server/services/authService.js')
   

export default async function handler(req, res) {
  console.log("connecting to Database");
  await connectDB();
  console.log("CONNECTED to Database");
  if (req.method === 'POST') {
    const users= await loginUser(req, res)
    res.status(200).json({data:users})
  } else {
    res.status(400).json({ success: false })
  }
}