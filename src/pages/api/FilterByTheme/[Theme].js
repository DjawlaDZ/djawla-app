
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction 
import connectDB from '../../../libs/connectDB.js'
import LieuSchema from '../../../models/LieuSchema';

export default async function handler(req, res) {
  const { query, method } = req;
  const { Theme } = query;
  //database connection
  console.log("connecting to Database");
  await connectDB();
  console.log("CONNECTED to Database");

  //request handling
  switch (method) {
    case 'GET':
      try {
        console.log(typeof(Theme));
        const place = await LieuSchema.find({theme : Theme});
        res.status(200).json({ success: true, place });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false, error: error.message });
      }
      break;
      
    default:
      res.status(400).json({ success: false, message: 'InvalTheme method' });
      break;
  }
}