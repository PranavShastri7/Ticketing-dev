import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { RequestValidationError } from "../errors/request-validation-error";
import { User } from "../models/user";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { BadRequestError } from "../errors/bad-request-error";
import {Password} from '../services/password'
import { validateRequest } from "../middlewares/validate-request";
const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ], 
  validateRequest,
  async (req: Request, res: Response) => {

   
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User Exists!");
      throw new BadRequestError("User Exists!");
    }
    
    const user = User.build({ email, password });
    await user.save();
    console.log("User Created!",email);

    //Generating JWT
    const token =jwt.sign({id:user.id, email:user.email,},process.env.JWT_KEY!);
      //return the user
      req.session={jwt:token};

      res.status(201).send(user);
  }
);

export { router as signupRouter };
