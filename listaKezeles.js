export function init(arucikkLISTA){
  aruCikkTxt(arucikkLISTA);
  rendezes(arucikkLISTA);
  szuresNev(arucikkLISTA);
  kosarhozAdas(arucikkLISTA)
}
export function aruCikkTxt(arucikkLISTA){
    let arucikkek_txt = ""
    let szam = 0;
    arucikkLISTA.forEach((elem, index) =>{
        arucikkek_txt += `
        <div class="col-sm-6 col-md-4 mt-3">
        <div class="p-5 card ">
        <img class="card-img-top" src="${elem.kep}" alt="kép"">
        <div class="card-body">
        <h4 class="card-title">${elem.nev}</h4>
        <p class="card-text">${elem.kategoria}</p>
        <p class="card-text">${elem.leiras}</p>
        <p class="card-text">${elem.ar} €</p>
        <button class="btn btn-dark kosarbagomb" id=${szam}>Kosárba!</button>
        </div></div></div>`
        szam++
      })
      aruCikkMegjelenit(arucikkek_txt, arucikkLISTA)
}
export function aruCikkMegjelenit(arucikkek_txt, arucikkLISTA){
  const ARTICLE_ELEM = $(".termekek");
  ARTICLE_ELEM.html(arucikkek_txt)
}
export function rendezes(arucikkLISTA) {
    const rendezes_ELEM = $("#rendez");
    rendezes_ELEM.on("change", function () {
      if ($("#rendez option:selected" ).val() === "1"){
        aruCikkMegjelenit(aruCikkTxt(rendezNovekvo(arucikkLISTA)));
        kosarhozAdas(rendezNovekvo(arucikkLISTA))
      }
      else if($("#rendez option:selected" ).val() === "2"){
        aruCikkMegjelenit(aruCikkTxt(rendezCsokkeno(arucikkLISTA)));
        kosarhozAdas(rendezCSokkeno(arucikkLISTA))
      }
      else if($("#rendez option:selected" ).val() === "3"){
        aruCikkMegjelenit(aruCikkTxt(rendezesAbcSorrend(arucikkLISTA)));
        kosarhozAdas(rendezesAbcSorrend(arucikkLISTA))
      }
      else if($("#rendez option:selected" ).val() === "4"){
        aruCikkMegjelenit(aruCikkTxt(rendezesZyxSorrend(arucikkLISTA)));
        kosarhozAdas(rendezesZyxSorrend(arucikkLISTA))
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
export function rendezesAbcSorrend(LISTA){
  LISTA.sort((e1, e2) => {
    const nevA = e1.nev.toUpperCase();
    const nevB = e2.nev.toUpperCase();
  
    if (nevA < nevB) {
      return -1;
    }
    if (nevA > nevB) {
      return 1;
    }
  });
  
  return LISTA;
}
export function rendezesZyxSorrend(LISTA){
    LISTA.sort((e1, e2) => {
      const nevA = e1.nev.toUpperCase();
      const nevB = e2.nev.toUpperCase();
    
      if (nevA < nevB) {
        return -1;
      }
      if (nevA > nevB) {
        return 1;
      }
    });
    
    return LISTA.reverse();
}
export function szuresNev(LISTA){
  const kELEM = $("#kereses");
  kELEM.on("keyup", function(){
    let keresett = kELEM.val();
    aruCikkMegjelenit(aruCikkTxt(szures(LISTA, keresett)))
    kosarhozAdas(szures(LISTA, keresett))
  })
}
export function szures(LISTA, keresoSzoveg){
  const szurt_LISTA = LISTA.filter(function (termek){
    return termek.nev.toUpperCase().includes(keresoSzoveg.toUpperCase()) ||
    termek.kategoria.toUpperCase().includes(keresoSzoveg.toUpperCase())
  })
  return szurt_LISTA
}

const kosar = [];
export function kosarhozAdas(arucikkLISTA){
  const GOMB_ELEM = $(".kosarbagomb")
  GOMB_ELEM.on("click", function(event){
    let jelenlegi = event.target
    let szam = jelenlegi.id
    if(!ellenorzes(arucikkLISTA, szam)){
      kosarModosit(szam, arucikkLISTA)
      vegosszegSzamit(kosar);
    }else{
      for (let index = 0; index < kosar.length; index++) {
        if (kosar[index].nev === arucikkLISTA[szam].nev){
          kosar[index].menny += 1 
          vegosszegSzamit(kosar);
          kosarTxt(kosar)
        }
      } 
    }
  })
}
export function kosarModosit(szam, arucikkLISTA){
  kosar.push(arucikkLISTA[szam])
  kosarTxt(kosar)
}
export function kosarTxt(kosar){
  let kosar_txt = ""
  let szam = 0;
  kosar.forEach((elem, index) =>{
    kosar_txt+=`<p>${elem.nev}, ${elem.ar} € mennyiség: ${elem.menny} db <button class="btn btn-dark torol" id=${szam} >Törlés!</button></p>`;
    szam++;
  })
  kosarKiir(kosar_txt)

}
export function vegosszegSzamit(kosar){
  let vegosszeg = 0;
  for (let index = 0; index < kosar.length; index++) {
    vegosszeg += (kosar[index].ar*kosar[index].menny)
  }
  vegOsszegKiir(vegosszeg)
}
export function kosarKiir(txt){
  const KOSAR_ELEM = $("#kosartartalom");
  KOSAR_ELEM.html(txt);
  torol(kosar);
}
export function vegOsszegKiir(vegosszeg){
  const OSSZEG_ELEM = $('#vegosszeg')
  OSSZEG_ELEM.html("Összesen: " + vegosszeg + " €")
}
export function torol(kosar){
  const TOROL_GOMB = $(".torol")
  TOROL_GOMB.on("click", function(event){
    let jelenlegi = event.target
    let szam = jelenlegi.id
    kosar[szam].menny = 1; 
    kosar.splice(szam, 1);
    kosarTxt(kosar)
    vegosszegSzamit(kosar)
  })
}
export function ellenorzes(arucikkLISTA, szam){
  let bennevan = false;
  let keresettElem = arucikkLISTA[szam].nev;
  for (let index = 0; index < kosar.length; index++) {
    if (kosar[index].nev.includes(keresettElem)) {
      bennevan = true
    }
  }
  return bennevan
}