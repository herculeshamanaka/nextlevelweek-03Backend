import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';

import OrphanagesController from './Controllers/OrphanagesController';

const routes = Router();
const uploads = multer(uploadConfig); 

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', uploads.array('orphanage_images'), OrphanagesController.create);

export default routes;