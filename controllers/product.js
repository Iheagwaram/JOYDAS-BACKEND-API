const { createProduct, fetchAllProducts } = require("../service/product/product")


const createProductController = async (req, res) =>{
    try {
        const newProduct = await createProduct(req, res);
        res.status(201).json({data: newProduct, message: `Product created successfully`, status:true })
    } catch (error) {
        res.status(500).json({data: error.message, message: `Failed to create product`, status: false})
    }
}

const fetchAllProductController = async (req, res) => {
    try {
        const product = await fetchAllProducts();
        res.status(201).json({data: product, message:`Product fetched successfully`, status: true})
    } catch (error) {
        res.status(500).json({ data: error.message, message: `Failed to create product`, status:false})
    }
}

module.exports = { createProductController, fetchAllProductController }