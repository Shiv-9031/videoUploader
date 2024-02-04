import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import databaseConnection from "./config/database.mjs";
import { fileURLToPath } from "url";

//importing routes
import mediaRoutes from "./routes/routes.mjs";
import morgan from "morgan";
import path from "path";

dotenv.config({ path: "./config/.env" });
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(cors());
//routes
app.use("/api/v1/media", mediaRoutes);
app.use("/media", express.static(path.join(__dirname, "media")));
app.use(morgan("dev"));

//database connection
databaseConnection();

app.listen(process.env.PORT, () =>
  console.log(`server is running on port ${process.env.PORT}`)
);
