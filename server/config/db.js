const mongoose = require("mongoose");

async function connectDB() {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Database Conntected: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectDB;
