import {writable} from 'svelte/store';

let image = 'band.jpg';
let azra = 'band.jpg';
let rapsodija = 'rapsodija.jpeg';
let dno = 'dno.jpg';
let aint = 'aint.jpg';
let balegari = 'balegari.jpeg';
let blase = 'blase.jpeg';
let fazani = 'fazani.jpeg';
let filigranski = 'filigranski.jpeg';
let izmedu = 'izmedu.jpeg';
let krivo = 'krivo.jpeg';
let paula = 'paula.jpeg';
let suma = 'suma.jpg';
let suncana = 'suncana.jpeg';
let zadovoljstina = 'zadovoljstina.jpg';

export const songList = writable(
[
    {
        image : filigranski,
        audio : "'68.mp3",
        name : "'68",
        album : "Filigranski pločnici"
    },
    {
        image : zadovoljstina,
        audio : "2.30.mp3",
        name : "2.30",
        album : "Zadovoljština"
    },
    {
        image : zadovoljstina,
        audio : "3N.mp3",
        name : "3N",
        album : "Zadovoljština"
    },
    {
        image : dno,
        audio : "041.mp3",
        name : "041",
        album : "Azra"
    },
    {
        image : filigranski,
        audio : "32-956.mp3",
        name : "32-956",
        album : "Filigranski pločnici"
    },
    {
        image : zadovoljstina,
        audio : "A šta da radim.mp3",
        name : "A šta da radim",
        album : "Zadovoljština"
    },
    {
        image : zadovoljstina,
        audio : "Adio Mare.mp3",
        name : "Adio Mare",
        album : "Zadovoljština"
    },
    {
        image : blase,
        audio : "Ain't got no time.mp3",
        name : "Ain't got no time",
        album : "Azra"
    },
    {
        image : fazani,
        audio : "Aj ća.mp3",
        name : "Aj ća",
        album : "Azra"
    },
    {
        image : filigranski,
        audio : "Ako znaš bilo što.mp3",
        name : "Ako znaš bilo što",
        album : "Filigranski pločnici"
    },
    {
        image : zadovoljstina,
        audio : "Anđeli.mp3",
        name : "Anđeli",
        album : "Zadovoljština"
    },
    {
        image : paula,
        audio : "Atlantis.mp3",
        name : "Azra",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "Baby, baby.mp3",
        name : "Baby, baby",
        album : "Zadovoljština"
    },
    {
        image : suncana,
        audio : "Balegari ne vjeruju sreći.mp3",
        name : "Balegari ne vjeruju sreći",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "Balkan.mp3",
        name : "Balkan",
        album : "Zadovoljština"
    },
    {
        image : "band.jpg",
        audio : "Bankrot mama.mp3",
        name : "Bankrot mama",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "Bed rok.mp3",
        name : "Bed rok",
        album : "Zadovoljština"
    },
    {
        image : zadovoljstina,
        audio : "Bez mene.mp3",
        name : "Bez mene",
        album : "Zadovoljština"
    },
    {
        image : zadovoljstina,
        audio : "Bis.mp3",
        name : "Bis",
        album : "Zadovoljština"
    },
    {
        image : image,
        audio : "Blase.mp3",
        name : "Blase",
        album : "Azra"
    },
    {
        image : image,
        audio : "Boli glava.mp3",
        name : "Boli glava",
        album : "Azra"
    },
    {
        image : image,
        audio : "Bolja strana nema.mp3",
        name : "Bolja strana nema",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Bugi Bane.mp3",
        name : "Bugi Bane",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Čalgija.mp3",
        name : "Čalgija",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Cest la vie.mp3",
        name : "Cest la vie",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Čežnja.mp3",
        name : "Čežnja",
        album : "Azra"
    },
    {
        image : filigranski,
        audio : "Čudne navike.mp3",
        name : "Čudne navike",
        album : "Filigranski pločnici"
    },
    {
        image : image,
        audio : "Daleko od istine.mp3",
        name : "Daleko od istine",
        album : "Azra"
    },
    {
        image : image,
        audio : "Dimitrije, sine Mitre.mp3",
        name : "Dimitrije, sine Mitre",
        album : "Azra"
    },
    {
        image : image,
        audio : "Distant karma.mp3",
        name : "Distant karma",
        album : "Azra"
    },
    {
        image : image,
        audio : "Divno biće.mp3",
        name : "Divno biće",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Došlo vrijeme da se umire.mp3",
        name : "Došlo vrijeme da se umire",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "Duboko u tebi.mp3",
        name : "Duboko u tebi",
        album : "Zadovoljština"
    },
    {
        image : "band.jpg",
        audio : "Dunjo bre.mp3",
        name : "Dunjo bre",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Duplo golo.mp3",
        name : "Duplo golo",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Džoni budi dobar.mp3",
        name : "Džoni budi dobar",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "E pa što.mp3",
        name : "E pa što",
        album : "Zadovoljština"
    },
    {
        image : image,
        audio : "Fa fa fa.mp3",
        name : "Fa fa fa",
        album : "Azra"
    },
    {
        image : image,
        audio : "Fantazija.mp3",
        name : "Fantazija",
        album : "Azra"
    },
    {
        image : filigranski,
        audio : "Filigranski pločnici.mp3",
        name : "Fligranski pločnici",
        album : "Filigranski pločnici"
    },
    {
        image : "band.jpg",
        audio : "Flash.mp3",
        name : "Flash",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Gimme some faith.mp3",
        name : "Gimme some faith",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Golgota.mp3",
        name : "Golgota",
        album : "Azra"
    },
    {
        image : filigranski,
        audio : "Gomila nesklada.mp3",
        name : "Gomila nesklada",
        album : "Filigranski pločnici"
    },
    {
        image : filigranski,
        audio : "Gorki okus.mp3",
        name : "Gorki okus",
        album : "Filigranski pločnici"
    },
    {
        image : image,
        audio : "Gospodar samoće.mp3",
        name : "Gospodar samoće",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "Gracija.mp3",
        name : "Gracija",
        album : "Zadovoljština"
    },
    {
        image : zadovoljstina,
        audio : "Grad bez ljubavi.mp3",
        name : "Grad bez ljubavi",
        album : "Zadovoljština"
    },
    {
        image : "band.jpg",
        audio : "Grad se beli.mp3",
        name : "Grad se beli",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Hajri mate.mp3",
        name : "Hajri mate",
        album : "Azra"
    },
    {
        image : filigranski,
        audio : "Hladan kao led.mp3",
        name : "Hladan kao led",
        album : "Filigranski pločnici"
    },
    {
        image : filigranski,
        audio : "Hladni prsti.mp3",
        name : "Hladni prsti",
        album : "Filigranski pločnici"
    },
    {
        image : "band.jpg",
        audio : "Hljeba i igara.mp3",
        name : "Hljeba i igara",
        album : "Azra"
    },
    {
        image : image,
        audio : "I nikom nije lepše' neg je nam.mp3",
        name : "I nikom nije lepše' neg je nam",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "I saw her standing there.mp3",
        name : "I saw her standing there",
        album : "Zadovoljština"
    },
    {
        image : image,
        audio : "I'd rather slide away.mp3",
        name : "I'd rather slide away",
        album : "Azra"
    },
    {
        image : image,
        audio : "Idi za svojom sudbinom.mp3",
        name : "Idi za svojom sudbinom",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "If I were a Barbarian.mp3",
        name : "If I were a Barbarian",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Iggy Pop.mp3",
        name : "Iggy Pop",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Iran.mp3",
        name : "Iran",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Izlazak iz kome.mp3",
        name : "Izlazak iz kome",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Između krajnosti.mp3",
        name : "Između krajnosti",
        album : "Azra"
    },
    {
        image : image,
        audio : "Između nas.mp3",
        name : "Između nas",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "Jablan.mp3",
        name : "Jablan",
        album : "Zadovoljština"
    },
    {
        image : image,
        audio : "Jane.mp3",
        name : "Jane",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "Jesi li sama večeras.mp3",
        name : "Jesi li sama večeras",
        album : "Zadovoljština"
    },
    {
        image : zadovoljstina,
        audio : "Johnny B. Good.mp3",
        name : "Johnny B. Good",
        album : "Zadovoljština"
    },
    {
        image : "band.jpg",
        audio : "Juga.mp3",
        name : "Juga",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Jutro.mp3",
        name : "Jutro",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Kad fazani lete.mp3",
        name : "Kad fazani lete",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Kad Miki kaže da se boji.mp3",
        name : "Kad Miki kaže da se boji",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "Kada stvari krenu loše.mp3",
        name : "Kada stvari krenu loše",
        album : "Zadovoljština"
    },
    {
        image : zadovoljstina,
        audio : "Kao i jučer.mp3",
        name : "Kao i jučer",
        album : "Zadovoljština"
    },
    {
        image : image,
        audio : "Kao kad se misli poklope.mp3",
        name : "Kao kad se misli poklope",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "Kao ti i ja.mp3",
        name : "Kao ti i ja",
        album : "Zadovoljština"
    },
    {
        image : "band.jpg",
        audio : "Karta za sreću.mp3",
        name : "Karta za sreću",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Kipo.mp3",
        name : "Kipo",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Klasičan znak.mp3",
        name : "Klasičan znak",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "Klinček stoji pod oblakom.mp3",
        name : "Klinček stoji pod oblakom",
        album : "Zadovoljština"
    },
    {
        image : "band.jpg",
        audio : "Kraj potoka bistre vode.mp3",
        name : "Kraj potoka bistre vode",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "Kraj tebe u tami.mp3",
        name : "Kraj tebe u tami",
        album : "Zadovoljština"
    },
    {
        image : zadovoljstina,
        audio : "Kraj.mp3",
        name : "Kraj",
        album : "Zadovoljština"
    },
    {
        image : image,
        audio : "Kratki pomak.mp3",
        name : "Kratki pomak",
        album : "Azra"
    },
    {
        image : image,
        audio : "Krivo srastanje.mp3",
        name : "Krivo srastanje",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Krvava Meri.mp3",
        name : "Krvava Meri",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Kurvini sinovi.mp3",
        name : "Kurvini sinovi",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Lađa bez dna.mp3",
        name : "Lađa bez dna",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Laku noć.mp3",
        name : "Laku noć",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Leute moj.mp3",
        name : "Leute moj",
        album : "Azra"
    },
    {
        image : image,
        audio : "Lice puno bola.mp3",
        name : "Lice puno bola",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "Lijepe žene prolaze kroz grad.mp3",
        name : "Lijepe žene prolaze kroz grad",
        album : "Zadovoljština"
    },
    {
        image : image,
        audio : "Lijepo lice.mp3",
        name : "Lijepo lice",
        album : "Azra"
    },
    {
        image : image,
        audio : "Linda Lane.mp3",
        name : "Linda Lane",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Ljudi samoće.mp3",
        name : "Ljudi samoće",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "Ma che colpa abbimo noi.mp3",
        name : "Ma che colpa abbimo noi",
        album : "Zadovoljština"
    },
    {
        image : zadovoljstina,
        audio : "Marina.mp3",
        name : "Marina",
        album : "Zadovoljština"
    },
    {
        image : "band.jpg",
        audio : "Melankolija.mp3",
        name : "Melankolija",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Meni se dušo od tebe ne rastaje.mp3",
        name : "Meni se dušo od tebe ne rastaje",
        album : "Azra"
    },
    {
        image : image,
        audio : "Milo.mp3",
        name : "Milo",
        album : "Azra"
    },
    {
        image : image,
        audio : "Mito bekrijo.mp3",
        name : "Mito bekrijo",
        album : "Azra"
    },
    {
        image : image,
        audio : "Moj galebe.mp3",
        name : "Moj galebe",
        album : "Azra"
    },
    {
        image : image,
        audio : "Moke ulice.mp3",
        name : "Mokre ulice",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Mon Ami.mp3",
        name : "Mon Ami",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Na početku bješe štos.mp3",
        name : "Na početku bješe štos",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Naizgled lijepa.mp3",
        name : "Naizgled lijepa",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Nasuprot svemu.mp3",
        name : "Nasuprot svemu",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Navike.mp3",
        name : "Navike",
        album : "Azra"
    },
    {
        image : image,
        audio : "Ne mogu pomoći nikome od nas.mp3",
        name : "Ne mogu pomoći nikome od nas",
        album : "Azra"
    },
    {
        image : image,
        audio : "Ne prodajem nasmiješenog psa.mp3",
        name : "Ne prodajem nasmiješenog psa",
        album : "Azra"
    },
    {
        image : image,
        audio : "Ne reci mi dvaput.mp3",
        name : "Ne reci mi dvaput",
        album : "Azra"
    },
    {
        image : image,
        audio : "Ne želim ništa loše da ti uradim.mp3",
        name : "Ne želim ništa loše da ti uradim",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Nebo iznad Trnskog.mp3",
        name : "Nebo iznad Trnskog",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Neće da se pomirimo.mp3",
        name : "Neće da se pomirimo",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Nedelja popodne.mp3",
        name : "Nedelja popodne",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Nedjeljni komentar.mp3",
        name : "Nedjeljni komentar",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Nema problema.mp3",
        name : "Nema problema",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "Nemir i strast.mp3",
        name : "Nemir i strast",
        album : "Zadovoljština"
    },
    {
        image : image,
        audio : "Nemoj po glavi d.p..mp3",
        name : "Nemoj po glavi druže plavi",
        album : "Azra"
    },
    {
        image : image,
        audio : "Nepotrebno precrtaj.mp3",
        name : "Nepotrebno precrtaj",
        album : "Azra"
    },
    {
        image : image,
        audio : "Nešto između.mp3",
        name : "Nešto između",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Ni jeban ni lud.mp3",
        name : "Ni jeban ni lud",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Nije OK.mp3",
        name : "Nije OK",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Niska bisera.mp3",
        name : "Niska bisera",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "No comment.mp3",
        name : "No comment",
        album : "Zadovoljština"
    },
    {
        image : "band.jpg",
        audio : "Obrati pažnju na posljenju stvar.mp3",
        name : "Obrati pažnju na poslednju stvar",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "Odlazak u noć.mp3",
        name : "Odlazak u noć",
        album : "Zadovoljština"
    },
    {
        image : image,
        audio : "Osluškivanje.mp3",
        name : "Osluškivanje",
        album : "Azra"
    },
    {
        image : image,
        audio : "Ostavi me nasamo.mp3",
        name : "Ostavi me nasamo",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Otac moga oca.mp3",
        name : "Otac moga oca",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Pametni i knjiški ljudi.mp3",
        name : "Pametni i knjiški ljudi",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Partizan.mp3",
        name : "Partizan",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Pavel.mp3",
        name : "Pavel",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Piangi con me.mp3",
        name : "Piangi con me",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "Pit i to je Amerika.mp3",
        name : "Pit i to je Amerika",
        album : "Zadovoljština"
    },
    {
        image : image,
        audio : "Plavi golub.mp3",
        name : "Plavi golub",
        album : "Azra"
    },
    {
        image : image,
        audio : "Plavo smeđe.mp3",
        name : "Plavo smeđe",
        album : "Azra"
    },
    {
        image : image,
        audio : "Po zasluzi.mp3",
        name : "Po zasluzi",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Poljska u mome srcu.mp3",
        name : "Poljska u mome srcu",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Poljubi me.mp3",
        name : "Poljubi me",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Poziv na ples.mp3",
        name : "Poziv na ples",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "Pretty woman.mp3",
        name : "Pretty woman",
        album : "Zadovoljština"
    },
    {
        image : "band.jpg",
        audio : "Pretvorba.mp3",
        name : "Pretvorba",
        album : "Azra"
    },
    {
        image : image,
        audio : "Prije nego odem u raj.mp3",
        name : "Prije nego odem u raj",
        album : "Azra"
    },
    {
        image : image,
        audio : "Pripovjedač.mp3",
        name : "Pripovjedač",
        album : "Azra"
    },
    {
        image : image,
        audio : "Prokleto ljut.mp3",
        name : "Prokleto ljut",
        album : "Azra"
    },
    {
        image : image,
        audio : "Proljeće je 13. u decembru.mp3",
        name : "Proljeće je 13. u decembru",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "Provedimo vikend zajedno.mp3",
        name : "Provedimo vikend zajedno",
        album : "Zadovoljština"
    },
    {
        image : "band.jpg",
        audio : "Pukovnik i pokojnik.mp3",
        name : "Pukovnik i pokojnik",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Pusto Tursko.mp3",
        name : "Pusto Tursko",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "Put za Katmandu.mp3",
        name : "Put za Katmandu",
        album : "Zadovoljština"
    },
    {
        image : image,
        audio : "Raspleti kose damo.mp3",
        name : "Raspleti kose damo",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "Ravno do dna.mp3",
        name : "Ravno do dna",
        album : "Zadovoljština"
    },
    {
        image : image,
        audio : "Reket roll iz šume Striborove.mp3",
        name : "Reket roll iz šume Striborove",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Rekvijem.mp3",
        name : "Rekvijem",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Repeticio est mater studiorum.mp3",
        name : "Repeticio est mater studiorum",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Rođen da bude šonjo.mp3",
        name : "Rođen da bude šonjo",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Roll over Jura.mp3",
        name : "Roll over Jura",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Rosalinda.mp3",
        name : "Rosalinda",
        album : "Azra"
    },
    {
        image : image,
        audio : "Sačekivanje.mp3",
        name : "Sačekivanje",
        album : "Azra"
    },
    {
        image : image,
        audio : "Šala.mp3",
        name : "Šala",
        album : "Azra"
    },
    {
        image : image,
        audio : "Sestra Lovel.mp3",
        name : "Sestra Lovel",
        album : "Azra"
    },
    {
        image : image,
        audio : "Sevdah šatl.mp3",
        name : "Sevdah šatl",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Sevdah za Paulu Horvat.mp3",
        name : "Sevdah za Paulu Horvat",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Silence.mp3",
        name : "Silence",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Smiješan osjećaj.mp3",
        name : "Smiješan osjećaj",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "Štićenik.mp3",
        name : "Štićenik",
        album : "Zadovoljština"
    },
    {
        image : "band.jpg",
        audio : "Strah od smrti.mp3",
        name : "Strah od smrti",
        album : "Azra"
    },
    {
        image : image,
        audio : "Strankinja sa plavi eyes.mp3",
        name : "Strankinja sa plavi eyes",
        album : "Azra"
    },
    {
        image : image,
        audio : "Sunčana strana ulice.mp3",
        name : "Sunčana strana ulice",
        album : "Azra"
    },
    {
        image : image,
        audio : "Suzy F.mp3",
        name : "Suzy F",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Svi se trude oko moje male.mp3",
        name : "Svi se trude oko moje male",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Svijet se okrenuo naopačke.mp3",
        name : "Svijet se okrenuo naopačke",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Svjetska lada.mp3",
        name : "Svijetska lađa",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Tanka crna linija.mp3",
        name : "Tanka crna linija",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Teško ovo živote.mp3",
        name : "Teško ovo živote",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "The dock of the bay.mp3",
        name : "The dock of the bay",
        album : "Zadovoljština"
    },
    {
        image : image,
        audio : "Ti si sjela za moj stol.mp3",
        name : "Ti si sjela za moj stol",
        album : "Azra"
    },
    {
        image : image,
        audio : "Ti znaš da putujem s tim.mp3",
        name : "Ti znaš da putujem s tim",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "Tko to tamo pjeva.mp3",
        name : "Tko to tamo pjeva",
        album : "Zadovoljština"
    },
    {
        image : zadovoljstina,
        audio : "Tople usne žene.mp3",
        name : "Tople usne žene",
        album : "Zadovoljština"
    },
    {
        image : "band.jpg",
        audio : "Traži mene.mp3",
        name : "Traži mene",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "Tuginata pusta da ostane.mp3",
        name : "Tuginata pusta da ostane",
        album : "Zadovoljština"
    },
    {
        image : "band.jpg",
        audio : "Tup kao ud.mp3",
        name : "Tup kao ud",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "Twist and shout.mp3",
        name : "Twist and shout",
        album : "Zadovoljština"
    },
    {
        image : image,
        audio : "U ajduke.mp3",
        name : "U ajduke",
        album : "Azra"
    },
    {
        image : image,
        audio : "Uradi nešto.mp3",
        name : "Uradi nešto",
        album : "Azra"
    },
    {
        image : image,
        audio : "Usne vrele višnje.mp3",
        name : "Usne vrele višnje",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "Užas je moja furka.mp3",
        name : "Užas je moja furka",
        album : "Zadovoljština"
    },
    {
        image : "band.jpg",
        audio : "Uvijek ista priča.mp3",
        name : "Uvijek ista priča",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "Vaše veličanstvo.mp3",
        name : "Vaše veličanstvo",
        album : "Zadovoljština"
    },
    {
        image : "band.jpg",
        audio : "Vehni vehni fiolica.mp3",
        name : "Vehni vehni fiolica",
        album : "Azra"
    },
    {
        image : image,
        audio : "Visoko iznad vlakova.mp3",
        name : "Visoko iznad vlakova",
        album : "Azra"
    },
    {
        image : image,
        audio : "Vlajka.mp3",
        name : "Vlajka",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "Volim te kad pričaš.mp3",
        name : "Volim te kad pričaš",
        album : "Zadovoljština"
    },
    {
        image : image,
        audio : "Voljela me nije nijedna.mp3",
        name : "Voljela me nije nijedna",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Vondel park.mp3",
        name : "Vondel park",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Vrata podzemnih voda.mp3",
        name : "Vrata podzemnih voda",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Vrbovina.mp3",
        name : "Vrbovina",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Vrijeme odluke.mp3",
        name : "Vrijeme odluke",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "We will be strong.mp3",
        name : "We will be strong",
        album : "Zadovoljština"
    },
    {
        image : image,
        audio : "Who's gonna play all those songs tonight.mp3",
        name : "Who's gonna play all those songs tonight",
        album : "Azra"
    },
    {
        image : zadovoljstina,
        audio : "You're just what I needed.mp3",
        name : "You're just what I needed",
        album : "Zadovoljština"
    },
    {
        image : zadovoljstina,
        audio : "Zadovoljština.mp3",
        name : "Zadovoljština",
        album : "Zadovoljština"
    },
    {
        image : image,
        audio : "Želja.mp3",
        name : "Želja",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Žena drugog sistema.mp3",
        name : "Žena drugog sistema",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Život običnog tempa.mp3",
        name : "Život običnog tempa",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Zlato moje mamino.mp3",
        name : "Zlato moje mamino",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Znam, ponavlja se to serijski.mp3",
        name : "Znam, ponavlja se to serijski",
        album : "Azra"
    },
    {
        image : "band.jpg",
        audio : "Zujanje.mp3",
        name : "Zujanje",
        album : "Azra"
    },
    {
        image : image,
        audio : "Zviždanje.mp3",
        name : "Zviždanje",
        album : "Azra"
    }
]);