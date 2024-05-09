import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "add-mannager",
    });

    console.log("Db connected");
  } catch (error) {}
};
