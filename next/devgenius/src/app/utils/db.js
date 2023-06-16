import mongoose from "mongoose";

const connector = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    throw new Error(error);
  }
};

export default connector;
