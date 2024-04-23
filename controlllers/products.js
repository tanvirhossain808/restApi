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

        apiData = apiData.sort(sortFix)

    }
    let page = Number(req.query.page) || 1
    let limit = Number(req.query.limit) || 3
    let skip = (page - 1) * limit

    apiData = apiData.skip(skip).limit(limit)
    // res.status(200).json({ msg: "I am getAllProducts" })
    const myData = await apiData
    res.status(200).json({ myData, nbHits: myData.length })
}

const getAllProductsTesting = async (req, res) => {
    const { company, name, select } = req.query
    const queryObject = {}
    let apiData = product.find(queryObject)
    if (company) {
        queryObject.company = company
    }
    if (select) {
        const selectFix = select.split(",").join(" ")
        apiData = apiData.select(selectFix)


    }
    // if (name) {
    //     queryObject.name = { $regex: name, $options: "i" }
    // }

    // const myData = await product.find(req.query)
    // const myData = await product.find(queryObject)
    const myData = await apiData.select("company")

    // const myData = await product.find(req.query).sort("company")

    res.status(200).json({ myData })
}


module.exports = { getAllProducts, getAllProductsTesting }