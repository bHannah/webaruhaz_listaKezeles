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


// az id-t eléri és visszaadja, a lista kezelésével van a baj!
export function termekKorsarbaHelyezese(arucikkLISTA){
    const KOSAR_ELEM = $("#kosar")
    const KOSARBA_GOMB_ELEM = $(".kosarbagomb");
    console.log(arucikkLISTA)
    KOSARBA_GOMB_ELEM.on("click", function(event){
        const kattintott_ELEM = event.target;
        let szam = kattintott_ELEM.id
        console.log(szam)
        termekKosarba(szam, arucikkLISTA)
    })
}

// ??? valszeg itt a baj de nem bizti, a lista undefined :(
export function termekKosarba(szam, arucikkLISTA){
  let txt = ""
  if(szam > 0 && szam < 7){
    txt += `<p>${arucikkLISTA.nev}</p>
    <p>${arucikkLISTA.kategoria}</p>
    <p>${arucikkLISTA.ar} €</p>`
  }
  return txt
};

// ez biztosan jó!
export function kosarMegjelenit(txt){
  const KOSARTARTALOM_ELEM = $("#kosartartalom")
  KOSARTARTALOM_ELEM.html(txt)
}