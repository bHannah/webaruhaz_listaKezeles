export function rendezes(lista) {
    const rendezes_ELEM = $("#rendez");
  
    ELEM.on("click", function () {
      if (("select[name='rendez'] option:selected").index() === 1) {
        const NOVEKVO = rendezNovekvo(lista);
        init(NOVEKVO);
      }
      else if (("select[name='rendez'] option:selected").index() === 2) {
        const CSOKKENO = rendezCsokkeno(lista);
        init(CSOKKENO);
      }
    });
  }

  export function rendezNovekvo(){

  }

  export function rendezCsokkeno(){

  }