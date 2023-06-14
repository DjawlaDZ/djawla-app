
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction 
const connectDB = require("../../../libs/connectDB.js");
import LieuSchema from '../../../models/LieuSchema';

export default async function handler(req, res) {
  const { query, method } = req;
  const { id } = query;
  connectDB()
  switch (method) {
    case 'GET':
      try {
        console.log(id);
        const place = await LieuSchema.findById(id);
        res.status(200).json({ success: true, place });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false, error: error.message });
      }
      break;

      case 'DELETE':
        try {           
            await LieuSchema.findByIdAndRemove(id);
            console.log('Item deleted successfully');
            res.status(200).json({ success: true });
        } catch (error) {
            res.status(400).json({ success: false });
        }
        break;
      
    default:
      res.status(400).json({ success: false, message: 'Invalid method' });
      break;
  }
}