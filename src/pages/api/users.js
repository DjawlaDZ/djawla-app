// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const connectDB = require("../../libs/connectDB.js")


   
export default async function handler(req, res) {

  connectDB();
  res.status(200).json({ name: 'John Doe' })
}
