"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const CreateSchedulingController_1 = require("./controllers/scheduling/CreateSchedulingController");
const RemoveSchedulingController_1 = require("./controllers/scheduling/RemoveSchedulingController");
const ListSchedulingsController_1 = require("./controllers/scheduling/ListSchedulingsController");
const FinishSchedulingController_1 = require("./controllers/scheduling/FinishSchedulingController");
const DetailSchedulingController_1 = require("./controllers/scheduling/DetailSchedulingController");
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const router = (0, express_1.Router)();
exports.router = router;
//-- ROTAS USER --
router.post('/users', new CreateUserController_1.CreateUserController().handle);
router.post('/session', new AuthUserController_1.AuthUserController().handle);
router.get('/me', isAuthenticated_1.isAuthenticated, new DetailUserController_1.DetailuserController().handle);
//-- ROTAS SCHEDULING --
router.post('/scheduling', isAuthenticated_1.isAuthenticated, new CreateSchedulingController_1.CreateSchedulingController().handle);
router.delete('/scheduling', isAuthenticated_1.isAuthenticated, new RemoveSchedulingController_1.RemoveSchedulingController().handle);
router.get('/schedulings', isAuthenticated_1.isAuthenticated, new ListSchedulingsController_1.ListSchedulingsController().handle);
router.get('/scheduling/detail', isAuthenticated_1.isAuthenticated, new DetailSchedulingController_1.DetailSchedulingController().handle);
router.put('/scheduling/finish', isAuthenticated_1.isAuthenticated, new FinishSchedulingController_1.FinishSchedulingController().handle);
