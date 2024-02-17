import prismaClient from "../../prisma";

interface SchedulingRequest{
  scheduling_id: string;
}

class FinishSchedulingService{
  async execute({ scheduling_id }: SchedulingRequest){

    const scheduling = await prismaClient.scheduling.update({
      where:{
        id: scheduling_id
      },
      data:{
        status: true,
      }
    })

    return scheduling;

  }
}

export { FinishSchedulingService }