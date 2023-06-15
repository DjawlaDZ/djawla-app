
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction 
const connectDB = require("../../../libs/connectDB.js");
import LieuSchema from '../../../models/LieuSchema';

export default async function handler(req, res) {
  const { query, method } = req;
  const { Wilaya } = query;
  connectDB()
  switch (method) {
    case 'GET':
      try {
        console.log(typeof(Wilaya));
        const place = await LieuSchema.find({wilaya : Wilaya});
        res.status(200).json({ success: true, place });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false, error: error.message });
      }
      break;
      
    default:
      res.status(400).json({ success: false, message: 'InvalWilaya method' });
      break;
  }
}