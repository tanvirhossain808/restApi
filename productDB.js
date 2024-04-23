require("dotenv").config()

const connectDB = require("./db/connect")
const product = require("./Models/product")

const Products = require("./Models/product")
const productJson = require("./product.json")
const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL)
        await product.deleteMany()
        await product.create(productJson)
        console.log("success");


    }
    catch (error) {
        console.log(error);

    }
}
start()