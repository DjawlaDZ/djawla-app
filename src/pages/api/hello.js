// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const connectDB = require("../../connectDB")
connectDB();

   
export default async function handler(req, res) {

  
  res.status(200).json({ name: 'John Doe' })
}
