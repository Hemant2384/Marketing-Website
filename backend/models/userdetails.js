const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userdetailshema = new schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
    },
    age : {
        type : Number,
        required : true,
    },
    gender : {
        type : String,
        required : true,
    }
})

module.exports = mongoose.model('userdetails' , userdetailshema)