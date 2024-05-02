import { arucikkLISTA } from "./arucikk.js" 
import { init, termekKorsarbaHelyezese, rendezes, szuresNev, termekKosarba, kosarMegjelenit } from "./listaKezeles.js"
import { adatBekuldes } from "./szemelyesadatok.js"

init(arucikkLISTA)
adatBekuldes();
termekKorsarbaHelyezese();
rendezes(arucikkLISTA);
szuresNev(arucikkLISTA);
kosarMegjelenit(termekKorsarbaHelyezese(arucikkLISTA));