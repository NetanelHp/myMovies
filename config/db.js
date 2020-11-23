const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || process.env.MONGODB_URL,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      console.log("DB connected")
    );
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = connectDB;
