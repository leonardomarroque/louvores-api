import express, { json } from "express";
import cors from "cors";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(json());

app.get("/", (req, res) => {
  res.send({ app: "Hello World!" });
});

app.listen(PORT);