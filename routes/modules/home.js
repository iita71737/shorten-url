// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const makeRandom = require('../../public/javascripts/makeRandom')
// 引用 Todo model
const Url = require('../../models/Url')
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
    const protocol = req.protocol
    const host = req.headers.host

    const urlCode = makeRandom(digits)
    const query = { shorten_url: urlCode, origin_url: req.body.inputUrl }; 
    const urlcount = await Url.countDocuments(query); 

    if( urlcount === 0 ){   
      Url.create({
        shorten_url: urlCode,
        origin_url: req.body.inputUrl  
      }).then(  async () =>{
        const result = await Url.findOne(query).lean()
        //console.log(result)
        res.render('show', {
              result,
              protocol,
              host
          })
      }).catch( async(err) => {
        const err_query = { origin_url: req.body.inputUrl }
        const result = await Url.findOne(err_query).lean()
        res.render('show', {
              result,
              protocol,
              host
          })
      })
    } else {
      const result = await Url.findOne(query).lean()
      //console.log(result)
      res.render('show', {
            result,
            protocol,
            host
        })
    }
})

router.get('/:id', async (req, res) => { 
  try {
     const replyString = req.params.id
     const query = {shorten_url: replyString}
     const result = await Url.findOne(query).lean()
       console.log(result)
       res.redirect(`${result.origin_url}`);
  }catch (e) {
        console.warn(e)
    }
})

// 匯出路由模組
module.exports = router