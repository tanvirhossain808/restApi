// wDFwXWQw9t7nVKca
// const uri = "mongodb+srv://tanvirhossen808:<password>@cluster0.kv3nqll.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const mongoose = require("mongoose")


// const uri = "mongodb+srv://tanvirhossen808:wDFwXWQw9t7nVKca@cluster0.kv3nqll.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const connectDb = (uri) => {
    console.log("hey")
    return mongoose.connect(uri, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true
    })
}

module.exports = connectDb