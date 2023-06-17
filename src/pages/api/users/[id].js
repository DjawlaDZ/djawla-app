import connectDB from '../../../libs/connectDB.js'
const {updateUser, deleteUser, getUserDetail} = require('../../../server/services/userService.js')

   
export default async function handler(req, res) {
  
  //database connection
  console.log("connecting to Database");
  await connectDB();
  console.log("CONNECTED to Database");

  //request handling
  if (req.method === 'GET') {
    const {id} = req.query
    const users= await getUserDetail(id, res)
    res.status(200).json({data:users})
  
} else if (req.method === 'PUT') {
    const {id} = req.query
    const newUser = await updateUser(id, req.body, res)
    res.status(200).json({message:`User ${newUser.nom} ${newUser.prenom} created successfully`,data:newUser})

} else if (req.method === 'DELETE') {
    const {id} = req.query
    const newUser = await deleteUser(id, res)
    res.status(200).json({message:`User ${newUser.nom} ${newUser.prenom} created successfully`,data:newUser})

} else {
    res.status(400).json({ success: false })
  }
}