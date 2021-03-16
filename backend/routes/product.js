const express = require("express");
const router = express.Router();
const { Product, Brand, Category } = require("../../database/index");

// @Get all products and join brand and category collections
router.get("/all", async (req, res) => {
  try {
    const allProducts = await Product.find({})
      .populate("brand")
      .populate("category");
    res.status(200).json(allProducts);
  } catch (err) {
    res
      .status(404)
      .json({
        error: "Your request could not be processed. Please try again.",
      });
  }
});

// @Get all categories for drawer selection
router.get("/category", async (req, res) => {
  try {
    const allCategories = await Category.find({})
    res.status(200).json(allCategories);
  } catch (err) {
    res
      .status(404)
      .json({
        error: "Your request could not be processed. Please try again.",
      });
  }
});

// @Get all brands for drawer selection
router.get("/brand", async (req, res) => {
  const brandId = req.params.id;
  try {
    const queriedBrand = await Brand.find({});
    res.status(200).json(queriedBrand);
  } catch (err) {
    res
      .status(404)
      .json({
        error: "Your request could not be processed. Please try again.",
      });
  }
});

// @Get products by category for category page
router.get("/category/:id", async (req, res) => {
  const categoryId = req.params.id;
  try {
    const queriedCategory = await Category.findById({_id: categoryId}).populate("products");
    // add populate query to append product 
    res.status(200).json(queriedCategory);
  } catch (err) {
    res
      .status(404)
      .json({
        error: "Your request could not be processed. Please try again.",
      });
  }
});

// @Get products by brand for brand page
router.get("/brand/:id", async (req, res) => {
  const brandId = req.params.id;
  try {
    const queriedBrand = await Brand.findById({ _id: brandId }).populate("products");
    res.status(200).json(queriedBrand);
  } catch (err) {
    res
      .status(404)
      .json({
        error: "Y.",
      });
  }
});

// @Get product by id and join brand and category collections
router.get("/:id", async (req, res) => {
  const productId = req.params.id;
  try {
    const queriedProduct = await Product.findById({ _id: productId })
      .populate("brand")
      .populate("category");
    res.status(200).json(queriedProduct);
  } catch (err) {
    res
      .status(404)
      .json({
        error: "Your request could not be processed. Please try again.",
      });
  }
});

/*
//==========POST REQUESTS FOR TESTING INITIAL SEED DATA IN POSTMAN============

// @POST product to db
router.post("/add", async ({ body }, res) => {
  try {
    const queriedProduct = await Product.create(body);
    res.status(200).json(queriedProduct);
  } catch (err) {
    res
      .status(404)
      .json({
        error: "Your request could not be processed. Please try again.",
      });
  }
});

// @POST brand
router.post("/add/brand", async ({ body }, res) => {
  try {
    const queriedBrand = await Brand.create(body);
    res.status(200).json(queriedBrand);
  } catch (err) {
    res
      .status(404)
      .json({
        error: "Your request could not be processed. Please try again.",
      });
  }
});

// @POST category
router.post("/add/category", async ({ body }, res) => {
  try {
    const queriedCategory = await Category.create(body);
    res.status(200).json(queriedCategory);
  } catch (err) {
    res
      .status(404)
      .json({
        error: "Your request could not be processed. Please try again.",
      });
  }
});
*/

module.exports = router;
