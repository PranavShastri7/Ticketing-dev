import express , {Request , Response} from 'express'
import {body} from 'express-validator'
import { NotFoundError } from '../errors/not-found-error';
import { Ticket } from '../models/ticket';
import mongoose from 'mongoose';
const router= express.Router();


router.post('/api/ticket/show/:id',async (req:Request, res:Response)=>
{

   
    const ticket= await Ticket.findById(req.params.id);
    if( !ticket ) 
    {
        throw new NotFoundError();
    }

res.send(ticket);
} );





export {router as showTicketRouter}