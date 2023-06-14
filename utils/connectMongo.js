import mongoose from "mongoose";
const connectMongo = async () =>
  mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
export default connectMongo;
