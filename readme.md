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

index:
- árúcikkek kártyákra rendezve
termekKorsarbaHelyezese()
- ha az árúcikk kártáyján a "kosárba" gombra kattinunk, akkor a termék autómatikusan kerüljön a kosárba
tartalomSzamlalo()
- kosár mellett jelenjen meg egy szám pl.:(2) amely tájékoztat a kosár tartalmáról
aruMegjelenit()
- az adatbázisból olvassa ki a cikkek tulajdonságait, és állítsa össze a kártyákat
szuresNev()
- ha keresünk egy cikket akkor betűre keresse meg a cikkek neveiben az egyezést
szuresKategoria()
- szűrje a cikket kategória név szerint ha keresünk a kereső mezőben
rendezesAsc()
- rendezze abc szerinti sorrendbe a cikkeket
rendezesArNov()
- rendezze ár szerint növekvő sorrendbe a cikkeket
rendezesArCsokk()
- rendezze ár szerint csökkenő sorrendbe a cikkeket

admin felület:
aruHozzaadasa()
- árúcikk hozzáadása az adatbázishoz form kitöltés után
aruEltavolit()
- árúcikk eltávolítása az adatbázisból, kitörli a kártyát a termékek felületről

személyes adatok: 
- kell rá egy form amivel fel tud vinni a vevő adatokat
szemelyHozzaadas()
- ha a beküld gombra kattintunk akkor vegyen fel egy uj szemely objektumot a nev, kor, es lakcim adatokkal

kosár:
- a termékek oldalról minden kattintott elem kerül ide amit a vevő meg szeretne vásárolni
vegOsszeg()
- kérje le az adott termékek árát és számolja ki a vásárlás végösszegét
vegosszegKiir()
- jelenitse meg a kiszámolt végösszeget a kosárba helyezett cikkek alatt
kiKosarbol()
- kattintásra szedje ki az árúcikket a kosárból, és hívja meg a végösszeg metódust mivel megváltozik a fizetendő összeg
