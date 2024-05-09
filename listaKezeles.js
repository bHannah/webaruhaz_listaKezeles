export function aruMegjelenit(Lista){
    let txt = ""
    let szam = 1;
    Lista.forEach((elem, index) =>{
        txt += `
        <div class="col-4 mt-3">
        <div class="p-5 card ">
        <img class="card-img-top" src="${elem.kep}" alt="kép" style="max-height: 200px; width:auto;">
        <div class="card-body">
        <h4 class="card-title">${elem.nev}</h4>
        <p class="card-text">${elem.kategoria}</p>
        <p class="card-text">${elem.leiras}</p>
        <p class="card-text">${elem.ar} €</p>
        <a href="#" class="btn btn-dark kosarbagomb" id="${szam}">Kosárba!</a>

        </div></div></div>`
        szam++;
    })
    return txt;
}

export function rendezes(arucikkLISTA) {
    const rendezes_ELEM = $("#rendez");
    rendezes_ELEM.on("change", function () {
      if ($("#rendez option:selected" ).val() === "1"){
        kartyaMegjelenit(aruMegjelenit(rendezNovekvo(arucikkLISTA)));
      }
      else if($("#rendez option:selected" ).val() === "2"){
        kartyaMegjelenit(aruMegjelenit(rendezCsokkeno(arucikkLISTA)));
      }
    })
  }

  export function rendezNovekvo(LISTA){
    LISTA.sort(function(t1, t2) {
      return t1.ar - t2.ar;
    });
    return LISTA;
    
  }

  export function rendezCsokkeno(LISTA){
    LISTA.sort(function(t1, t2) {
        return t1.ar - t2.ar;
      });
    return LISTA.reverse();
  }

export function init(LISTA){
  kartyaMegjelenit(aruMegjelenit(LISTA));
}

export function szuresNev(LISTA){
  const kELEM = $("#kereses");
  kELEM.on("keyup", function(){
    let keresett = kELEM.val();
    init(szures(LISTA, keresett))
  })
};

export function szures(lista, keresoSzoveg){
  const szurt_LISTA = lista.filter(function (termek){
    return termek.nev.toUpperCase().includes(keresoSzoveg.toUpperCase()) ||
    termek.kategoria.toUpperCase().includes(keresoSzoveg.toUpperCase())
  })
  return szurt_LISTA
}

export function kartyaMegjelenit(txt){
    const ARTICLE_ELEM = $(".termekek");
    ARTICLE_ELEM.html(txt)
}

export function termekKorsarbaHelyezese(lista){
  const KOSARBA_GOMB_ELEM = $(".kosarbagomb");
  KOSARBA_GOMB_ELEM.on("click", function(event){
      const kattintottElem = event.target;
      const szam = kattintottElem.id;
      console.log(szam)
      console.log(kattintottElem)
      termekKosarba(szam, lista);
  });
}

export function termekKosarba(szam, lista) {
  const kosarTartalomElem = $("#kosartartalom");
  const kivalasztottTermek = lista[szam - 1];
  console.log(kivalasztottTermek)
  const kosarElem = 
      `<div class="card mb-3">
          <div class="row g-0">
              <div class="col-md-4">
                  <img src="${kivalasztottTermek.kep}" class="img-fluid rounded-start" style="width:200px;margin:10px;" alt="Termék képe">
              </div>
              <div class="col-md-8">
                  <div class="card-body">
                      <h5 class="card-title">${kivalasztottTermek.nev}</h5>
                      <p class="card-text">${kivalasztottTermek.leiras}</p>
                      <p class="card-text">${kivalasztottTermek.ar} €</p>
                  </div>
              </div>
          </div>
      </div>`
  ;

  kosarTartalomElem.append(kosarElem);
}

export function vegOsszeg(){
  let vegosszeg;
    kosar.forEach(element => {
        vegosszeg+=element.ar;
    });
    console.log(vegOsszeg)
    return vegosszeg;
}