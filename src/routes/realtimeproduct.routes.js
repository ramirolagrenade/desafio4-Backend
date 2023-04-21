import { Router } from "express"
import ProductManager from "../manager/ProductManager.js"

const  router = Router()

const productManager = new ProductManager('./src/file/products.json')

router.get('/', async (req,res) =>{

    const product = await productManager.getProducts()

    console.log(product)

    res.render('realtimeproducts',{products: product})
})

router.post('/', async (req,res) =>{
    

    let validar = await productManager.addProduct(nuevoProducto)

    if(validar == true){
        res.status(200).send({
            status : 'success'
        })
    }

})

export default router