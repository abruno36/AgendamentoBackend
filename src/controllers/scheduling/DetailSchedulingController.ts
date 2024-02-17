import {Request, Response} from 'express'
import { DetailSchedulingService } from '../../services/scheduling/DetailSchedulingService'


class DetailSchedulingController{
  async handle(req: Request, res: Response){
    
    const scheduling_id = req.scheduling_id;

    const detailUserService = new DetailSchedulingService();

    const scheduling = await detailUserService.execute(scheduling_id);

    return res.json(scheduling);

  }
}

export { DetailSchedulingController }