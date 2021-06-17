const mongoose = require('mongoose')
const schema = mongoose.Schema

const urls = new schema({
    shorten_url: {
        type: String,
        require: true
    },
    origin_url: {
        type:String,
        require:true,
        unique: true 
    }
})
mongoose.set('useCreateIndex', true);
module.exports = mongoose.model('Url', urls )