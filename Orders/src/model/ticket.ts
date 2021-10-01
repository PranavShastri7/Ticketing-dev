import mongoose, { mongo } from 'mongoose'

interface TicketAttr
{
title:string,
price:number
}

interface TicketDoc extends mongoose.Document
{
    title:string,
price:number
    
}


interface TicketModel extends mongoose.Model<TicketDoc>
{
build(TicketAttr):TicketDoc
}
    
const ticketTchema= new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },

    },
    {
        toJSON:{
            transform(doc,ret){
                ret.id=ret._id;
                delete ret._id;
            }
        }
    }
);

ticketTchema.statics.build=(attr:TicketAttr)=>{
 return new Ticket(attr);
}

const Ticket=mongoose.model<TicketDoc,TicketModel>('Ticket',ticketTchema);

export {Ticket}
