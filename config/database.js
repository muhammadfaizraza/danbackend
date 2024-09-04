const mongoose = require("mongoose");
const connectdatabase = () => {
  mongoose
    .connect("mongodb+srv://muhammadfaizraza48:hT4yPfY0kgd9yPxi@cluster0.vvrw0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("DB Connection Successfull"));
};
module.exports = connectdatabase;
