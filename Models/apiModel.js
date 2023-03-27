const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  name: {
    type: "string",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  date: { type: "string", default: Date.now() },
});

const ecommerce = mongoose.model("ecommerce", todoSchema);

module.exports = ecommerce;
