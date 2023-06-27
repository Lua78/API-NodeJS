import { Router } from "express";
import { createProduct, delProduct, getProducts } from '../controllers/products.controller'

const router = Router()
router.get('/products',getProducts)

router.post('/products',createProduct)

router.delete('/products/:id',delProduct)

export default router