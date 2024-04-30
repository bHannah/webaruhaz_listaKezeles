import { arucikkLISTA } from "./arucikk.js" 
import { aruMegjelenit, kartyaMegjelenit } from "./listaKezeles.js"
import { rendezes, rendezCsokkeno, rendezNovekvo } from "./rendezesek.js"

kartyaMegjelenit(aruMegjelenit(arucikkLISTA))