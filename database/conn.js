import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);

    if (connection.readyState == 1) {
      console.log("Database Connected");
    }
  } catch (eroor) {
    return Promise.reject("hello world",eroor);
  }
};

export default connectMongo;
