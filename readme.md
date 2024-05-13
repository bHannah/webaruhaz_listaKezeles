# Webáruház
Készíts "webáruházat" tetszőleges témában. 

Egy listában tároljuk az objektumokat, minden objektumnak legalább 3 adata legyen!

Az adatokat jelenítsd meg egy táblázatban!
A formázáshoz bootstrap-et használj! A design eltérhet a képen látottól!
A táblázat fejlécére kattintva tudjunk rendezni növekvő, illetve csökkenő sorrendbe az adatokat (Egyszer kattintunk növekvő, mégegyszer- csökkenő sorrendben az adott fejléc szerint) Az elv: a listádat rendezd, majd hívd meg újra az oldal megjelenítését!
Készíts 3 szűrés mezőt, amiben kiválasztott mezők alapján szűrheted az adataidat!

A publikus felületen div-ekben jelenítsük meg az adatokat. az előzetes minta alapján! Figyelj a reszponzitvitásra!
Az oldalon legyen szűrési és rendezési lehetőség is!
Kosár funkció:  A publikus felületen a terméket helyezheted a kosárba. A kosárban lévő termékeket listázhatod, törölheted, módosíthatod az elemszámát, majd leadhatod a rendelést!
++ Lehet, hogy szükséged lesz a localStorage használatára. 
++ Ilyenkor készíthetsz a kosárba tett termékekről egy PDF dokumentumot is.  :D
++ Minden termékhez (divhez) tartozik egy gomb, amivel meg tudjuk nézni azt az egyetlen terméket.
A kiemelt termék mellett megjelenik egy bal és egy jobb léptető gomb, amivel léptetni tudjuk a terméket.

# Függvények

# index:
- hívja meg az összes kész fgv-t (init
)

# listakezelés.js:
aruCikkTxt(arucikkLISTA)
- hozzon létre egy txt filet az article elembe fűzni kívánt innerhtml-el 
aruCikkMegjelenit(arucikkek_txt)
- megkapja az aruMegjelenit() fgv álltal visszaadott txt-t és kirajzolja a weboldal article elemébe
init(lista)
- elméletileg a kész weboldalnál ay index.js csak ezt az fgv-t hívja

rendezések:

rendezes(lista):
- megnézi hogy mi alapján szeretnénk rendezni és azt a fgv-t hívja meg
rendezNovekvo(LISTA):
- növekvő sorrendbe rendezi a lista elemeit
rendezCsokkeno(LISTA):
- csökkenő sorrendbe rendezi a lista elemeit
rendezesAbcSorrend():
- abc sorrend szerint rendezi az elemeket
rendezesZyxSorrend():
- zyx sorrend szerint rendezi az elemeket
szures(lista, keresoSzoveg):
- lekéri a keresőmezőbe beírt szöveget és megkeres minden olyan elemet a listában amellyel egyezést talál
szuresNev(LISTA): 
- az article elem innerhtml-jét szűkíti azokra az elemekre amelyeket a szures fgv-vel kapott
kosarhozAdas(arucikkLISTA):
- hozzáad egy kattintás eseménykezelőt a kosárba gombokhoz és az adott elemre meghívja a modositó fgv-t
kosarModosit(szam, arucikkLISTA):
- a kosar listához hozzáfűzi a kattintott elemet ha az még nincs benne
kosarTxt(kosar):
- létrehozza a kosár txt fájlját a kosar lista tartalma alapján
kosarKiir(txt):
- a létrehozott txt-t belerakja a kosartartalom id-ju divbe
mennyiseg():
- ha egy adott elem már bent van a kosárban akkor csak a mennyiségét növeli, nem rakja be mégegyszer a teljes terméket
torol(kosar):
- ha az eltávolítás gombra kattintunk a teljes terméket kiveszi a kosárból
vegosszegSzamit(kosar):
- kiszámolja a kosár teljes tartalmának árát
vegOsszegKiir(vegosszeg):
- megjeleníti a kiszámolt végösszeget
mennyisegNovel():
- ha rákattintunk a + gombra akkor az adott termék darabszámát növelje egyel
mennyisegCsokkent()
- ha rákattintunk a - gombra akkor az adott termék darabszámát csökkentse egyel

# személyes adatok: 

szemelyHozzaadas()
- ha a beküld gombra kattintunk akkor kérje le a megadott adatokat és jelenítse meg a konzolon