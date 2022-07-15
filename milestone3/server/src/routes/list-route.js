import express from 'express';
import controller from '../controllers/list-controllers.js'

const router = express.Router();

router.get('/', controller.getAllLists);

router.post('/', controller.addList);

router.get('/:email', controller.getUserLists);

router.delete('/:id', controller.delList);


export default router;
