/*
const usuario = {
    nombre: 'andres',
    permisos: 'profesor',
    online: true,
    saludarAlIngreso: function(){
        console.log(`hola ${usuario.nombre}`)
    }
}
console.log(usuario)
console.log(usuario.nombre)
usuario.saludarAlIngreso()



//Arrays
const nums = [1,2,3,4,5]
for(i = 0; i<nums.length; i++){
    
}

const nums2 = [1,2,3,4,5]


const nombres = ['juan', 'andres', 'miguel']
nombres.push('roberto')

// //.push Agrega el elemento que queremos al final del array y .unshift lo hace al comienzo
// //.pop elimina el ultimo elemento del array y .shift el primero

var colores = ['amarillo', 'azul'];
colores.push('negro');
colores.unshift('gris');
colores.pop();
colores.shift();
console.log(colores);

//defino el array el cual quiero eliminar cosas
//en cantidad la cantidad de cosas que quiero eliminar
function quitarMasDeUno(array, cantidad){
    for(let i = 0; i<cantidad;i++){
        array.shift()
    }
}
console.log(nums2)
quitarMasDeUno(nums2, 2)
console.log(nums2)

//METODO .JOIN convierte un array de nuevo en un string. 
const nombresUnidos = nombres.join(' tambien esta ' )
console.log(nombresUnidos)
console.log(nombres)


const cancion = [1,2,3,4,4,4,4,4,5]
console.log(cancion.indexOf(2)) //donde se encuentra lo que buscamos

nombres.sort()
console.log(nombres)

cancion.forEach((x) => {
    if(x === 2) {
        console.log(x);
    }
})




for(let elemento of array){
    console.log(elemento)
}
*/

const consultorio = {
    pacientes: [],
    agregarPacientes(){
        const nombrePaciente = prompt('Ingrese el nombre del paciente').toUpperCase()
        const prioridad = confirm('Es el paciente de prioridad?')
        if(prioridad){
            consultorio.pacientes.prioridad.unshift(nombrePaciente)
            console.log(consultorio.pacientes)
        }else{
            consultorio.pacientes.prioridad.push(nombrePaciente)
        }
    },
    mandarPacienteAlDoctor(){
        const pacienteEntrar = consultorio.pacientes.shift()
        alert(`El paciente ${pacienteEntrar} puede entrar a ser atendido`)
    },
    buscarEnLista(){
        const nombreConsultar = prompt('Ingrese el nombre del paciente').toUpperCase()
        const consulta = consultorio.pacientes.indexOf(nombreConsultar)
        if(consulta === -1){
            alert(`El paciente ${nombreConsultar} no esta en la lista de espera`)

        } else{
            alert(`El paciente ${nombreConsultar} esta en la posicion ${consulta+1}`)
        }
    }
}

function app(){
    alert('Buen dia!')
    let loop = true
    while(loop){
        let operacion = parseInt(prompt('Ingrese: \n 1 - Agregar paciente a lista\n 2 - mandar paciente al doctor \n 3 - Buscar paciente en lista \n 4 - salir'))
        switch(operacion){
            case 1:
                consultorio.agregarPacientes()
                break;

             case 2:
                consultorio.mandarPacienteAlDoctor()
                break;

             case 3:
                consultorio.buscarEnLista()
                break;

             case 4:
                loop = false
                break;
                default:
                alert('Por favor ingrese un numero del 1 al 4')
        }
    }
    alert('Chau que tenga buen dia')
}

app()