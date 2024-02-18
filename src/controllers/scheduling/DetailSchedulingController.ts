import {Request, Response} from 'express'
import { DetailSchedulingService } from '../../services/scheduling/DetailSchedulingService'


class DetailSchedulingController{
  async handle(req: Request, res: Response){
    
    const scheduling_id = req.query.scheduling_id as string;

    const detailSchedulingService = new DetailSchedulingService();

    const scheduling = await detailSchedulingService.execute({
      scheduling_id
    })

    return res.json(scheduling);

  }
}

export { DetailSchedulingController }