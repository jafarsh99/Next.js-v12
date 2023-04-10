import mongoose from "mongoose";

const kittySchema = new mongoose.Schema({
  name: String,
  job: String,
});

const Kitten = mongoose.model('Kitten', kittySchema);

export default Kitten;