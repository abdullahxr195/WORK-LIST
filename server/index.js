import express from "express";
import "./src/config/db.js";
import { connectDb } from "./src/config/db.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import jobsRoutes from "../server/src/routes/jobs.Routes.js";
import categoryRoutes from "../server/src/routes/category.Routes.js";
import authRoutes from "./src/routes/auth.Routes.js";
import userRoutes from "./src/routes/user.Routes.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["PUT", "POST", "DELETE", "PATCH", "GET"],
    credentials: true,
  })
);

app.use("/api", jobsRoutes);
app.use("/api", categoryRoutes);
app.use("/api", authRoutes);
app.use("/api", userRoutes);
connectDb();

app.get("/health", (req, res) => {
  res.send("the server is healthy and work well . abdullah");
});

const port = process.env.PORT;
console.log(process.env.PORT);
app.listen(port, () => {
  console.log("server is working on port: http://localhost:", port);
});
