import express from 'express';
import controller from '../controllers/client-controller.js'

const router = express.Router();

router.get('/', controller.get);

router.get('/ck_cpf/:cpf', controller.getByCPF);

router.get('/ck_email/:email', controller.getByEmail);

router.get('/:id', controller.getById);

router.post('/cadastro', controller.addClient);

router.put('/:id', controller.put);

router.delete('/:id', controller.delete);

export default router;