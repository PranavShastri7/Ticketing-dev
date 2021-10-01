import express , {Request , Response} from 'express'
import {validateRequest} from '../middlewares/validate-request'
import {body} from 'express-validator'
import { Ticket } from '../models/ticket';
const router= express.Router();

router.post( '/api/ticket/new',
[
    body('title').not().isEmpty().withMessage('Title is Required.'),
    body('price').isFloat({gt:0}).withMessage('Price Must be Greater than Zero.')
],
validateRequest,
async (req:Request, res:Response)=>
{


    const {title,price}=req.body;
    const userId='asdf';
    const ticket= Ticket.build(
        {title,
        price,
        userId
        }
    )

    await ticket.save().then(()=>{
        console.log("Saved!");
    });


res.status(201).send({"message:":"Ticket Created!"});
} );
export {router as createTicketRouter}