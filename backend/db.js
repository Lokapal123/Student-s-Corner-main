const mongoose = require("mongoose");

const url =
  "mongodb+srv://lokapalsanapala2003:GH92QvG6jo7vChGd@cluster7.wvhdow5.mongodb.net/";
  //mongodb+srv://lokapalsanapala2003:GH92QvG6jo7vChGd@cluster7.wvhdow5.mongodb.net/
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
