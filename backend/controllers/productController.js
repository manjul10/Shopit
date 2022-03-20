const res = require('express/lib/response')
const Product = require('../models/product')

//Create new product  =>  /api/v1/product/new
exports.newProduct = async (req, res, next) =>{

  const product = await Product.create(req.body);


  return res.status(201).json({
    success: true,
    product
  })
}


exports.getProducts = (req, res, next) => {
    return res.status(200).json({  
      success: true,
      message: 'This route will show all products in database.'
  })
  } 