

alert('Bienvenido a CELU-COMPRO');

function capitalizar(palabra) {
    let letraInicial = palabra.substring(0, 1)
    let restoPalabra = palabra.substring(1, palabra.length)
    return letraInicial.toUpperCase() + restoPalabra.toLowerCase()
}

function saludar() {
    let nombre = prompt('Por favor dígame su nombre')
    let nombreFormateado = capitalizar(nombre)
    alert(`Hola ${nombreFormateado}`)
}

function calcularIva (precio){
    let iva = 1.21
    let total = precio * iva
    return total
}

function eliminarEspacios(palabra) {
    let algo = palabra.replace(/\s+/g, "");
    return algo
}

const carrito = {
   productos: []
}


function ventaCelulares(){
    let opcion = prompt(`Tenemos el iPhone 11, iPhone 13 y el iPhone 14 \n en cual estas interesado?`)
        let celular = eliminarEspacios(opcion)
        switch(celular){
            case 'iphone11':
                let pago = prompt('Tiene un precio de 600 usd. \n Presione: \n 1 - Pagar en un pago. \n 2 - Pagar en cuotas')
                if(pago === '1'){
                    alert('Gracias por su compra!')
                    carrito.productos.push(celular)
                    console.log(carrito.productos)
                }else if(pago === '2'){
                    let cuota = Number(prompt(`Tiene para pagar 6, 9 o 12 sin interes \n en cuantas quiere pagar?`))
                switch(cuota){
                    case 6:
                        precio = 600
                        precioConIva = calcularIva(precio)
                        precioAPagarPorMes = precioConIva / 6
                        let acepta = confirm(`Quedaria con un precio de ${precioConIva} \nDesea comprar el producto?`)
                        if(acepta === true){
                            alert(`Gracias por su compra! \n tiene que pagar ${precioAPagarPorMes} usd por mes`)
                            carrito.productos.push(celular)
                            console.log(carrito.productos)
                        }
                        break;
                    
                    case 9:
                        precio = 600
                        precioConIva = calcularIva(precio)
                        precioAPagarPorMes = precioConIva / 9
                        let acept = confirm(`Quedaria con un precio de ${precioConIva} \nDesea comprar el producto?`)
                        if(caept === true){
                            alert(`Gracias por su compra! \n tiene que pagar ${precioAPagarPorMes} usd por mes`)
                            carrito.productos.push(celular)
                            console.log(carrito.productos)
                        }
                        break;

                    case 12:
                        precio = 600
                        precioConIva = calcularIva(precio)
                        precioAPagarPorMes = precioConIva / 12
                        let acep = confirm(`Quedaria con un precio de ${precioConIva} \nDesea comprar el producto?`)
                        if(acep === true){
                            alert(`Gracias por su compra! \n tiene que pagar ${precioAPagarPorMes} usd por mes`)
                            carrito.productos.push(celular)
                            console.log(carrito.productos)
                        break;
                }
               
            }
        }
        break;

        case 'iphone13':
                let pag = prompt('Tiene un precio de 900 usd. \n Presione: \n 1 - Pagar en un pago. \n 2 - Pagar en cuotas')
                if(pag === '1'){
                    alert('Gracias por su compra!')
                    carrito.productos.push(celular)
                    console.log(carrito.productos)
                }else if(pag === '2'){
                    let cuota = Number(prompt(`Tiene para pagar 6, 9 o 12 sin interes \n en cuantas quiere pagar?`))
                switch(cuota){
                    case 6:
                        precio = 900
                        precioConIva = calcularIva(precio)
                        precioAPagarPorMes = precioConIva / 6
                        let acepta = confirm(`Quedaria con un precio de ${precioConIva} \nDesea comprar el producto?`)
                        if(acepta === true){
                            alert(`Gracias por su compra! \n tiene que pagar ${precioAPagarPorMes} usd por mes`)
                            carrito.productos.push(celular)
                            console.log(carrito.productos)
                        }
                        break;
                    
                    case 9:
                        precio = 900
                        precioConIva = calcularIva(precio)
                        precioAPagarPorMes = precioConIva / 9
                        let acept = confirm(`Quedaria con un precio de ${precioConIva} \nDesea comprar el producto?`)
                        if(caept === true){
                            alert(`Gracias por su compra! \n tiene que pagar ${precioAPagarPorMes} usd por mes`)
                            carrito.productos.push(celular)
                            console.log(carrito.productos)
                        }
                        break;

                    case 12:
                        precio = 900
                        precioConIva = calcularIva(precio)
                        precioAPagarPorMes = precioConIva / 12
                        let acep = confirm(`Quedaria con un precio de ${precioConIva} \nDesea comprar el producto?`)
                        if(acep === true){
                            alert(`Gracias por su compra! \n tiene que pagar ${precioAPagarPorMes} usd por mes`)
                            carrito.productos.push(celular)
                            console.log(carrito.productos)
                        break;
                }
            }
        }
        break;

        case 'iphone14':
                let pa = prompt('Tiene un precio de 1200 usd. \n Presione: \n 1 - Pagar en un pago. \n 2 - Pagar en cuotas')
                if(pa === '1'){
                    alert('Gracias por su compra!')
                    carrito.productos.push(celular)
                    console.log(carrito.productos)
                }else if(pa === '2'){
                    let cuota = Number(prompt(`Tiene para pagar 6, 9 o 12 sin interes \n en cuantas quiere pagar?`))
                switch(cuota){
                    case 6:
                        precio = 1200
                        precioConIva = calcularIva(precio)
                        precioAPagarPorMes = precioConIva / 6
                        let acepta = confirm(`Quedaria con un precio de ${precioConIva} \nDesea comprar el producto?`)
                        if(acepta === true){
                            alert(`Gracias por su compra! \n tiene que pagar ${precioAPagarPorMes} usd por mes`)
                            carrito.productos.push(celular)
                            console.log(carrito.productos)
                        }
                        break;
                    
                    case 9:
                        precio = 1200
                        precioConIva = calcularIva(precio)
                        precioAPagarPorMes = precioConIva / 9
                        let acept = confirm(`Quedaria con un precio de ${precioConIva} \nDesea comprar el producto?`)
                        if(caept === true){
                            alert(`Gracias por su compra! \n tiene que pagar ${precioAPagarPorMes} usd por mes`)
                            carrito.productos.push(celular)
                            console.log(carrito.productos)
                        }
                        break;

                    case 12:
                        precio = 1200
                        precioConIva = calcularIva(precio)
                        precioAPagarPorMes = precioConIva / 12
                        let acep = confirm(`Quedaria con un precio de ${precioConIva} \nDesea comprar el producto?`)
                        if(acep === true){
                            alert(`Gracias por su compra! \n tiene que pagar ${precioAPagarPorMes} usd por mes`)
                            carrito.productos.push(celular)
                            console.log(carrito.productos)
                        break;
                }
            }
        }
        break;
    }
}



saludar()
function app(){
    let loop =  true;
    while(loop === true){
        let consulta = prompt(`Ingrese: \n 1 - para ver nuestros productos. \n 2 - Ver mi carrito. \n 3 - Salir.`)
        switch(consulta){
            case '1':
                ventaCelulares()
                break;

            case '2':
                if(carrito.productos.length === 0){
                    alert('Aun no compro nada')
                }else{
                    alert(`Usted compro: ${carrito.productos}`)
                }
                break;
            case '3':
            loop = false
            break;
            default:
            alert('Ingrese solamente el numero 1 o 2.')
        }
    }
    alert('Chau!')
}
app()

