// Next.js API route support: https://nextjs.org/docs/api-routes/introduction 
const connectDB = require("../../libs/connectDB.js");
import LieuSchema from '../../models/LieuSchema';


export default async function handler(req, res) {
    const { method } = req
    connectDB()

    switch (method) {
      case 'GET':
        try {
          const list = await LieuSchema.find({})
          res.status(200).json({ success: true, data: list })
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
      case 'POST':
        try {
          const list = await LieuSchema.create(req.body)
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