
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction 
const connectDB = require("../../../libs/connectDB.js");
import LieuSchema from '../../../models/LieuSchema';

export default async function handler(req, res) {
  const { query, method } = req;
  const { Category } = query;
  connectDB()
  switch (method) {
    case 'GET':
      try {
        console.log(typeof(Category));
        const place = await LieuSchema.find({categorie : Category});
        res.status(200).json({ success: true, place });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false, error: error.message });
      }
      break;
      
    default:
      res.status(400).json({ success: false, message: 'InvalCategory method' });
      break;
  }
}