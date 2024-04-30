export function adatBekuldes(){
    const BEKULDES_ELEM = $("#bekuldesgomb");
    BEKULDES_ELEM.on("click", function konzolraIr(){
        let txt = "";
        txt += document.getElementById("nev").value + ", " +document.getElementById("email").value + ", " + document.getElementById("varos").value + ", " + document.getElementById("utca").value + ", " + document.getElementById("telefon").value;
        console.log(txt);
    })
} 