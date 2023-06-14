import { Schema, model, models } from "mongoose";

//import user schema
const locationSchema = new Schema({
  text: String,
  link: String,
});

const descriptionSchema = new Schema({
  short: String,
  long: String,
});

const roomsSchema = new Schema({
  height: Number,
  width: Number,
  length: Number,
  beedrooms: Number,
  rooms: Number,
});

const unitSchema = new Schema({
  type: String,
  finishing: String,
  area: Number,
  rooms: [roomsSchema],
  city: String,
  level: Number,
  image: Buffer,
  title: String,
  isFav: Boolean,
  description: descriptionSchema,
  location: locationSchema,
});
const Unit = models?.Unit || model("Unit", unitSchema);

export default Unit;
/*



export default Unit; */
