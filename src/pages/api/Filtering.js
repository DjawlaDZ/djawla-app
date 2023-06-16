const connectDB = require("../../libs/connectDB.js");
import LieuSchema from '../../models/LieuSchema';

export default async function handler(req, res) {
  const { query, method } = req;
  const { Theme, wilaya, Category } = query;
  connectDB();
  switch (method) {
    case 'GET':
      try {
        let filters = {};

        if (Theme) {
          filters.theme = Theme;
        }

        if (wilaya) {
          filters.wilaya = wilaya;
        }

        if (Category) {
          filters.categorie = Category;
        }

        const places = await LieuSchema.find(filters);
        res.status(200).json({ success: true, places });
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