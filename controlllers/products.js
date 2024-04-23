const product = require("../Models/product")

const getAllProducts = async (req, res) => {

    // const myData = await product.find()
    const queryObject = {}
    const { company, name, sort } = req.query
    if (name) {
        queryObject.name = { $regex: name, $options: "i" }
    }
    let apiData = product.find(queryObject)
    if (sort) {
        let sortFix = sort.replace(",", " ")
        // queryObject.sort = sortFix
        console.log('heyd');
        apiData = apiData.sort(sortFix)
    }
    // res.status(200).json({ msg: "I am getAllProducts" })
    const myData = await apiData
    res.status(200).json({ myData })
}

const getAllProductsTesting = async (req, res) => {
    const { company, name } = req.query
    const queryObject = {}

    if (company) {
        queryObject.company = company
    }
    // if (name) {
    //     queryObject.name = { $regex: name, $options: "i" }
    // }

    // const myData = await product.find(req.query)
    // const myData = await product.find(queryObject)
    const myData = await product.find(req.query).sort("company")
    console.log(req.query);
    res.status(200).json({ myData })
}


module.exports = { getAllProducts, getAllProductsTesting }