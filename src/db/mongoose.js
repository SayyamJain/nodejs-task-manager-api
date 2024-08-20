const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    // console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error conecting to MongoDB:", error);
  });
