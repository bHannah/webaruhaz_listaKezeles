import { arucikkLISTA } from "./arucikk.js" 
import { aruMegjelenit, kartyaMegjelenit } from "./listaKezeles.js"
import { rendezes, rendezCsokkeno, rendezNovekvo } from "./rendezesek.js"
import { adatBekuldes } from "./szemelyesadatok.js"

kartyaMegjelenit(aruMegjelenit(arucikkLISTA))
adatBekuldes();