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

let construirNav = async (path) => {
  let peticion = await fetch(`${path}.json`);
  let res = await peticion.json();
  let seleccion = document.querySelector("#navigator");
  seleccion.insertAdjacentHTML(
    "beforeend",
    /*html*/ `
    <div class="container-fluid py-3">
      <a class="px-5" href="/" class="d-flex align-items-center link-body-emphasis text-decoration-none">
        <img class="netflixlogo"
          src="${res.nav.imagen}"
          alt="logo">
      </a>
      <a class="px-5 link-body-emphasis text-decoration-none" href="#">${res.nav.enlace}</a>
    </div>
    `
  );
};

construirNav("config");

let construiSection1 = async (path) => {
  let peticion = await fetch(`${path}.json`);
  let res = await peticion.json();
  let seleccion = document.querySelector("#seccion1");
  seleccion.insertAdjacentHTML(
    "beforeend",
    /*html*/ `
    <div class="pricing-header py-3 pb-md text-start">
        <h1 class="fs-6 fw-normal text-body-emphasis">${res.header.title}</h1>
        <p class="fs-2 fw-bold">${res.header["sub-title"]}</p>
        ${res.header.parrafo
      .map(
        (value) => /*html*/ `
        <p class="d-flex align-items-center fw-semibold"><svg class="bi text-danger" width="24" height="24">
            <use xlink:href="#check"/>
          </svg>&ensp;${value.texto}</p>`
      )
      .join("")}
      </div>
    `
  );
};

construiSection1("config");

let construiSection2 = async (path) => {
  let peticion = await fetch(`${path}.json`);
  let res = await peticion.json();
  let seleccion = document.querySelector("#cards");
  seleccion.insertAdjacentHTML(
    "beforeend",
    /*html*/ `
    <div class="col">
    <div class="card mb-4 rounded-3">
      <div class="card-header py-3">
        <h4 class="my-0 fw-normal">${res.section.card[0].title}</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">${res.section.card[0].twotitle}<small class="text-body-secondary fw-light">/mo</small>
        </h1>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card mb-4 rounded-3">
      <div class="card-header py-3">
        <h4 class="my-0 fw-normal">${res.section.card[1].title1}</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">${res.section.card[1].twotitle1}<small class="text-body-secondary fw-light">/mo</small>
        </h1>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card mb-4 border-danger">
      <div class="card-header py-3 text-bg-danger">
        <h4 class="my-0 fw-normal">${res.section.card[2].title2}</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">${res.section.card[2].twotitle2}<small class="text-body-secondary fw-light">/mo</small>
        </h1>
      </div>
    </div>
  </div>
    `
  );
};

construiSection2("config");

let construirSection3 = async (path) => {
  let peticion = await fetch(`${path}.json`);
  let res = await peticion.json();
  let seleccion = document.querySelector("#prices");
  seleccion.insertAdjacentHTML(
    "beforeend",
    /*html*/ `
  <h2 class="display-6 text-center mb-4">${res.prices.title}</h2>

  <div class="table-responsive">
    <table class="table text-center">
      <thead>
        <tr>
          <th style="width: 34%;"></th>
          <th style="width: 22%;">${res.prices.tables[0].t1}</th>
          <th style="width: 22%;">${res.prices.tables[1].t2}</th>
          <th class="text-danger" style="width: 22%;">${res.prices.tables[2].t3}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" class="text-start">Monthly price</th>
          <td>${res.prices.price[0].p1}</td>
          <td>${res.prices.price[1].p2}</td>
          <td class="text-danger">${res.prices.price[2].p3}</td>
        </tr>
        <tr>
          <th scope="row" class="text-start">Video quality</th>
          <td>${res.prices.video[0].v1}</td>
          <td>${res.prices.video[1].v2}</td>
          <td class="text-danger">${res.prices.video[2].v3}</td>
        </tr>
      </tbody>

      <tbody>
        <tr>
          <th scope="row" class="text-start">Resolution</th>
          <td>${res.prices.resolution[0].r1}</td>
          <td>${res.prices.resolution[1].r2}</td>
          <td class="text-danger">${res.prices.resolution[2].r3}</td>
        </tr>
        <tr>
                <th scope="row" class="text-start">Watch on your TV, computer, mobile phone and tablet</th>
                <td>${res.prices.iconos}</td>
                <td>${res.prices.iconos}</td>
                <td>${res.prices.iconos}</td>
              </tr>
      </tbody>
    </table>
    <p class="fs-6">HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet
      service and device capabilities. Not all content is available in all resolutions. See our <a
        href="https://help.netflix.com/legal/termsofuse">Terms of Use</a> for more details.
      Only people who live with you may use your account. Watch on 4 different devices at the same time with
      Premium, 2 with Standard and 1 with Basic.</p>
    <div class="d-grid gap-2 col-6 mx-auto">
      <button class="btn btn-danger py-3 fs-4" type="button">Next</button>
    </div>
  </div>
    `
  );
};

construirSection3("config");

let construirFooter = async (path) => {
  let peticion = await fetch(`${path}.json`);
  let res = await peticion.json();
  let seleccion = document.querySelector("#footer");
  seleccion.insertAdjacentHTML(
    "beforeend",
    /*html*/ `
    <p>${res.footer.tel}</p>
    <div class="d-flex flex-wrap ps-0 gap-3">
      <ul class="ps-0">
        <p><a class="text-decoration-none text-dark" href="#">${res.footer.faq}<ap></ap>
        </p>
        <p><a class="text-decoration-none text-dark" href="#">${res.footer.priv}<ap></ap>
        </p>
      </ul>
      <ul>
        <p><a class="text-decoration-none text-dark" href="#">${res.footer.help}</a></p>
        <p><a class="text-decoration-none text-dark" href="#">${res.footer.cook}</a></p>
      </ul>
      <ul>
        <p><a class="text-decoration-none text-dark" href="#">${res.footer.shop}</a></p>
        <p><a class="text-decoration-none text-dark" href="#">${res.footer.corp}</a></p>
      </ul>
      <p><a class="text-decoration-none text-dark" href="#">${res.footer.term}</a></p>
    </div>
    `
  );
};

construirFooter("config");