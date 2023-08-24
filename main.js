/*
console.log('Hola1');

setTimeout(() => {
   console.log('Hola2'); 
}, 1000);

console.log('Hola3');

let = proceso = new Promise((resolve, reject) => {
    resolve('Todo bien y correcto :D');
    XMLHttpRequest
});

proceso.then(res => {
    console.log(res);
}).catch( res => {
    console.log(res);
});


let peticion = async (p1) => {
    let peticion = await fetch(`${p1}.json`)
    let res = await peticion.json();
    console.log(res);
};
obtener('config');
*/

/*
(async () => {
    let peticion = await fetch('config.json');
    let res = await peticion.json();
    console.log(res);
})('config')

const construirEncabezado = async () => {
    let peticion = await fetch('config.json');
    let res = await peticion.json();
    console.log(res);
}

construirEncabezado();
*/

let construirNav = async(path)=>{
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector('#navigator');
    seleccion.insertAdjacentHTML('beforeend', /*html*/`
    <div class="container-fluid py-3">
      <a class="px-5" href="/" class="d-flex align-items-center link-body-emphasis text-decoration-none">
        <img class="netflixlogo"
          src="${res.nav.imagen}"
          alt="logo">
      </a>
      <a class="px-5 link-body-emphasis text-decoration-none" href="#">${res.nav.enlace}</a>
    </div>
    `)
}

construirNav("config");

let construiSection1 = async(path)=>{
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector('#seccion1');
    seleccion.insertAdjacentHTML('beforeend', /*html*/`
    <div class="pricing-header py-3 pb-md text-start">
        <h1 class="fs-6 fw-normal text-body-emphasis">${res.header.title}</h1>
        <p class="fs-2 fw-bold">${res.header['sub-title']}</p>
        ${res.header.parrafo.map((value) => /*html*/`
        <p class="d-flex align-items-center fw-semibold"><svg class="bi text-danger" width="24" height="24">
            <use xlink:href="#check"/>
          </svg>&ensp;${value.texto}</p>`).join('')}
      </div>
    `)
}

construiSection1("config");