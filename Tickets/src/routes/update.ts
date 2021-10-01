
import express , {Request , Response} from 'express'
import {body} from 'express-validator'
import { NotFoundError } from '../errors/not-found-error';
import { Ticket } from '../models/ticket';
import mongoose from 'mongoose';
import {validateRequest} from '../middlewares/validate-request'

const router= express.Router();



router.put('/api/ticket/update/:id',

async (req:Request, res:Response)=>
{

    //check for authorization.
    const ticket= await Ticket.findById(req.params.id);
    if( !ticket ) 
    {
        console.log("Ticket Not found.");
        throw new NotFoundError();
    }
    ticket.set(
        {
            title:req.body.title,
            price: req.body.price,
        }
    );
    await ticket.save();

res.send(ticket);
} );

export {router as updateTicketRouter}