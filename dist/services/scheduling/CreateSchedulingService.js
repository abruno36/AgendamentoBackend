"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSchedulingService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateSchedulingService {
    execute({ name, plate, date, hour, washingType }) {
        return __awaiter(this, void 0, void 0, function* () {
            //Verificar se esse email já está cadastrado na plataforma
            const userAlreadyExists = yield prisma_1.default.scheduling.findFirst({
                where: {
                    plate: plate,
                    date: date,
                    hour: hour
                }
            });
            if (userAlreadyExists) {
                throw new Error("Este horário já esta agendado para este veículo!");
            }
            if (validarPlacaMercosul(plate)) {
                const scheduling = yield prisma_1.default.scheduling.create({
                    data: {
                        name: name,
                        plate: plate,
                        date: date,
                        hour: hour,
                        washingType: washingType
                    }
                });
                return scheduling;
            }
            else {
                throw new Error('Placa inválida. Por favor, insira uma placa Mercosul válida!');
            }
        });
    }
}
exports.CreateSchedulingService = CreateSchedulingService;
function validarPlacaMercosul(placa) {
    const regexPlacaMercosul = /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/;
    return regexPlacaMercosul.test(placa);
}
