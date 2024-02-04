import mongoose from "mongoose";

async function databaseConnection() {
  try {
    const dbConn = await mongoose.connect(process.env.DB_PORT, {
      useNewUrlParser: true,
    });
    dbConn && console.log("database is connected...");
  } catch (e) {
    console.error(e);
  }
}
export default databaseConnection;
