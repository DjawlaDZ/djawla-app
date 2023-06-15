
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction 
const connectDB = require("../../../libs/connectDB.js");
import CommentSchema from '../../../models/CommentSchema';
export default async function handler(req, res) {
  const { query, method } = req;
  const { IdLieu } = query;
  connectDB()
  switch (method) {
    case 'GET':
      try {
        const Comments = await CommentSchema.find({lieu : IdLieu});
        res.status(200).json({ success: true, Comments });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false, error: error.message });
      }
      break;
      
    default:
      res.status(400).json({ success: false, message: 'Invalid method' });
      break;
  }
}