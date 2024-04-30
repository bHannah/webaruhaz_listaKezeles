export function aruMegjelenit(Lista){
    let txt = ""
    Lista.forEach((elem, index) =>{
        txt += `
        <div class="col-4 mt-3">
        <div class="p-5 card ">
        <img class="card-img-top" src="${elem.kep}" alt="kép" style="height:250px; width:auto; max-width: 270px">
        <div class="card-body">
        <h4 class="card-title">${elem.nev}</h4>
        <p class="card-text">${elem.kategoria}</p>
        <p class="card-text">${elem.leiras}</p>
        <p class="card-text">${elem.ar} €</p>
        <a href="#" class="btn btn-dark">Kosárba!</a>
        </div></div></div>`
    })
    return txt;
}

export function kartyaMegjelenit(txt){
    const ELEM = $(".termekek");
    ELEM.html(txt)
}