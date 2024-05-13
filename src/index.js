import express from "express";
import userRouter from "../routes/userRoutes.js";
import instructorRouter from "../routes/instructorRoutes.js";
import { connect } from "../config/db.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/instructor", instructorRouter);

const port = 3001;
connect();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
