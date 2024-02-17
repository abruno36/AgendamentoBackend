import prismaClient from "../../prisma";

class ListSchedulingsService{
  async execute(){

    const schedulings = await prismaClient.scheduling.findMany({
      where:{
        status: false,
      },
      orderBy:{
        created_at: 'desc'
      }
    })

    return schedulings;

  }
}

export { ListSchedulingsService }