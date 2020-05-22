const express = require('express');

const {getAllProduct,
    getSingleProduct,
    getAllActiveProduct, 
    getAllCategory, 
    getCategoryProduct,
    getSearchResult, 
    getAllProductBrand, 
    activePosts,
    countAll,
    countActive,
    countBrand,
    countCat,
    getBrandProduct
    } = require("../controller/products");

const isAdmin = require('../middleware/isAdmin');

const router = express.Router();

// Get All Product EndPoint
router.get('/product',isAdmin, getAllProduct);
router.get('/product/:id',isAdmin, getSingleProduct);
router.get('/activeproduct',isAdmin, getAllActiveProduct)


// Get All Category
router.get('/category',isAdmin, getAllCategory);
router.post('/category/product',isAdmin, getCategoryProduct);

// Get all Brand
router.get('/brand',isAdmin, getAllProductBrand);
router.post('/brand/product', isAdmin, getBrandProduct);

// Get search result
router.post('/product/search',isAdmin,getSearchResult);
router.put('/update/active',isAdmin, activePosts);


router.get('/count', isAdmin, countAll)
router.get('/countcat', isAdmin, countCat)
router.get('/countbrand',isAdmin, countBrand)
router.get('/countactive',isAdmin, countActive)

module.exports = router;