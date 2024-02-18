import {Request, Response} from 'express'
import { CreateSchedulingService } from '../../services/scheduling/CreateSchedulingService'

class CreateSchedulingController{
  async handle(req: Request, res: Response){
    const { name, plate, date, hour, washingType } = req.body;

    const createSchedulingService = new CreateSchedulingService();

    const scheduling = await createSchedulingService.execute({
      name,
      plate,
      date,
      hour,
      washingType
    });

    return res.json(scheduling);

  }
}

export { CreateSchedulingController }