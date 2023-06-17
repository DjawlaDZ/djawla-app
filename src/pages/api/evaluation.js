// Next.js API route support: https://nextjs.org/docs/api-routes/introduction 
import connectDB from '../../libs/connectDB.js'
import EvaluationSchema from '../../models/EvaluationSchema';


export default async function handler(req, res) {
    const { method } = req
    //database connection
      console.log("connecting to Database");
      await connectDB();
      console.log("CONNECTED to Database");
  
    //request handling

    switch (method) {
      case 'GET':
        try {
          const list = await EvaluationSchema.find({})
          res.status(200).json({ success: true, data: list })
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
      case 'POST':
        try {
          const list = await EvaluationSchema.create(req.body)
          res.status(201).json({ success: true, data: list })
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
      default:
        res.status(400).json({ success: false })
        break
    }
  }