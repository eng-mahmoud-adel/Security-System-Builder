import express from "express";
import cors from "cors";
import { cameras } from "./data/cameras";
import { sensors } from "./data/sensors";
import { protection } from "./data/protection";
import { plans } from "./data/plans";

const app = express();
const PORT = process.env.PORT ?? 5000;

app.use(cors());

app.get("/api/cameras", (_req, res) => {
  res.json(cameras);
});

app.get("/api/sensors", (_req, res) => {
  res.json(sensors);
});

app.get("/api/protection", (_req, res) => {
  res.json(protection);
});

app.get("/api/plans", (_req, res) => {
  res.json(plans);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
