import express from 'express';
import controller from '../controllers/client-controller.js'

const router = express.Router();

router.get('/', controller.get);

router.get('/:cpf', controller.getByCPF);

router.get('/:id', controller.getById);

router.post('/cadastro', controller.post);

router.put('/:id', controller.put);

router.delete('/:id', controller.delete);

export default router;