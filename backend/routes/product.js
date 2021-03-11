const express = require('express');
const router = express.Router();

// @Get all products
router.get("/", async (req, res) => {
  try {
   // const allProducts =  await Product.find();
    res.status(200).json({message: 'hello'});
  } catch (err) {
    res.status(404).json({error: 'Your request could not be processed. Please try again.'});
  }
  });

// @Get product by id
router.get("/:id", async(req, res) => {
  const productId = req.params.id; 
  try {
    const queriedProduct = await Product.findById({_id: productId});
    // add populate query to append category and brand data
    res.status(200).json(queriedProduct);
  } catch (err) {
    res.status(404).json({error: 'Your request could not be processed. Please try again.'});
  }
  }); 

// @Get product by category selection dropdown not category link so need to add data-label to form selector?
router.get("/category/:category", async(req, res) => {
  const categoryName = req.params.category; 
  try {
    const queriedCategory = await Category.findById({name: categoryName});
    // add populate query to append product and brand data
    res.status(200).json(queriedCategory);
  } catch (err) {
    res.status(404).json({error: 'Your request could not be processed. Please try again.'});
  }
  }); 

// @Get product by brand selection // test for fetching id by dropdown
router.get("/brand/:brand", async(req, res) => {
  const brandName = req.params.category.id; 
  try {
    const queriedCategory = await Brand.findById({name: brandName});
    // add populate query to append product and category data
    res.status(200).json(queriedCategory);
  } catch (err) {
    res.status(404).json({error: 'Your request could not be processed. Please try again.'});
  }
  }); 

module.exports = router;