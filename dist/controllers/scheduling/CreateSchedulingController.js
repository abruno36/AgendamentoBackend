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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSchedulingController = void 0;
const CreateSchedulingService_1 = require("../../services/scheduling/CreateSchedulingService");
class CreateSchedulingController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, plate, date, hour, washingType, vehicle } = req.body;
            const createSchedulingService = new CreateSchedulingService_1.CreateSchedulingService();
            const scheduling = yield createSchedulingService.execute({
                name,
                plate,
                date,
                hour,
                washingType,
                vehicle
            });
            return res.json(scheduling);
        });
    }
}
exports.CreateSchedulingController = CreateSchedulingController;
