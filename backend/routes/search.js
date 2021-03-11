const express = require('express');
const router = express.Router();

// @Get testing data attributes on client side
router.get("/:term", async(req, res) => {
  const searchQuery = req.params.term; 
  try {
    console.log('response term onject', req.params.term );
    // add populate query to append category and brand data
    res.status(200).json({brand: searchQuery});
  } catch (err) {
    res.status(404).json({error: 'Your request could not be processed. Please try again.'});
  }
  }); 

module.exports = router;