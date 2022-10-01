import express from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json(), cors());

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
