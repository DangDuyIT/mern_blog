import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import post from "./router/posts.js";
import mongoose from "mongoose";

const DB_URI =
  "mongodb+srv://admin:Dsadsa123@cluster0.9dpef.mongodb.net/myFirstDatabase?retryWrites=true&w=majority;";

const app = express();
const PORT = process.env.port || 5000;

mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/post", post);
