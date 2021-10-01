import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import mongoose from "mongoose";
import cookieSession from "cookie-session";
import cors from 'cors';
import { NotFoundError } from "./errors/not-found-error";
import { createTicketRouter } from "./routes/new";
import { showTicketRouter } from "./routes/show";
import { updateTicketRouter } from "./routes/update"; 

const app = express();




app.use(json());
app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(updateTicketRouter);
app.all("*", async (req, res) => {
  throw new NotFoundError();
});





const start = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Tickets");
    console.log("Connected to MongoDb");
  } catch (err) {
    console.error(err);
  }

  app.listen(5001, () => {
    console.log("Ticketing Service Listening on port 5001!!!!!!!!");
  });
};

start();
