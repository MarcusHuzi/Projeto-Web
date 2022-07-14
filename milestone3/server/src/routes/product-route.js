import express from 'express';

import controller from '../controllers/product-controller.js';

const router = express.Router();

router.get('/', controller.getAllProducts);

router.get('/:slug', controller.getBySlug);

router.post('/', controller.newProduct);

router.put('/:id', controller.updateProduct);

router.delete('/:id', controller.deleteProduct);

export default router;