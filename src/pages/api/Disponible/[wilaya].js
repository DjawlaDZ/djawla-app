
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction 
const connectDB = require("../../../libs/connectDB.js");
import GuideSchema from '../../../models/GuideSchema';

export default async function handler(req, res) {
  const { query, method } = req;
  const { wilaya } = query;
  connectDB()
  switch (method) {
    case 'GET':
      try {
        const place = await GuideSchema.find({wilaya : wilaya});
        res.status(200).json({ success: true, place });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false, error: error.message });
      }
      break;
      
    default:
      res.status(400).json({ success: false, message: 'Invalwilaya method' });
      break;
  }
}