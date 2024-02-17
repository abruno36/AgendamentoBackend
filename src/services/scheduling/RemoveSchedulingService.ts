import prismaClient from "../../prisma";

interface SchedulingRequest{
  scheduling_id: string;
}

class RemoveSchedulingService{
  async execute({ scheduling_id }: SchedulingRequest){

    const scheduling = await prismaClient.scheduling.delete({
      where:{
        id: scheduling_id,
      }
    })

    return scheduling;

  }
}

export { RemoveSchedulingService }