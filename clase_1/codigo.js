 let string = 'algo'
 let string2 = 'algo2'

//algo = parseInt(prompt('ingrese un numero'))
//if(algo === 1){
 //   console.log('exacto');
//}

const segundo = 'a' > 'b'
console.log(segundo)

let saldo = prompt('Ingresa tu salgo')

if(saldo < 0){
    alert('No tenes dinero')
}
else{
    alert('tenes salgo positivo')
}

const lenguajeFavorito = prompt('Cual es tu lenguaje favorito?').toLowerCase()

if(lenguajeFavorito === 'javascript' || 'java' === lenguajeFavorito){
    alert('wow')
}else{
    alert('no me gusta ese')
}

let numero = Number(prompt('ingrese un numero'))
if(numero < 10){
    alert('el numero ${numero} es menor a 10')
    if(numero%2 === 0){
        alert('El ${numero} es par')
    }else{
        alert('el numero ${numero} es impar')
    }
}else{
    alert('el numero %{numero} es mayor o igual a 10')

}

for(let i = 0; i<3; i = i+1)
console.log(i)

let salir = "" //para definirlo dentro del bucle

while(salir !== 'salir'){
const numero = parseInt(prompt('Ingrese un numero para saber si es par o impar'))
    if(numero%2 === 0 ){
        alert(`El numero ${numero} es par`)
    }else{
        alert(`El numero ${numero} es impar`)
    }
    salir = prompt('desea evaluar otro numero? de lo contrario ingrese "salir"')
}
