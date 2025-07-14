let paises = ['Argentina', 'Peru', 'Brazil', 'Surinam', 'Uruguay', 'Paraguay'];


if (localStorage.getItem("paises")) {
  paises = JSON.parse(localStorage.getItem("paises"));
}

listarPaises();

function agregarPais() {
  let nuevoPais = prompt('Que pais agregarmos?');
  if (!nuevoPais) return;
  
  let resultado = paises.includes(capitalize(nuevoPais));
  if (resultado === false) {
    paises.push(capitalize(nuevoPais));
    guardarEnLocalStorage();
    listarPaises();
  } else {
    alert('El pais ya existe');
  }
}

function quitarPais() {
  let sacarPais = prompt('Que pais quiere quitar?');
  if (!sacarPais) return;
  
  let indice = paises.indexOf(capitalize(sacarPais)); // sino encuentra devuelve -1
  if (indice > -1) {
    paises.splice(indice, 1);
    guardarEnLocalStorage();
    listarPaises();
  } else {
    alert('El pais buscado no se encuentra');
  }
}

function ordenarPais() {
  paises.sort();
  guardarEnLocalStorage();
  listarPaises();
}

function listarPaises() {
  const listado = document.querySelector("ol");
  listado.innerHTML = "";
  for (pais of paises) {
    listado.innerHTML += `<li>${pais}</li>`;
  }
}

function capitalize(palabra) {
    let letraInicial = palabra.substring(0,1);
    let restoPalabra = palabra.substring(1,palabra.length)
    return letraInicial.toUpperCase() + restoPalabra.toLowerCase();
}

function guardarEnLocalStorage() {
  localStorage.setItem("paises", JSON.stringify(paises));
}
