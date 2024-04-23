const mongose = require("mongoose")

const productsScema = new mongose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: [true, "price must be provided"]
    },
    featured: {
        type: Boolean,
        default: false
    },
    ratings: {
        type: Number,
        default: 4.9
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ["apple", "samsung", "dell", "mi"],
            message: `{value} is not supported`
        }
    }

})

module.exports = mongose.model("Product", productsScema)