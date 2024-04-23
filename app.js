const express = require("express")
const app = express()
require("dotenv").config()
const products_routes = require("./Routes/products")
const connectDb = require("./Db/connect")
const PORT = process.env.PORT || 5000
app.get("/", (req, res) => {
    res.send("Hi, I am live")
})

app.use("/api/products", products_routes)

const start = async () => {
    try {
        await connectDb(process.env.MONGODB_URL)
        app.listen(PORT, () => {
            console.log(`Yes i am connected ${PORT}`)
        })
    }
    catch (error) {
        console.log(error)
    }
}
start()