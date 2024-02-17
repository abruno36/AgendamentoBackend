import prismaClient from "../../prisma";

interface SchedulingRequest{
  Scheduling_id: string;
}

class RemoveSchedulingService{
  async execute({ Scheduling_id }: SchedulingRequest){

    const Scheduling = await prismaClient.scheduling.delete({
      where:{
        id: Scheduling_id,
      }
    })

    return Scheduling;

  }
}

export { RemoveSchedulingService }