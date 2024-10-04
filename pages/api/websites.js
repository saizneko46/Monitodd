import dbConnect from '../../utils/dbConnect'
import Website from '../../models/Website'

export default async function handler(req, res) {
  await dbConnect()

  switch (req.method) {
    case 'GET':
      try {
        const websites = await Website.find({})
        res.status(200).json({ success: true, data: websites })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const website = await Website.create(req.body)
        res.status(201).json({ success: true, data: website })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
