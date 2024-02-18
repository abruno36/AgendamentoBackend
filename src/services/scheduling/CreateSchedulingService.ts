import prismaClient from "../../prisma";

interface SchedulingRequest{
  name: string;
  plate: string;
  date: any;
  hour: string
  washingType: string
}

class CreateSchedulingService{
  async execute({name, plate, date, hour, washingType}: SchedulingRequest ){

        //Verificar se esse email já está cadastrado na plataforma
    const userAlreadyExists = await prismaClient.scheduling.findFirst({
      where:{
        plate: plate,
        date: date,
        hour: hour
      }
    })

    if(userAlreadyExists){
      throw new Error("Este horário já esta agendado para este veículo!")
    }

    if(validarPlacaMercosul(plate))
      {
          const scheduling = await prismaClient.scheduling.create({
              data:{
                name: name,
                plate: plate,
                date: date,
                hour: hour,
                washingType: washingType
              }
          })
          return scheduling;
      } 
      else 
      {
        throw new Error('Placa inválida. Por favor, insira uma placa Mercosul válida!')
      }
  }
}

function validarPlacaMercosul(placa: string): boolean {
  const regexPlacaMercosul = /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/;
  return regexPlacaMercosul.test(placa);
}

export { CreateSchedulingService }