import prismaClient from "../../prisma";

interface DetailRequest{
  scheduling_id: string;
}

class DetailSchedulingService{
  async execute( {scheduling_id }: DetailRequest ){

    const scheduling = await prismaClient.scheduling.findFirst({
      where:{
        id: scheduling_id
      },
      select:{
        id: true,
        name: true,
        plate: true,
        date: true,
        hour: true,
        washingType: true
      }
    })

    return scheduling;
  }
}

export { DetailSchedulingService }