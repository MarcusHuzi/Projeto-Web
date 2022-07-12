import express from 'express';
import controller from '../controllers/controller.js'

const router = express.Router();

router.get('/:key', controller.get);

router.put('/:key', controller.put);

router.delete('/:key', controller.delete);

export default router;