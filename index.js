import { arucikkLISTA } from "./arucikk.js" 
import { init, termekKorsarbaHelyezese, rendezes, szuresNev } from "./listaKezeles.js"
import { adatBekuldes } from "./szemelyesadatok.js"

init(arucikkLISTA)
termekKorsarbaHelyezese(arucikkLISTA);
adatBekuldes();
rendezes(arucikkLISTA);
szuresNev(arucikkLISTA);