import {Request, Response} from 'express'
import { CreateSchedulingService } from '../../services/scheduling/CreateSchedulingService'

class CreateSchedulingController{
  async handle(req: Request, res: Response){
    const { name, plate, date, hour, washingType, vehicle } = req.body;

    const createSchedulingService = new CreateSchedulingService();

    const scheduling = await createSchedulingService.execute({
      name,
      plate,
      date,
      hour,
      washingType,
      vehicle
    });

    return res.json(scheduling);

  }
}

export { CreateSchedulingController }