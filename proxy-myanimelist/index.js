import express from "express";
import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || "5000";
const API_HOST = process.env.API_HOST;

const app = express();

app.use(cors());

const options = {
  target: API_HOST,
  changeOrigin: true,
  ws: true,
  headers: {
    [`${process.env.CLIENT_ID_KEY}`]: process.env.CLIENT_ID,
  },
};

const proxyMiddleware = createProxyMiddleware(options);

app.use("/", proxyMiddleware);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
