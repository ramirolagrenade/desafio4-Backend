import express from "express"
import handlebars from "express-handlebars"
import { Server } from "socket.io"

import __dirname from "./utils.js"
import viewRouter from './routes/views.routes.js'

const PORT = 8080
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+'/public'))

app.engine('handlebars', handlebars.engine())

app.set('views',__dirname+'/views')
app.set('view engine','handlebars')

app.use('/', viewRouter)
app.use('/realtimeproducts',viewRouter)

const server = app.listen(PORT, ()=>{
    console.log('Servidor funcionando en el puerto '+PORT)
})

const socketServerIO = new Server(server)

socketServerIO.on('connection', socket =>{
    console.log('usuario conectado')

    socket.on("menssage",data =>{
        socketServerIO.emit('log',data )
    })
})



