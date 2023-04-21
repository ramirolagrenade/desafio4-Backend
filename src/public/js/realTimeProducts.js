const socket = io()
const log = document.getElementById('log')

const botonEnviar = document.getElementById("enviar")

botonEnviar.addEventListener("click", event => {

    if (event) {
        const title = document.getElementById("title").value
        const description = document.getElementById("description").value
        const code = document.getElementById("code").value
        const price = document.getElementById("price").value
        const status = true
        const stock = document.getElementById("stock").value
        const category = document.getElementById("category").value
        const thumbnail = document.getElementById("thumbnail").value

        const nuevoProducto = { title, description, code, price, status, stock, category, thumbnail }

        socket.emit("message", nuevoProducto)
    }
})

//en revicion
socket.on('actualizado', productos => {
    let listaProductos = document.getElementById('productos')
    listaProductos.innerHTML = ''
    productos.forEach(producto => {
        let p = document.createElement('p')
        p.innerText = `id: ${producto.id},
                     title: ${producto.title}, 
                     description: ${producto.description},
                     code: ${producto.code} ,
                     price: ${producto.price}, 
                     status: ${producto.status}, 
                     stock: ${producto.stock}, 
                     category: ${producto.category}, 
                     thumbnail: ${producto.thumbnail}`
        listaProductos.appendChild(p)
    })
})
