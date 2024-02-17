import prismaClient from "../../prisma";

interface SchedulingRequest{
  Scheduling_id: string;
}

class FinishSchedulingService{
  async execute({ Scheduling_id }: SchedulingRequest){

    const Scheduling = await prismaClient.scheduling.update({
      where:{
        id: Scheduling_id
      },
      data:{
        status: true,
      }
    })

    return Scheduling;

  }
}

export { FinishSchedulingService }