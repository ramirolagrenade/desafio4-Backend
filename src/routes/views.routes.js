import { Router } from "express"
import ProductManager from "../manager/ProductManager.js"

const  router = Router()

const productManager = new ProductManager('./src/file/products.json')

router.get('/',async (req,res) =>{

    let product = await productManager.getProducts()

    res.render('home',{products: product})
})

router.get('/realtimeproducts', (req,res) =>{
    res.render('realtimeproducts')
})

export default router