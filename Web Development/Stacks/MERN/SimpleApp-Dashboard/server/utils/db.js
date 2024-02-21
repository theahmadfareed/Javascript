const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/thapa_mern";
// mongoose.connect(URI);
const URI = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("🗃️   DB Connected!");
  } catch (error) {
    console.error("🗃️ DB  Connection Failed!");
    process.exit(0);
  }
};

module.exports = connectDb;
