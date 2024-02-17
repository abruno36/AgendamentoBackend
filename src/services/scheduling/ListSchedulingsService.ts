import prismaClient from "../../prisma";

class ListSchedulingsService{
  async execute(){

    const Schedulings = await prismaClient.scheduling.findMany({
      where:{
        status: false,
      },
      orderBy:{
        created_at: 'desc'
      }
    })

    return Schedulings;

  }
}

export { ListSchedulingsService }