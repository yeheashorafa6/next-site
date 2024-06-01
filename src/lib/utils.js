import mongoose from "mongoose";

export const connectdb = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected to the database");
    return true;
  }

  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Connecting to the database...");
    return true;
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

export default connectdb;
