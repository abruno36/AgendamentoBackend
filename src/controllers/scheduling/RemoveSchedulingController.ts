import {Request, Response} from 'express'
import { RemoveSchedulingService } from '../../services/scheduling/RemoveSchedulingService'

class RemoveSchedulingController{
  async handle(req: Request, res: Response){
    const Scheduling_id = req.query.Scheduling_id as string;

    const removeScheduling = new RemoveSchedulingService();

    const Scheduling = await removeScheduling.execute({
      Scheduling_id
    });

    return res.json(Scheduling);

  }
}

export { RemoveSchedulingController }