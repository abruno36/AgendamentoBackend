import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailuserController } from './controllers/user/DetailUserController'

import { CreateSchedulingController } from './controllers/scheduling/CreateSchedulingController'
import { RemoveSchedulingController } from './controllers/scheduling/RemoveSchedulingController'
import { ListSchedulingsController } from './controllers/scheduling/ListSchedulingsController'
import { FinishSchedulingController } from './controllers/scheduling/FinishSchedulingController'

import { isAuthenticated } from './middlewares/isAuthenticated'

import uploadConfig from './config/multer'

const router = Router();

//pasta onde será gravado as imagens
const upload = multer(uploadConfig.upload("./tmp"));

//-- ROTAS USER --
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated,  new DetailuserController().handle )

//-- ROTAS SCHEDULING --
router.post('/Scheduling', isAuthenticated, new CreateSchedulingController().handle )
router.delete('/Scheduling', isAuthenticated, new RemoveSchedulingController().handle )
router.get('/Schedulings', isAuthenticated, new ListSchedulingsController().handle )
router.put('/Scheduling/finish', isAuthenticated, new FinishSchedulingController().handle )

export { router };