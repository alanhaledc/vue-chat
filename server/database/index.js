const mongoose = require('mongoose')

const DB_URL = 'mongodb://127.0.0.1:27017/chat'

mongoose.connect(DB_URL, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDb server connected successfully!')
  })
  .catch(err => {
    console.log(err)
  })

module.exports = mongoose
