import {Request, Response} from 'express'
import { RemoveSchedulingService } from '../../services/scheduling/RemoveSchedulingService'

class RemoveSchedulingController{
  async handle(req: Request, res: Response){
    const scheduling_id = req.query.scheduling_id as string;

    const removeScheduling = new RemoveSchedulingService();

    const Scheduling = await removeScheduling.execute({
      scheduling_id
    });

    return res.json(Scheduling);

  }
}

export { RemoveSchedulingController }