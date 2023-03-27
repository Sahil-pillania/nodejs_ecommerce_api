const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;

async function main() {
  try {
    let conn = await mongoose.connect(uri);
    if (conn) {
      console.log("Connected to database");
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = main;
