export function aruMegjelenit(Lista){
    let txt = ""
    Lista.forEach((elem, index) =>{
        txt += `<div class="container mt-3">
        <div class="card">
        <img class="card-img-top" src="${elem.kep}" alt="kép" style="width:100%">
        <div class="card-body">
        <h4 class="card-title">${elem.nev}</h4>
        <p class="card-text">${elem.kategoria}</p>
        <p class="card-text">${elem.leiras}</p>
        <p class="card-text">${elem.ar}</p>
        <a href="#" class="btn btn-dark">Kosárba!</a>
        </div>
        </div>`
    })
    return txt;
}

export function kartyaMegjelenit(txt){
    const ELEM = ('.termek')
    ELEM.innerhtml += txt
}