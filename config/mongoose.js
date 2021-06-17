  
const mongoose = require('mongoose') // 載入 mongoose
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/shorten-url'

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }) // 設定連線到 mongoDB
// 取得資料庫連線狀態
const db = mongoose.connection
// 連線異常
db.on('error',() => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', async () => {
    try {
    console.log('mongodb connected!')
  }
  catch (err) {
    console.error(err.message);
    process.exit(1);
  }
})

module.exports = db