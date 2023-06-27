import { Router } from "express";
import { createProduct, delProduct, getProductById, getProducts, updateProduct } from '../controllers/products.controller'

const router = Router()
router.get('/products',getProducts)

router.get('/products/:id',getProductById)

router.post('/products',createProduct)

router.delete('/products/:id',delProduct)

router.put('/products/:id',updateProduct)


export default router