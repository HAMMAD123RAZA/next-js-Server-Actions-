import mongoose from "mongoose";

const DB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017", {
      dbName: "nextJs",
    });
    console.log("DB connected");
  } catch (error) {
    console.log("Error in DB connection:", error);
  }
};

export default DB;
