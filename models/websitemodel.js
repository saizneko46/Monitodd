import mongoose from 'mongoose'

const WebsiteSchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, 'Please add a website URL'],
    unique: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ['up', 'down', 'unknown'],
    default: 'unknown',
  },
  responseTime: {
    type: Number,
    default: 0,
  },
  lastChecked: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Website || mongoose.model('Website', WebsiteSchema)
