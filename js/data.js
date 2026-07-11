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

  /* -------- EL ASBAB (50). tag: heart | funny | tiny -------- */
  const REASONS = [
    { t: "wishek. ana mara2to keteer. bs lama tebosy f 7aga w tens3y — da a7la shakl enty fih.", tag:"heart" },
    { t: "sha3rek lama byeb2a fawda w enty betekraho — w ana bahiib bgd. da enty el 7a2i2iya.", tag:"tiny" },
    { t: "manafirek. msh 3aref awsafha bel zabt. bs lama teb2y 3al2ana 3alaya w betno2y — mab2ar2sh 3andy en e7na mena2ra.", tag:"funny" },
    { t: "3enek el 2 lama betbosy f 7aga w betfakary fiha bgd. kayfa w msh 3arfa.", tag:"heart" },
    { t: "sha3rek la2ma tetla3 el soba7 — msh mazboot w faker yedhahhar — da elly ana 3ayzo f el 7aga el 2adema.", tag:"tiny" },
    { t: "de7ket el khagal elly bete3meliha lama a2ol 7aga 7elwa 3aleeha. betekrahy el compliments bs betsebeeh yef2os feeki.", tag:"funny" },
    { t: "el tare2a elly betkhody fiha nafasek 2abl ma te2oly eh elly f balek. hatay el kalam da men ayy tany.", tag:"heart" },
    { t: "shaklek lama betetkalemy 3an 7aga bet7ebiha bgd. 3enek betelma3 w ana bansa ana kont ba2ol eh.", tag:"heart" },
    { t: "3andek de7ka makhsosa betetla3 bs lama 7aga tedhakek bgd. ana bagry wara di.", tag:"heart" },
    { t: "el nadara lama telbesiha. msh 3aref, betwadiky le shakhs tany ana ba7ebo bardo.", tag:"tiny" },
    { t: "lama tez3aly meny w enty 2arara 3alaya, bety2y f el akhir tesal7eny. w ana 3aref keda w bardo bash2a mennha.", tag:"heart" },
    { t: "enty el wa7eeda elly lama teegy tesal7eny — el salfa kolaha betkoon khlset men 2abl ma tebda2.", tag:"heart" },
    { t: "enty lama beteegy tsal7eny, mesh beteegy madaretesh. beteegy 3a2la, we 7anena, we mesh fakra 3ala 7aga. da a7la 7aga.", tag:"heart" },
    { t: "enty bethebi w enty 3andek el 7a2 enty z3lana. da msh 3ady. da nadr.", tag:"heart" },
    { t: "lama betz3aly w bardo betha2y 2omry, 3arfa tefarreq bein el z3al el 7a2i2y w el mesh 7a2i2y.", tag:"tiny" },
    { t: "sa3at betday2y meny w hena batlob rabena yesabbaraky. bs 7atta f el wa2t da bahebek.", tag:"funny" },
    { t: "el 3enada beta3tek sa3at bt2al3eny... bs barefsha enty elly bet3nady 3ala 7a2. dah el faro2.", tag:"funny" },
    { t: "mabashofeksh zay ma 7a3eb. da el 7aga el wa7eeda elly batefeshed fyha kol mara. bs dah brdo bidal bensafa3 3ala el salfa.", tag:"heart" },
    { t: "mabashofeksh bel 2add elly benebeih... w dah elly beykhaliny akad en kol mara bashofek hayb2a 7aga.", tag:"heart" },
    { t: "enty 3aneda, aywa. bs el 3enada dy sa7et mennah 7agat kteera. fa hya mesh 3enada bs, hya enek bete2fy 3ala elly bete2many bih.", tag:"heart" },
    { t: "lama betday2y 3alay we beb2a ghalat — enty msh betzahhary kter. bets2aly bass: 'enta kwyyes?' we 3andek el 7a2 di a7la 7aga.", tag:"tiny" },
    { t: "lama betgely el 2a2, enty mesh beteegy te2oly he 2a2 — beteegy te2oly 'ana hena'. w da a7la rad.", tag:"heart" },
    { t: "awel 'saba7 el kheir' fel youm, 2abl ma el donia nafsaha tefo2.", tag:"tiny" },
    { t: "el sanya elly betoskoty fiha 2abl ma tedhaky, ka2enek bet2akedy en el nokta testahel. w betestahel kol mara.", tag:"tiny" },
    { t: "betftekry 7agat soghayara ana 2oltaha w nseetha, w tegibiha tany ba3d osboo3 ka2enha mesh 7aga.", tag:"heart" },
    { t: "betba3atily 'ok' ba3d ma tefakary fel reply 3ashr da2aye2. shoftek ya Dina.", tag:"funny" },
    { t: "3aneeda, bs bel tare2a elly ma3naha enek msh betsiby 7ad. ana men demnhom.", tag:"heart" },
    { t: "bet7essy en ana msh tamam men 2abl ma a2ol kelma. men soty bs.", tag:"heart" },
    { t: "betsiby el call mafto7 w enty mashya te3mely 7aga, 3ashan bs a7es enek gamby. da a7la sot fel oda.", tag:"heart" },
    { t: "bet2oly 'ta3aly' 7atta 3ala el telefon, w el youm kolo byetsala7.", tag:"heart" },
    { t: "betftekry le7zat 7elwa 3adet 3alena, w tefakrny b 7aga kwayesa ana nseetha khales.", tag:"heart" },
    { t: "shaga3a f 7agat betkhafy menha. men gher ma te3leny. f sokot.", tag:"heart" },
    { t: "betkhaliny 3ayez akoon a7san, msh bel kalam, bs b konek enty.", tag:"heart" },
    { t: "sotek byenzel shwaya lama tekony sad2a, ka2enek betediny 7aga tetkeser b sohola.", tag:"heart" },
    { t: "betkhaly el youm el we7esh yetsheel, b mogarad enek mawgooda f akhro.", tag:"heart" },
    { t: "betfra7y beya f 7agat ana shayefha wala 7aga. betshofiny akbar mma bashof nafsy.", tag:"heart" },
    { t: "betkhaly el makan adfa. msh 3aref ashra7ha ezay. el oda betetghayar lama esmek yenawar el shasha.", tag:"heart" },
    { t: "3omrek ma khaleteeny a7es en ana keteer aw 2oleyel. mazboot, 3an 2asd.", tag:"heart" },
    { t: "betkony sad2a ma3aya 7atta lama el sahl enek tehezy rasek w khalas.", tag:"heart" },
    { t: "betftekry tafasily, mazagy, el 7agat elly betefde7ny. daraseeny w ana makhdtesh baly.", tag:"heart" },
    { t: "bet2oly 'e7na' 3ala 7agat ana kont ba2ol 3aleeha 'ana' bs.", tag:"heart" },
    { t: "betsam7y b sor3a, bs betftekry elly kan mohem. el tawazon da sa3b w enty 3andek.", tag:"heart" },
    { t: "bet7asasiny en ana f aman le daraget en ana a2dar akoon 3ady w msh mobher. di andar 7aga.", tag:"heart" },
    { t: "bet2oly 'wa3d?' w bet2sodiha, w betmskeeny biha, w ana ba7eb atmesek biha.", tag:"heart" },
    { t: "betde7aky b gesmek kolo lama tekoon med7eka bgd. ana 3ayesh 3ashan el de7ka di.", tag:"tiny" },
    { t: "3omrek ma khaleteeny a3mel emte7an 3ashan te7ebiny. 7abeteeny w khalas.", tag:"heart" },
    { t: "el masafa beena kbeera w raghm keda ba7esek a2rab men nas gamby.", tag:"heart" },
    { t: "betba3atily 'weselt?' kol shwaya w ana fel taree2. feeh 7ad byes2al 3alaya ba2a.", tag:"heart" },
    { t: "betsabary 3ala tafkiry el ziada. betstaneeh ye3ady w tefdaly.", tag:"heart" },
    { t: "bet7oty sha3rek wara wednek lama tekony hat2oly 7aga men 2albek.", tag:"tiny" },
    { t: "w b saraha, khelest makan 2abl ma akhlas asbab. da msh 3ashan 7agat we7sha — da 3ashan enty akbar men ay lista.", tag:"heart" }
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
