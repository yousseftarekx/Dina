/* ============================================================
   data.js — kol el kalam 3aysh hena. ay 7aga 3ayez teghayarha, gheyarha men hena.
   ============================================================ */
window.DATA = (function () {

  /* 3eed miladha — el countdown + el password. el password DDMM = "0712". */
  const BIRTHDAY = { day: 12, month: 7, label: "12 July" };
  const PASSCODE = "0712";
  const NAME = "Dina";

  /* -------- MUSIC -------- */
  const SONGS = [
    { title: "Khalik Maaya",  artist: "Amr Diab",       file: "assets/music/khalik-maaya.mp3" },
    { title: "Yama Sawa",     artist: "Cairokee",        file: "assets/music/yama-sawa.mp3" },
    { title: "Msh Kol Marra", artist: "Wegz & Nasser",   file: "assets/music/msh-kol-marra.mp3" }
  ];

  /* -------- SOWARHA (elly ba3atihomly) -------- */
  const PHOTOS = [
    { src: "assets/images/photo-02.jpg", cap: "el sora di 7arfyan ba2eet aftahha kol shwaya. mesh 3aref a3mel eh." },
    { src: "assets/images/photo-01.jpg", cap: "enti keda, mesh 3amla 7esab 7ad. da a7la shaklek 3andy." },
    { src: "assets/images/photo-03.jpg", cap: "bet2oli 3ala tool enti khagoola, w b3dein te3mely keda. tab enti keda ezay ya benty." },
    { src: "assets/images/photo-07.jpg", cap: "7ateetha f makan bashofo keteer 3ala mada el youm. mesh sodfa." },
    { src: "assets/images/photo-04.jpg", cap: "el nadara di 3amla 7aga feya wallahy. w enti 3arfa keda w bardo labsaha." },
    { src: "assets/images/photo-05.jpg", cap: "el nazra elly f 3enek di, ana khalas mesh 2ader a2ol 7aga." },
    { src: "assets/images/photo-06.jpg", cap: "ba3atihaly f nos el youm keda, w ana nseet ana kont ba3mel eh aslan." }
  ];

  /* -------- 7EKAYETNA -------- */
  const STORY = [
    { when: "ana 2abl ma a3rafek",
      title: "el wa2t elly makontesh 3aref feeh enek mawgooda",
      body: "youmy kan 3ady khales. scroll, ashof, a2fel el telefon, w khalas. makontesh mestany 7ad wala 7ases en feeh 7aga na2sa. w b3dein enti geeti, w 3reft en ana kont met3awed 3ala a2al men keda w khalas.",
      img: null },
    { when: "awel mara la2etek",
      title: "group 3ala instagram. w enti gowah.",
      body: "saraha mesh faker awel comment wala awel 7aga bel zabt. bs faker en feeh 7aga feeki shadetni. kan lazem akalemek, mesh 3aref leh. bs 3andy e7sas sa3etha en di mesh hat3ady 3ady.",
      img: "assets/images/photo-06.jpg" },
    { when: "awel kalam 7a2ee2y",
      title: "el leila elly 2a3adna netkalem lel fagr",
      body: "faker nafsy ba2ra el message w a2felha w aftahha tany 2abl ma ab3at. kont metwater w lessa ma3reftesh leh. w el sa3at kanet betmshy w e7na lessa bnetkalem, w mafeesh 7aga fel donia msta3galni akhlas.",
      img: "assets/images/photo-02.jpg" },
    { when: "delwa2ty",
      title: "ba2eeti goz2 men youmy men gher ma a2sod",
      body: "esmek awel 7aga bashofha w akher 7aga. voice notes w calls w '3amel eh'. el masafa mawgooda w el wa2t mekhtelef, bs ba2eeti a2rab 7ad leya. w di aghrab 7aga fel mawdoo3 kolo.",
      img: "assets/images/photo-04.jpg" },
    { when: "elly ana mestaneeh",
      title: "el youm elly hatrkaby feeh el tayara le masr",
      body: "mesh 3aref hakoon 3amel eh sa3etha. ghaleban hakhaf w afra7 f nafs el wa2t. bs 3aref 7aga wa7da: awel ma ashofek 2odamy 7a2ee2y, kol el estena da haykoon mestahel. lessa mostaneeki ya Dina.",
      img: "assets/images/photo-07.jpg" }
  ];

  /* -------- EL ASBAB (51) — kollohom men Youssef, wala wa7ed generic. tag: heart | funny | tiny -------- */
  const REASONS = [
    { t: "3ashan da enty — w ana bahebek enty.", tag:"heart" },
    { t: "3enek el 7elween.", tag:"heart" },
    { t: "de7ketek elly ma2darsh ashof 7ayaty men gherha bgd.", tag:"heart" },
    { t: "manakherek.", tag:"tiny" },
    { t: "sha3rek el na3em el 7elw.", tag:"tiny" },
    { t: "toolek el 155 cm.", tag:"funny" },
    { t: "wednek.", tag:"tiny" },
    { t: "shaklek elly msh 3ayez gheero.", tag:"heart" },
    { t: "tafahomek leya 3ala tool.", tag:"heart" },
    { t: "esti7malek leya.", tag:"heart" },
    { t: "el attachment issues elly sal7teeha 3ashanena.", tag:"heart" },
    { t: "el standards beta3tek, raghm enha bet2arrafny sa3at 3ashan msh 3ayzaha 3alaya ana.", tag:"funny" },
    { t: "w enty bet2oly saba7 el kheir kol youm.", tag:"tiny" },
    { t: "w enty bet2oly goodnight kol youm.", tag:"tiny" },
    { t: "w enty mabtensesh te2oly bahebak men awel youm 3reftek feeh.", tag:"heart" },
    { t: "3ashan enty; ana bahebek w hafdal ahebek w msh 3ayez gherek ahebbo.", tag:"heart" },
    { t: "za3alek by3addy besor3a raghm eny sa3at bab2a rekhem.", tag:"heart" },
    { t: "bab2a 3ayez akalmek ba3d ma nefsel 3ala baad kol shwaya, 3ashan bahebek.", tag:"heart" },
    { t: "ro7ek el 7elwa.", tag:"heart" },
    { t: "konek 3ala tool betwa7esheeny 7atta w e7na bnetkallem aw lessa metkallemeen w enty dakhla tnamy, w ana msh 3aref a3mel 7aga men kotr ma wa7ashteeny.", tag:"heart" },
    { t: "yomek elly bte7keeh kol youm b tare2a tou7fa, w ghaleban b sotek.", tag:"tiny" },
    { t: "esmek — ana bahebbo awy, feeh 7aga feeh.", tag:"heart" },
    { t: "sotek 3ala tool w ana nayem, 3ashan mab2darsh anam w enty msh ma3aya.", tag:"heart" },
    { t: "ba7eb sotek.", tag:"heart" },
    { t: "el aghany elly betesma3eeha.", tag:"tiny" },
    { t: "el playlist elly 3amaltohalek, lama ala2eeky betesma3y feeha batbset.", tag:"tiny" },
    { t: "just the way you are.", tag:"heart" },
    { t: "i love being bored ma3aky, a7san ma ab2a f makan tany mabsout.", tag:"heart" },
    { t: "ana ba7eb kol 7aga feeky, enty w bas — w bety7la ay 7aga w ana ma3aky.", tag:"heart" },
    { t: "kol 7aga f donyety, awel ma enty dakhalty ba2et a7la beeky.", tag:"heart" },
    { t: "za3alek el cute.", tag:"tiny" },
    { t: "e3tira9ek 3alaya law et2akhart 3aleeky.", tag:"tiny" },
    { t: "ba7eb ghertek.", tag:"funny" },
    { t: "del3ek.", tag:"tiny" },
    { t: "eb2y zawwedy dala3 shwaya, ha.", tag:"funny" },
    { t: "el akl elly bet7ebbeeh, ana kaman bahebo.", tag:"tiny" },
    { t: "konek betshag3eeny 7atta w enty msh fahma 7aga.", tag:"heart" },
    { t: "konek 3ayza teb2y gamby w betsandeny 7atta w enty msh 3arfa tefhemeny.", tag:"heart" },
    { t: "konek fadalty gamby f kaza 7aga sa3ba w ana kont zeft ma3aky feeha.", tag:"heart" },
    { t: "konek gamby fel naga7 w fel matem — fel far7a w fel 7ozn.", tag:"heart" },
    { t: "konek mesta7melaany keteer.", tag:"heart" },
    { t: "konek a7la saydalaneya mosta2baleya f 7ayaty, w hat3alegny.", tag:"funny" },
    { t: "konek so7baty w 7abibty w kol 7aga leya.", tag:"heart" },
    { t: "el love beta3 3eltek — bahebbo.", tag:"heart" },
    { t: "7obek le bent okhtek.", tag:"heart" },
    { t: "ana obsessed beeky, w atmanna tkony obsessed beya.", tag:"funny" },
    { t: "malakeyety leeky — ana baktefy beeky.", tag:"heart" },
    { t: "bahebek.", tag:"heart" },
    { t: "hafdal ahebek.", tag:"heart" },
    { t: "msh 3ayez gherek.", tag:"heart" },
    { t: "always going to be obsessed with you <3", tag:"heart" }
  ];

  /* -------- EL GAWABAT -------- */
  const LETTERS = [
    { mood: "el sara7a", seal: "D", to: "eb2ay e2rai di el awel",
      title: "tab, el mawdoo3 da kolo",
      date: "maktoob w el donia leil, met2akher awy",
      body:
`ana mesh ragel websites. enti 3arfa keda. 3amalt nos elly 3amalto da w ana badawar 3ala ma3na kol khatwa.

bs makontesh a2dar a2olek kol sana w enti tayba f message tany w khalas. enti testahay akter men message w emoji torta.

fa 2a3adt hena shwaya ba7awel a3mel 7aga te3abar 3an elly ana 7aso tegahek bgd. ghaleban mesh perfect. w ana nafsy mesh perfect. w bardo enti ekhtareeny.

kol sana w enti tayba ya Dina. ana mabsoot bgd enek etwaladty. tab3an. ana 3amel website kamla 3an el mawdoo3.`,
      sign: "beta3ek, w shwaya mesh nayem" },

    { mood: "el shokr", seal: "♡", to: "3ala el 7agat el soghayara",
      title: "shukran 3ala 7agat mahadsh bayakhod balo menha",
      date: "f youm 3ady w perfect",
      body:
`el nas betshker ba3d 3ala el 7agat el kbeera. el hadaya, el monasabat, el 7agat el ranana.

ana 3ayez ashkerek 3ala el 7agat el soghayara. el 'saba7 el kheir'. enek fakra el akl elly ba7ebo. enek tes2aly 3ala el 7aga elly kanet 2a2elany, w b3dein tesma3y el egaba bgd.

enti betheby b tare2a hadya, yomiya, mabtoslsh le 7ad. ana shayef kol da. w 7aseb.

shukran enek betkoni 7anena ma3aya fel ayam elly ana nafsy makontesh 7anen 3ala nafsy feeha.`,
      sign: "momtan, akter mma ba2ol" },

    { mood: "el 7anyena", seal: "∞", to: "lama teshaki f nafsek",
      title: "3shan law nseeti",
      date: "e7tafzy biha f makan",
      body:
`youm hayeegy w hat7essy enek keteer, aw 2oleyela, aw enek sa3ba fel 7ob. kol el nas byegilaha el youm da.

fa aho maktoob, 3ashan met3rafeesh te3endy 3alaya.

enti mesh keteer. 3omrek ma konti keteer. w f aghsar youm 3andek, enti lessa ashal 7aga ana ekhtartha f 7ayaty.

ana mesh raye7 7etta. e2rai el kalam da tany kol ma te7tagy.`,
      sign: "dayman f safek" },

    { mood: "el maskhara", seal: "!", to: "eftha7ha lama tez3aly menny",
      title: "e3tezar gahez men badry (ana monazam, 3aref)",
      date: "lel esti3mal el mosta2baly",
      body:
`hi. law bet2ray da yeb2a enti ghaleban metdaya2a menny delwa2ty. 7a2ek. ana ghaleban kont ba3mel ziada.

defa3y? mafeesh. enti sa7. enti dayman sa7, w di moshkela bgd.

7agat ba7ebha 7atta f nos el khena2a: tare2etek lama tez3aly w teb2ay faseeha fag2a. el wa2fa el soghayara elly bet2arary feeha tesam7eeny wala la2. betsam7y dayman. w ana mo3tamed 3ala keda.

ana hageeb el akl. enti ekhtary el film. sol7?`,
      sign: "el ghaby beta3ek, ma3 e7teramy" },

    { mood: "elly ana most2aked meno", seal: "→", to: "3an ba2eet el 7ekaya",
      title: "el 7aga elly ana most2aked menha",
      date: "men gher tarikh nehaya",
      body:
`ana ma3andeesh kol sana marsoma. w mesh ha2dar awa3edek bel kamal. ay 7ad byew3ed bel kamal byekdeb 3aleeki.

elly a2dar awa3edek bih: en ana 3ayez el mosta2bal el 3ady ma3aki. ba3d ma teegy. el ayam elly mafihash 7aga, el 2a3da, el za7ma, el 7ad el batee2, el noskha menena elly ta3bana w lessa betekhtar ba3daha.

ekbary ma3aya b sor3a mesh mante2iya khales. khaleena neb2a momelen ma3 ba3d w nesamiha el 7aya el 7elwa.

ay shakl el ba2y hayakhdo, ana 3ayez abosalo w enti gambi.`,
      sign: "mo3tamed 3ala wa2t taweel" }
  ];

  /* -------- EL A7LAM -------- */
  const DREAMS = [
    { ico:"🛬", title:"el youm elly ansel feeh el matar w ala2iki", body:"el youm elly kol da estana 3ashano. mesh 3aref ha3mel eh awel ma ashofek 7a2ee2y 2odamy, bs 3aref en kol sanya estaneetha hatkoon mestahela." },
    { ico:"🇪🇬", title:"awarik masr", body:"koshari w el share3 w el za7ma w el makan elly ba7ebo w enti gambi. 3ayez ashof wishek w enti betshofy el balad beta3ty le awel mara." },
    { ico:"☕", title:"el sob7iyat el 3adya", body:"el sob7 el batee2. men gher monabeh, sha3r mesh mazboot, 2ahwa we7sha, w enti mawgooda. 3ayez alf youm zay dol. di a7la rafahiya." },
    { ico:"🌙", title:"kalam el sa3a etnein bel leil, bs enti 2odamy", body:"nafs el kalam elly bin2olo 3ala el telefon delwa2ty. 3an el fada w el tofoola w hansamy el 2otat esmha eh. bs men gher shasha beena." },
    { ico:"🎂", title:"kol 3eed milad gay ba3d da", body:"3ayez akoon el shakhs el moz3eg elly bye3mel monasba kol sana. et3awedy. mesh haheda bkhosoosek." },
    { ico:"🌿", title:"nekbar w net7asen sawa", body:"neb2a nas a7san gamb ba3d, mesh 3ashan lazem, bs 3ashan el le3ba a7la ma3 fere2." },
    { ico:"📸", title:"sowar 7a2i2iya, mesh screenshots", body:"3ayez archive me7reg men ayam 7elwa. sowar mesh mazbota, w e7na bnede7ak, f nos gomla. sowar e7na feeha el etnein ma3 ba3d bgd." },
    { ico:"👵", title:"nekbar w mesh far2a ma3ana", body:"el noskha elly e7na feeha 3agezna, b nafs el shebsheb, bnkamel shakwa ba3d. w lessa bakhtarek w e7na el etnein bydan w sa3been." }
  ];

  /* -------- OMNIYAT 3EED EL MILAD -------- */
  const WISHES = [
    "en el sana di tekoon ar7am 3aleeki men elly fatet.",
    "enek temsky nafsek w enti fakhoora b nafsek, mara 3ala el a2al, b sot 3aly.",
    "en el nas elly betheybek ye3rafo enohom ma7zozeen 2ad eh.",
    "enek terta7y men gher ma te7essy bel zanb enek bterta7y.",
    "en 7aga konti 3ayzaha men zaman f sokot teegy akheeran.",
    "enek tede7aky el de7ka el 2abee7a elly b gesmek kolo akter b keteer mma te3ayaty.",
    "w en el youm elly teegy feeh masr yeegy b sor3a. ana 3adad w mesh 2ader astana, bgd."
  ];

  return { BIRTHDAY, PASSCODE, NAME, SONGS, PHOTOS, STORY, REASONS, LETTERS, DREAMS, WISHES };
})();
