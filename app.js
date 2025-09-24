// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Lista de los amigos
let listaAmigos = [];

// Se agrega un amigo a la lista 
function agregarAmigo() {
  let nombre = document.querySelector('#amigo').value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido");
  } else {
    listaAmigos.push(nombre);
    mostrarLista();
  }
  limpiarCaja();
}

// Se muestra la lista de amigos
function mostrarLista() {
  let lista = document.querySelector('#listaAmigos');
  lista.innerHTML = ""; 

  for (let amigo of listaAmigos) {
    let p = document.createElement('p');
    p.textContent = amigo;
    lista.appendChild(p);
  }
}


// Se realiza el sorteo aleatorio
function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("La lista está vacía");
    return;
  }
  let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
  let amigoSorteado = listaAmigos[indiceAleatorio];

  let resultado = document.querySelector('#resultado');
  resultado.innerHTML = ""; 

  let p = document.createElement('p');
  p.textContent = `El amigo secreto es: ${amigoSorteado}`;
  resultado.appendChild(p);
}


// Se limpia el campo de la entrada
function limpiarCaja() {
  document.querySelector('#amigo').value = '';
}
