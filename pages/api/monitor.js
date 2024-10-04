import dbConnect from '../../utils/dbConnect'
import Website from '../../models/Website'
import axios from 'axios'

export default async function handler(req, res) {
  await dbConnect()

  const websites = await Website.find({})

  for (let website of websites) {
    try {
      const start = Date.now()
      await axios.get(website.url)
      const responseTime = Date.now() - start

      website.status = 'up'
      website.responseTime = responseTime
      website.lastChecked = new Date()
    } catch (error) {
      website.status = 'down'
      website.lastChecked = new Date()
    }

    await website.save()
  }

  res.status(200).json({ success: true, message: 'Monitoring complete' })
}
