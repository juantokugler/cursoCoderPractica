//SCOPE alcance de las cosas
//Global y Local


/*const confirmar = confirm('queres?')
if(confirmar){
    let respuesta = 'si quiero'
    alert(respuesta)
    {
        console.log('bloque dentro del if', respuesta)
        let test = 'probando'
        var feo = 'no deberia existir'
    }
        
   // console.log(test)
}
//console.log(respuesta)

{
    console.log(feo)
}
    */


const agua = 'agua'
const limonada = 'limonada'
const vino = 'vino'
const cerveza = 'cerveza'

function consultarBebida(){
    let consultaBebida = prompt('Que desea tomar?').toLowerCase()
    let validador = consultaBebida === null || consultaBebida === ""
    while(validador){
        consultaBebida= prompt('Que desea tomar?').toLowerCase()
        validador = consultaBebida === null || consultaBebida === ""
    }
    const procesarBebida =  consultaBebida.toLowerCase()
    
    return procesarBebida
}
//const bebidaEvaluar = consultarBebida()



function responderConsultaBebida(){
    if(bebida === agua || bebida === vino || bebida === limonada || bebida === cerveza){
        alert(`aca tenes tu ${bebida}`)

    }else{
        alert(`no tengo ${bebida}`)
        return ""
    }
}


function mesero(){
    let loop = true
    while(loop){
    const cantidad = parseInt(prompt('cuantas bebidas quieren?'))
    let pedido = "sus bebidas son: "
    for(let i= 0; i<cantidad; i++){
        let bebidaActual = consultarBebida()
        let bebidaConsultada = responderConsultaBebida(bebidaActual)
        if(bebidaConsultada !== ""){
       pedido += ` \n${bebidaActual}`
        }
    }
    pedido += "\n quiere pedir las bebidas nuevamente?"
    loop = confirm(pedido)
}
    
}

mesero()

function sumar(primerNumero, segundoNumero){
    return primerNumero + segundoNumero
}
console.log(sumar(4,7))

