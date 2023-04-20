import { Router } from "express"
import ProductManager from "../manager/ProductManager.js"

const  router = Router()

const productManager = new ProductManager('./src/file/products.json')

router.get('/realtimeproducts', (req,res) =>{

    const product = productManager.getProducts()

    res.render('realtimeproducts',{products: product})
})

router.post('/realtimeproducts', (req,res) =>{
    const product = req.body

    let validar = productManager.addProduct(product)

    if(validar == true){
        res.status(200).send({
            status : 'success'
        })
    }

})