const express = require('express')
const router = express.Router();


const { getProducts, newProduct } = require('../controllers/productController')

 
router.route('/').get(getProducts);

router.route('/new').post(newProduct);

module.exports = router;