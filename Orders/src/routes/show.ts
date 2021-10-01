import { NotAuthorizedError, NotFoundError } from '@cygnetops/common';
import express, { Request, Response } from 'express';
import { Order } from '../models/order';

const router = express.Router();

router.get('/api/orders/:orderId', async (req: Request, res: Response) => {
  const order= Order.findById(req.params.orderId).populate('ticket');
  if( !order )
  {
    throw new NotFoundError();
  }
  //@ts-ignore
  if(order.userId!==req.currentUser!.id )
  {
    throw new NotAuthorizedError();
  }

  res.send({order});
});

export { router as showOrderRouter };
