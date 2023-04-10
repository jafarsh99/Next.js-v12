// create mongodb connection

import mongoose from "mongoose";

const main = async () => {
  await mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.t7ree5r.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("Database Connected");
};

export default main;
