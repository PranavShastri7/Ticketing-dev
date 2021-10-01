import mongoose from 'mongoose'

interface OrderAttr {
    UserId:string,
    status:string,
    expiresAt: Date,
    ticket: TicketDoc

}

interface OrderDoc extends mongoose.Document{

    UserId:string,
    status:string,
    expiresAt: Date,
    ticket: TicketDoc
    
}

interface OrderModel extends mongoose.Model<OrderDoc> {
    build(attr:OrderAttr):OrderDoc;
    
}


const orderSchema = new mongoose.Schema({
    UserId:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    expiresAt:
    {
        type:mongoose.Schema.Types.Date
    },
    ticket:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Ticket'
    }

},{
    toJSON:{
        transform(doc,ret){
            ret.id=ret._id
            delete ret._id;
        }

    }
});


orderSchema.statics.build=(attr:OrderAttr){
    return new Order(attr);
}

const Order=mongoose.model<OrderDoc,OrderModel>('Order',orderSchema);

export {Order};