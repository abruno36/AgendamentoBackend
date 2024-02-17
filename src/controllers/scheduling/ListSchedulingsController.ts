import {Request, Response} from 'express'
import { ListSchedulingsService } from '../../services/scheduling/ListSchedulingsService'

class ListSchedulingsController{
  async handle(req: Request, res: Response){
    const listSchedulingsService = new ListSchedulingsService()

    const Schedulings = await listSchedulingsService.execute();

    return res.json(Schedulings);

  }
}

export { ListSchedulingsController }