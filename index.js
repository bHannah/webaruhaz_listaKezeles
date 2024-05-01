import { arucikkLISTA } from "./arucikk.js" 
import { aruMegjelenit, kartyaMegjelenit, termekKorsarbaHelyezese, rendezes, rendezCsokkeno, rendezNovekvo } from "./listaKezeles.js"
import { adatBekuldes } from "./szemelyesadatok.js"

kartyaMegjelenit(aruMegjelenit(arucikkLISTA))
adatBekuldes();
termekKorsarbaHelyezese();
rendezes(arucikkLISTA);