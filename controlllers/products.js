const product = require("../Models/product")

const getAllProducts = async (req, res) => {

    const myData = await product.find()
    // res.status(200).json({ msg: "I am getAllProducts" })
    res.status(200).json({ myData })
}

const getAllProductsTesting = async (req, res) => {
    const { company, name } = req.query
    const queryObject = {}

    if (company) {
        queryObject.company = company
    }
    if (name) {
        queryObject.name = { $regex: name, $options: "i" }
    }
    // const myData = await product.find(req.query)
    const myData = await product.find(queryObject)
    console.log(req.query);
    res.status(200).json({ myData })
}


module.exports = { getAllProducts, getAllProductsTesting }