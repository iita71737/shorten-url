// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const makeRandom = require('../../public/javascripts/makeRandom')
// 引用 Todo model
const Url = require('../../models/Url')
// 定義首頁路由
const digits = 5

router.get("/", async (req, res) => {
    try {
      res.render('index')
    }
    catch (e) {
        console.warn(e)
    }
})

router.post('/shortenurl', async (req, res) => { 
    const urlCode = makeRandom(digits)
    const query = { shorten_url: '0Gg6T4' }; 
    const urlcount = await Url.countDocuments(query); 

    if( urlcount === 0 ){   
      Url.create({
        shorten_url: urlCode,
        origin_url: req.body.inputUrl  
      }).then( () =>{
        res.render('show')
      }).catch( (err) => {
        console.log(err)
      })
    } else {
      const result = await Url.findOne(query).lean()
      console.log(result)
      res.render('show', {
            result
        })
    }
      // 確認沒有重複，實際存入資料庫
      

})

// 匯出路由模組
module.exports = router