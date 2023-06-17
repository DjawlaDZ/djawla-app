
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction 
import connectDB from '../../../libs/connectDB.js'
import EventSchema from '../../../models/EventSchema';
export default async function handler(req, res) {
  const { query, method } = req;
  const { IdLieu } = query;
  //database connection
  console.log("connecting to Database");
  await connectDB();
  console.log("CONNECTED to Database");

  //request handling
  switch (method) {
    case 'GET':
      try {
        const Evenements = await EventSchema.find({lieu : IdLieu});
        res.status(200).json({ success: true, Evenements });
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