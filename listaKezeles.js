export function aruMegjelenit(Lista){
    let txt = ""
    let szam = 1;
    Lista.forEach((elem, index) =>{
        txt += `
        <div class="col-4 mt-3">
        <div class="p-5 card ">
        <img class="card-img-top" src="${elem.kep}" alt="kép" style="height:250px; width:auto;">
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

export function kartyaMegjelenit(txt){
    const ARTICLE_ELEM = $(".termekek");
    ARTICLE_ELEM.html(txt)
}

export function termekKorsarbaHelyezese(){
    const KOSAR_ELEM = $("#kosar")
    const KOSARBA_GOMB_ELEM = $(".kosarbagomb");
    KOSARBA_GOMB_ELEM.on("click", function(){

        console.log(id)
    })
}
// el akarom érni annak az elemnek az id-ját amelyikre rákattintottam, és utána ennek az elemnek a listabeli értékeit kártyaként berakni a kosár id-vel ellátott elembe. 