const mongoose = require('mongoose')
require('dotenv').config({path:'../.env'});

const connnectdb = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI,{
                useUnifiedTopology: true,
                useNewUrlParser: true
            }
            );
    }catch(err) {
        console.log(err);
    }
}

module.exports  = connnectdb