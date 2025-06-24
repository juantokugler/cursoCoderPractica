// const usuario = {
//     nombre: 'andres',
//     rol: 'profesor',
//     online: false,
//     cursos: ['Js', 'react'],
//     mostrarCursos(){
//         for (let curso of this.cursos){
//             console.log(curso)
//         }
//     }
// }

// console.log(usuario.nombre)
// console.log(usuario.mostrarCursos())


// usuario.nroMatricula = 44976888
// console.log(usuario.nroMatricula)





const usuario2 = [];



//camelcase con mayuscula inicial es pascalcase
function Usuario(nombre = '', rol = '', online = false, cursos = []){
    this.nombre = nombre
    this.rol = rol
    this.online = online
    this.cursos = cursos
    this.mostrarCursos = function(){
        for (let curso of this.cursos){
        }
    }
}

const andres = new Usuario('Andres', 'estudiante', true, ['js'])
const juan = new Usuario('juan', 'estudiante', true, ['js', 'react'])
const alfonso = new Usuario('alfonso', 'estudiante')


console.log(andres)
console.log(juan)
console.log(alfonso)