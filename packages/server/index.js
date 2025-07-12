import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { connectDb } from "./configs/dbConfig.js";
import authRouter from "./routes/authRoute.js";

config();
connectDb();

const server = express();

server.use(express.json());
server.use(cors());
server.use("/api/v1/auth", authRouter);

const PORT = process.env.PORT || 2000;
server.listen(PORT, () => `Server is running on port: ${PORT}`);
