const express = require("express");
const router = express.Router();
const ecommerce = require("../Models/apiModel");
const path = require("path");

// define the home page route
router.get("/", async (req, res) => {
  const notes = await ecommerce.find({});

  res.sendFile(path.join(__dirname, "../index.html"));
});

// adding the product
router.post("/products/create", async (req, res) => {
  const { name, quantity } = req.body;

  const query = await ecommerce({ name, quantity });
  query.save();

  res.send("Data added successfully.");
});

// listing the products
router.get("/products", async (req, res) => {
  try {
    const data = await ecommerce.find({});

    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured !");
  }
});

// api to update the data
router.put("/products/:id/update_quantity", async (req, res) => {
  try {
    let data = await ecommerce.find({ _id: req.params.id });
    let note = await ecommerce.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          ...data,
          quantity: data[0].quantity + parseInt(req.query.number),
        },
      },
      { new: true }
    );
    // console.log(data[0].quantity);
    res.json(note);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured !");
  }
});

// deleting the product
router.delete("/products/:id", async (req, res) => {
  try {
    let data = await ecommerce.findByIdAndDelete({ _id: req.params.id });

    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured !");
  }
});

module.exports = router;
