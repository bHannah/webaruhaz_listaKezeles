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
- hívja meg az összes kész fgv-t

# listakezelés.js:
aruMegjelenit(lista)
- hozzon létre egy txt filet az article elembe fűzni kívánt innerhtml-el 
kartyaMegjelenit(txt)
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
termekKorsarbaHelyezese(lista):
- hozzáad egy kattintás eseménykezelőt a kosárba gombokhoz és az adott elemre meghívja a termekKosarba fgv-t
termekKosarba(szam, lista):
- a kosár innerhtml-jéhez hozzáadja az adott termék kártyát
mennyiseg():
- ha egy adott elem már bent van a kosárban akkor csak a mennyiségét növeli, nem rakja be mégegyszer a teljes terméket
eltavolitKosar():
- ha az eltávolítás gombra kattintunk a teljes terméket kiveszi a kosárból
mennyisegNovel():
- ha rákattintunk a + gombra akkor az adott termék darabszámát növelje egyel
mennyisegCsokkent()
- ha rákattintunk a - gombra akkor az adott termék darabszámát csökkentse egyel
vegOsszeg():
- kiszámolja a kosár teljes tartalmának árát
megjelenitVegosszeg(szam)
- megjeleníti a kiszámolt végösszeget


# admin felület:

aruHozzaadasa()
- árúcikk hozzáadása az adatbázishoz form kitöltés után
aruEltavolit()
- árúcikk eltávolítása az adatbázisból, kitörli a kártyát a termékek felületről

# személyes adatok: 

szemelyHozzaadas()
- ha a beküld gombra kattintunk akkor kérje le a megadott adatokat és jelenítse meg a konzolon