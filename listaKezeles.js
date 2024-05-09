// árucikk kártyák, később article innerhtml-je
export function aruMegjelenit(Lista){
    let txt = ""
    let szam = 1;
    Lista.forEach((elem, index) =>{
        txt += `
        <div class="col-sm-6 col-md-4 mt-3">
        <div class="p-5 card ">
        <img class="card-img-top" src="${elem.kep}" alt="kép"">
        <div class="card-body">
        <h4 class="card-title">${elem.nev}</h4>
        <p class="card-text">${elem.kategoria}</p>
        <p class="card-text">${elem.leiras}</p>
        <p class="card-text">${elem.ar} €</p>
        <button class="btn btn-dark kosarbagomb" id="${szam}">Kosárba!</button>
        
        </div></div></div>`
        szam++;
      })
      return txt;
    }

//előzetesen össyállított txt-t megjeleníti az article elemben
export function kartyaMegjelenit(txt){
  const ARTICLE_ELEM = $(".termekek");
  ARTICLE_ELEM.html(txt)
}

//init fgv (ezt hivja az index.js)
export function init(LISTA){
  kartyaMegjelenit(aruMegjelenit(LISTA));
}
    
//rendezések!
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

  //ár szerint növekvő rendezéss
  export function rendezNovekvo(LISTA){
    LISTA.sort(function(t1, t2) {
      return t1.ar - t2.ar;
    });
    return LISTA;
    
  }

  //ár szerint csökkenő rendezés
  export function rendezCsokkeno(LISTA){
    LISTA.sort(function(t1, t2) {
        return t1.ar - t2.ar;
      });
    return LISTA.reverse();
  }

  //Név szerint abc sorrend
export function rendezesAbcSorrend(){

}

//Név szerint zyx sorrend
export function rendezesZyxSorrend(){

}

//Név szerinti keresés 
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



//termékek kosárba helyezése
export function termekKorsarbaHelyezese(lista){
  const KOSARBA_GOMB_ELEM = $(".kosarbagomb");
  KOSARBA_GOMB_ELEM.on("click", function(event){
      const kattintottElem = event.target;
      const szam = kattintottElem.id;
      termekKosarba(szam, lista);
  });
}

export function termekKosarba(szam, lista) {
  const kosarTartalomElem = $("#kosartartalom");
  const kivalasztottTermek = lista[szam - 1];
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
                      <button class="btn btn-dark">ELtávolítás a kosárból!</button>
                  </div>
              </div>
          </div>
      </div>`
  ;

  kosarTartalomElem.append(kosarElem);
}

//Amikor egy termékből többet akarunk venni mint egy, ez a fgv fogja számlálni és mellé írni a db számot
export function mennyiseg(){

}

//A kosárból lehet elemet törölni
export function eltavolitKosar(){

}

//amikor rákattintunk a megvásárolni kívánt darabszámot növeli eggyel
export function mennyisegNovel(){

}

//amikor rákattintunk a megvásárolni kívánt darabszámot csökkenti eggyel
export function mennyisegCsokkent(){

}

//kosár tartalmának végösszege
export function vegOsszeg(){
  let vegosszeg;
    kosar.forEach(element => {
        vegosszeg+=element.ar;
    });
    console.log(vegOsszeg)
    return vegosszeg;
}

// kosár tartalmának végösszegét jeleníti meg a kosár mellett
export function megjelenitVegosszeg(){
  
}