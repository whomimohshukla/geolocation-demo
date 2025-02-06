const { default: mongoose } = require("mongoose");

exports.conectDb = () => {
  mongoose
    .connect("mongodb://localhost:27017/geo")
    .then(() => {
      console.log("connected to db");
    })
    .catch(() => {
      console.log("error connecting to db");
    });
};
