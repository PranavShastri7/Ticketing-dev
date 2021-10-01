import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import mongoose from "mongoose";

import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";

import cookieSession from "cookie-session";
import cors from 'cors';

const app = express();
app.use(json());
app.use(cookieSession(
  {
    signed:false,
    secure:false
  }
));


const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.use(cors({
  origin:'*'
}));
app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Auth");
    console.log("Connected to MongoDb");
  } catch (err) {
    console.error(err);
  }

  app.listen(5000, () => {
    console.log("Auth Service Listening on port 5000!!!!!!!!");
  });
};

start();
