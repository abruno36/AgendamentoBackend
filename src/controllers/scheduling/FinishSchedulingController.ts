import {Request, Response } from 'express'
import { FinishSchedulingService } from '../../services/scheduling/FinishSchedulingService'

class FinishSchedulingController{
  async handle(req: Request, res: Response){
    const { Scheduling_id } = req.body;

    const finishSchedulingService = new FinishSchedulingService();

    const Scheduling = await finishSchedulingService.execute({
      Scheduling_id
    })

    return res.json(Scheduling);

  }
}

export { FinishSchedulingController }