document.addEventListener("DOMContentLoaded", function () {
  // Traducciones completas
  const translations = {
    es: {
      // Navegación
      inicio: "Inicio",
      valores: "Valores",
      mensaje: "Mensaje",
      lenguas: "Lenguas",
      calendario: "Calendario",
      unete: "Únete",

      // Hero
      heroTitle: "Bienvenidos/as/es a la Tuna Rosa LGTBIQA+",
      heroSubtitle:
        "Un espacio musical inclusivo donde todas las personas tienen cabida",
      heroIntro: '¡Hola! Soy Isidoro, también conocido como "Bruja" o "Looky"',
      heroP1:
        "Soy el Coordinador de la asociación Tuna Rosa, y una de las cabezas visibles de este nuevo proyecto junto a otros hombres, mujeres, trans, queers y personas que no se identifican con los patrones tradicionales de heterosexualidad.",
      heroP2:
        "Nuestro grupo es una nueva propuesta de diversión a través de la música donde todas las personas tengan cabida, el único requisito para pertenecer a él es el respeto y el cariño entre nosotras/os/es y hacia la sociedad.",

      // Valores
      valoresTitle: "Nuestros Valores",
      valoresIntro:
        "Queremos ser reflejo de la sociedad del siglo XXI, por eso, en nuestro escudo aparecen estos valores fundamentales:",
      valorRespeto: "Respeto",
      valorRespetoDesc:
        "Base fundamental de todas nuestras interacciones y relaciones dentro y fuera del grupo.",
      valorDiversidad: "Diversidad",
      valorDiversidadDesc:
        "Celebramos y valoramos la diversidad en todas sus expresiones y formas.",
      valorFeminismo: "Feminismo/Igualdad",
      valorFeminismoDesc:
        "Comprometidos con la igualdad de género y la lucha contra el machismo.",
      valorVisibilidad: "Visibilidad",
      valorVisibilidadDesc:
        "Dar voz y presencia a las identidades y orientaciones diversas en la sociedad.",
      valorOrgullo: "Orgullo",
      valorOrgulloDesc:
        "Orgullo de ser quienes somos y de nuestra contribución a una sociedad más justa.",
      valorAmor: "Maitasuna/Amor",
      valorAmorDesc:
        "El amor como fuerza transformadora y principio guía de nuestras acciones.",

      // Mensaje
      mensajeTitle: "Nuestro Mensaje",
      mensajeP1:
        "Queremos unir lo mejor de la tradición estudiantil europea con la música popular actual, con nuestra sociedad abierta, sin complejos ni exclusiones. Cuando se formaron las primeras estudiantinas (Tunas) en España, Portugal s.XV, en Holanda y más tarde en los países iberoamericanos y por todo el mundo, éstas, cantaban y tocaban piezas populares a cambio de un plato de sopa (la sopaboba o el bodrio) en mesones, tabernas o conventos.",
      mensajeHighlight:
        'Hoy volvemos a tocar en las calles y tabernas para sentirnos juntos parte de una sociedad más justa donde todos podamos aportar "maitasuna" a este mundo del s. XXI.',
      mensajeP2:
        "Queremos integrar, sumar, invitar a que se una toda persona que venga a divertirse respetando; y lo hacemos a través de la música, de los cantos en grupo. Algunas veces iremos a rondar a las personas amadas, para decirles el amor que sentimos; solo necesitamos saber que ese amor es correspondido.",
      mensajeP3:
        "Somos más los que creemos en el gran corazón que llevamos dentro, y jamás vamos a prejuzgar la diversidad, al contrario, nos enorgullece. Somos gays, lesbianas, bisexuales, trans, intergéneros, queers, asexuales, y todos los que no se sienten identificados con el modelo heterosexista, mucho menos con el machismo que tanto dolor ha traído a la sociedad de antes y de ahora.",

      // Lenguas
      lenguasTitle: "Lenguas y Cultura",
      lenguasP1:
        "Nuestra Tuna no es una Tuna que restrinja su ámbito a un solo país o territorio. Así como las lenguas en que nos expresamos y/o cantamos son todas las que podamos llegar a aprender. Son especialmente protegidas las lenguas minoritarias del estado español: Valenciano-Catalán, Euskera, Gallego.",
      lenguasP2:
        "Nos encantaría poder cantar en alguna lengua más, ayúdanos a descubrir la belleza de tu lengua en una canción que te guste. Podemos intentarlo, queremos intentarlo.",
      lenguaEspanol: "Español",
      lenguaEspanolDesc: "Lengua principal de comunicación",
      lenguaEuskera: "Euskera",
      lenguaEuskeraDesc: "Maitasuna, nuestro valor fundamental",
      lenguaCatalan: "Valenciano-Catalán",
      lenguaCatalanDesc: "Lengua protegida y celebrada",
      lenguaGallego: "Gallego",
      lenguaGallegoDesc: "Parte de nuestra riqueza cultural",
      lenguaOtras: "Otras lenguas",
      lenguaOtrasDesc: "¡Queremos aprender más!",

      // Calendario
      calendarioTitle: "Calendario de Eventos",
      proximosEventos: "Próximos Eventos 2024-2025",
      evento1: "Día internacional contra la homofobia, transfobia y bifobia",
      fechasImportantes: "Fechas Importantes LGTBIQA+",

      // Únete
      uneteTitle: "¡Únete a nuestra Tuna Rosa!",
      uneteP1:
        'Nuestra invitación es internacional; puede asociarse toda persona que quiera cantar, tocar y aportar su "buen rollo" al grupo. Únicamente estarán vetadas las personas que intenten separar, ridiculizar, humillar o transmitir odio.',
      uneteBtn: "Hazte socio/a/e",
      uneteP2:
        "Os esperamos a todas/es/os los que queráis participar de nuestra Tuna Rosa Lgtbiqa+; bien haciéndoos socias/es/os (sin ninguna aportación económica) o bien, simplemente uniéndoos a cantar donde nos encontréis.",

      // Footer
      contacto: "Contacto",
      escudoBordado: "Escudo Bordado",
      escudoP1:
        "Cómo conseguir el escudo bordado Tuna Rosa: encargar hacer en tunarosalgtbiqaplus@gmail.com.",
      escudoP2:
        "El escudo se enviará contrareembolso según precio de la empresa que se os informará en el mail.",
      siguenos: "Síguenos",
      siguenosDesc: "Mantente al día de nuestros eventos y actuaciones",
      copyright: "2026 Tuna Rosa LGTBIQA+. Todos los derechos reservados.",
      ubicacion: "Actuamos en toda España y más allá",
    },

    cat: {
      // Navegación
      inicio: "Inici",
      valores: "Valors",
      mensaje: "Missatge",
      lenguas: "Llengües",
      calendario: "Calendari",
      unete: "Uneix-te",

      // Hero
      heroTitle: "Benvinguts/des/udes a la Tuna Rosa LGTBIQA+",
      heroSubtitle:
        "Un espai musical inclusiu on totes les persones tenen cabuda",
      heroIntro: 'Hola! Sóc Isidoro, també conegut com "Bruja" o "Looky"',
      heroP1:
        "Sóc el Coordinador de l'associació Tuna Rosa, i un dels caps visibles d'aquest nou projecte juntament amb altres homes, dones, trans, queers i persones que no s'identifiquen amb els patrons tradicionals d'heterosexualitat.",
      heroP2:
        "El nostre grup és una nova proposta de diversió a través de la música on totes les persones tinguen cabuda, l'únic requisit per pertànyer-hi és el respecte i l'estima entre nosaltres i cap a la societat.",

      // Valores
      valoresTitle: "Els Nostres Valors",
      valoresIntro:
        "Volem ser reflex de la societat del segle XXI, per això, en el nostre escut apareixen aquests valors fonamentals:",
      valorRespeto: "Respecte",
      valorRespetoDesc:
        "Base fonamental de totes les nostres interaccions i relacions dins i fora del grup.",
      valorDiversidad: "Diversitat",
      valorDiversidadDesc:
        "Celebrem i valorem la diversitat en totes les seues expressions i formes.",
      valorFeminismo: "Feminisme/Igualtat",
      valorFeminismoDesc:
        "Compromesos amb la igualtat de gènere i la lluita contra el masclisme.",
      valorVisibilidad: "Visibilitat",
      valorVisibilidadDesc:
        "Donar veu i presència a les identitats i orientacions diverses en la societat.",
      valorOrgullo: "Orgull",
      valorOrgulloDesc:
        "Orgull de ser qui som i de la nostra contribució a una societat més justa.",
      valorAmor: "Maitasuna/Amor",
      valorAmorDesc:
        "L'amor com a força transformadora i principi guia de les nostres accions.",

      // Mensaje
      mensajeTitle: "El Nostre Missatge",
      mensajeP1:
        "Volem unir el millor de la tradició estudiantil europea amb la música popular actual, amb la nostra societat oberta, sense complexos ni exclusions. Quan es van formar les primeres estudiantines (Tunes) a Espanya, Portugal s.XV, a Holanda i més tard als països iberoamericans i per tot el món, aquestes, cantaven i tocaven peces populars a canvi d'un plat de sopa (la sopaboba o el bodrio) en mesons, tavernes o convents.",
      mensajeHighlight:
        'Avui tornem a tocar als carrers i tavernes per sentir-nos junts part d\'una societat més justa on tots puguem aportar "maitasuna" a aquest món del s. XXI.',
      mensajeP2:
        "Volem integrar, sumar, convidar a que s'unisca tota persona que vinga a divertir-se respectant; i ho fem a través de la música, dels cants en grup. Algunes vegades anirem a rondar a les persones estimades, per dir-los l'amor que sentim; només necessitem saber que aquest amor és correspost.",
      mensajeP3:
        "Som més els que creiem en el gran cor que portem dins, i mai anirem a prejutjar la diversitat, al contrari, ens enorgulleix. Som gais, lesbianes, bisexuals, trans, intergèneres, queers, asexuals, i tots els que no se senten identificats amb el model heterosexista, molt menys amb el masclisme que tant de dolor ha portat a la societat d'abans i d'ara.",

      // Lenguas
      lenguasTitle: "Llengües i Cultura",
      lenguasP1:
        "La nostra Tuna no és una Tuna que restringisca el seu àmbit a un sol país o territori. Així com les llengües en què ens expressem i/o cantem són totes les que puguem arribar a aprendre. Són especialment protegides les llengües minoritàries de l'estat espanyol: Valencià-Català, Euskera, Gallec.",
      lenguasP2:
        "Ens encantaria poder cantar en alguna llengua més, ajuda'ns a descobrir la bellesa de la teua llengua en una cançó que t'agrade. Podem intentar-ho, volem intentar-ho.",
      lenguaEspanol: "Espanyol",
      lenguaEspanolDesc: "Llengua principal de comunicació",
      lenguaEuskera: "Euskera",
      lenguaEuskeraDesc: "Maitasuna, el nostre valor fonamental",
      lenguaCatalan: "Valencià-Català",
      lenguaCatalanDesc: "Llengua protegida i celebrada",
      lenguaGallego: "Gallec",
      lenguaGallegoDesc: "Part de la nostra riquesa cultural",
      lenguaOtras: "Altres llengües",
      lenguaOtrasDesc: "Volem aprendre més!",

      // Calendario
      calendarioTitle: "Calendari d'Esdeveniments",
      proximosEventos: "Pròxims Esdeveniments 2024-2025",
      evento1: "Dia internacional contra l'homofòbia, transfòbia i bifòbia",
      fechasImportantes: "Dates Importants LGTBIQA+",

      // Únete
      uneteTitle: "Uneix-te a la nostra Tuna Rosa!",
      uneteP1:
        'La nostra invitació és internacional; pot associar-se tota persona que vulga cantar, tocar i aportar el seu "bon rotllo" al grup. Únicament estaran vetades les persones que intenten separar, ridiculitzar, humiliar o transmetre odi.',
      uneteBtn: "Fes-te soci/òcia/e",
      uneteP2:
        "Us esperem a totes/es/os els que vulgueu participar de la nostra Tuna Rosa Lgtbiqa+; bé fent-vos sòcies/es/os (sense cap aportació econòmica) o bé, simplement unint-vos a cantar on ens trobeu.",

      // Footer
      contacto: "Contacte",
      escudoBordado: "Escut Brodat",
      escudoP1:
        "Com aconseguir l'escut brodat Tuna Rosa: encarregar fer en tunarosalgtbiqaplus@gmail.com.",
      escudoP2:
        "L'escut s'enviarà contrareemborsament segons preu de l'empresa que se us informarà en el correu.",
      siguenos: "Segueix-nos",
      siguenosDesc: "Manté't al dia dels nostres esdeveniments i actuacions",
      copyright: "2026 Tuna Rosa LGTBIQA+. Tots els drets reservats.",
      ubicacion: "Actuem a tota Espanya i més enllà",
    },

    gal: {
      // Navegación
      inicio: "Inicio",
      valores: "Valores",
      mensaje: "Mensaxe",
      lenguas: "Linguas",
      calendario: "Calendario",
      unete: "Únete",

      // Hero
      heroTitle: "Benvidos/as/es á Tuna Rosa LGTBIQA+",
      heroSubtitle:
        "Un espazo musical inclusivo onde todas as persoas teñen cabida",
      heroIntro: 'Ola! Son Isidoro, tamén coñecido como "Bruja" ou "Looky"',
      heroP1:
        "Son o Coordinador da asociación Tuna Rosa, e unha das cabezas visibles deste novo proxecto xunto a outros homes, mulleres, trans, queers e persoas que non se identifican cos patróns tradicionais de heterosexualidade.",
      heroP2:
        "O noso grupo é unha nova proposta de diversión a través da música onde todas as persoas teñan cabida, o único requisito para pertencer a el é o respecto e o agasallo entre nós/as/es e cara á sociedade.",

      // Valores
      valoresTitle: "Os Nosos Valores",
      valoresIntro:
        "Queremos ser reflexo da sociedade do século XXI, por iso, no noso escudo aparecen estes valores fundamentais:",
      valorRespeto: "Respecto",
      valorRespetoDesc:
        "Base fundamental de todas as nosas interaccións e relacións dentro e fóra do grupo.",
      valorDiversidad: "Diversidade",
      valorDiversidadDesc:
        "Celebramos e valoramos a diversidade en todas as súas expresións e formas.",
      valorFeminismo: "Feminismo/Igualdade",
      valorFeminismoDesc:
        "Comprometidos coa igualdade de xénero e a loita contra o machismo.",
      valorVisibilidad: "Visibilidade",
      valorVisibilidadDesc:
        "Dar voz e presenza ás identidades e orientacións diversas na sociedade.",
      valorOrgullo: "Orgullo",
      valorOrgulloDesc:
        "Orgullo de ser quen somos e da nosa contribución a unha sociedade máis xusta.",
      valorAmor: "Maitasuna/Amor",
      valorAmorDesc:
        "O amor como forza transformadora e principio guía das nosas accións.",

      // Mensaje
      mensajeTitle: "A Nosa Mensaxe",
      mensajeP1:
        "Queremos unir o mellor da tradición estudiantil europea coa música popular actual, coa nosa sociedade aberta, sen complexos nin exclusións. Cando se formaron as primeiras estudantinas (Tunas) en España, Portugal s.XV, en Holanda e máis tarde nos países iberoamericanos e por todo o mundo, estas, cantaban e tocaban pezas populares a cambio dun prato de sopa (a sopaboba ou o bodrio) en mesóns, tabernas ou conventos.",
      mensajeHighlight:
        'Hoxe volvemos tocar nas rúas e tabernas para sentirnos xuntos parte dunha sociedade máis xusta onde todos poidamos aportar "maitasuna" a este mundo do s. XXI.',
      mensajeP2:
        "Queremos integrar, sumar, convidar a que se una toda persoa que veña a divertirse respectando; e facémolo a través da música, dos cantos en grupo. Algunhas veces iremos rondar ás persoas amadas, para dicirlles o amor que sentimos; só necesitamos saber que ese amor é correspondido.",
      mensajeP3:
        "Somos máis os que cremos no gran corazón que levamos dentro, e xamais imos prexulgar a diversidade, ao contrario, enorgullécenos. Somos gays, lesbianas, bisexuais, trans, interxéneros, queers, asexuais, e todos os que non se senten identificados co modelo heterosexista, moito menos co machismo que tanto dor trouxo á sociedade de antes e de agora.",

      // Lenguas
      lenguasTitle: "Linguas e Cultura",
      lenguasP1:
        "A nosa Tuna non é unha Tuna que restrinxa o seu ámbito a un só país ou territorio. Así como as linguas en que nos expresamos e/ou cantamos son todas as que poidamos chegar a aprender. Son especialmente protexidas as linguas minoritarias do estado español: Valenciano-Catalán, Euskera, Galego.",
      lenguasP2:
        "Encantaríanos poder cantar nalgunha lingua máis, axúdanos a descubrir a beleza da túa lingua nunha canción que che guste. Podemos intentalo, queremos intentalo.",
      lenguaEspanol: "Español",
      lenguaEspanolDesc: "Lingua principal de comunicación",
      lenguaEuskera: "Euskera",
      lenguaEuskeraDesc: "Maitasuna, o noso valor fundamental",
      lenguaCatalan: "Valenciano-Catalán",
      lenguaCatalanDesc: "Lingua protexida e celebrada",
      lenguaGallego: "Galego",
      lenguaGallegoDesc: "Parte da nosa riqueza cultural",
      lenguaOtras: "Outras linguas",
      lenguaOtrasDesc: "Queremos aprender máis!",

      // Calendario
      calendarioTitle: "Calendario de Eventos",
      proximosEventos: "Próximos Eventos 2024-2025",
      evento1: "Día internacional contra a homofobia, transfobia e bifobia",
      fechasImportantes: "Datas Importantes LGTBIQA+",

      // Únete
      uneteTitle: "Únete á nosa Tuna Rosa!",
      uneteP1:
        'A nosa invitación é internacional; pode asociarse toda persoa que queira cantar, tocar e aportar o seu "bo rollo" ao grupo. Unicamente estarán vetadas as persoas que intenten separar, ridiculizar, humillar ou transmitir odio.',
      uneteBtn: "Fáite socio/a/e",
      uneteP2:
        "Esperámosvos a todas/es/os os que queirades participar da nosa Tuna Rosa Lgtbiqa+; ben facéndovos socias/es/os (sen ningunha achega económica) ou ben, simplemente uníndovos a cantar onde nos atopedes.",

      // Footer
      contacto: "Contacto",
      escudoBordado: "Escudo Bordado",
      escudoP1:
        "Como conseguir o escudo bordado Tuna Rosa: encargar facer en tunarosalgtbiqaplus@gmail.com.",
      escudoP2:
        "O escudo enviarase contrareembolso segundo prezo da empresa que se vos informará no correo.",
      siguenos: "Síguenos",
      siguenosDesc: "Mantéñate ao día dos nosos eventos e actuacións",
      copyright: "2026 Tuna Rosa LGTBIQA+. Todos os dereitos reservados.",
      ubicacion: "Actuamos en toda España e máis alá",
    },

    eus: {
      // Navegación
      inicio: "Hasiera",
      valores: "Balioak",
      mensaje: "Mezua",
      lenguas: "Hizkuntzak",
      calendario: "Egutegia",
      unete: "Batu zaitez",

      // Hero
      heroTitle: "Ongi etorri Tuna Rosa LGTBIQA+era",
      heroSubtitle:
        "Musika gune inklusiboa non pertsona guztiek lekua daukaten",
      heroIntro:
        'Kaixo! Ni Isidoro naiz, "Bruja" edo "Looky" bezala ere ezagutzen naiz',
      heroP1:
        "Tuna Rosa elkarteko Koordinatzailea naiz, eta proiektu berri honen buruko ikusgarrietako bat beste gizon, emakume, trans, queer eta heterosexualitatearen eredu tradizionalekin identifikatzen ez diren pertsonekin batera.",
      heroP2:
        "Gure taldea musikaren bidezko dibertsioarentzako proposamen berria da, pertsona guztiek lekua daukaten, bertara sartzeko baldintza bakarra elkarrekiko eta gizartearekiko errespetua eta maitasuna da.",

      // Valores
      valoresTitle: "Gure Balioak",
      valoresIntro:
        "XXI. mendeko gizartearen isla izan nahi dugu, horregatik, gure ikurrean oinarrizko balio hauek agertzen dira:",
      valorRespeto: "Errespetua",
      valorRespetoDesc:
        "Gure elkarrekintza eta harremanen oinarri nagusia taldean eta kanpoan.",
      valorDiversidad: "Aniztasuna",
      valorDiversidadDesc:
        "Aniztasuna ospatzen eta baloratzen dugu bere adierazpen eta modu guztietan.",
      valorFeminismo: "Feminismoa/Berdintasuna",
      valorFeminismoDesc:
        "Genero berdintasunarekin eta matxismoaren aurkako borroka konprometituak.",
      valorVisibilidad: "Ikusgarritasuna",
      valorVisibilidadDesc:
        "Identitate eta orientazio desberdinei ahotsa eta presentzia ematea gizartean.",
      valorOrgullo: "Harrotasuna",
      valorOrgulloDesc:
        "Gara garelako harrotasuna eta gizarte justuxeago baterako gure ekarpenagatik.",
      valorAmor: "Maitasuna",
      valorAmorDesc:
        "Maitasuna indarra eraldatzailea eta gure ekintzen gidaritza printzipioa bezala.",

      // Mensaje
      mensajeTitle: "Gure Mezua",
      mensajeP1:
        "Europako ikasleen tradizio onenarekin gaur egungo musika herrikoiarekin batu nahi dugu, gure gizarte irekiarekin, konplexurik eta bazterketarik gabe. Lehen eskolatarrak (Tunak) Espainian, Portugalen XV. mendean, Holandan eta geroago Iberoamerikako herrialdeetan eta mundu osoan sortu zirenean, hauek, herri kantuen zatiak jotzen eta kantatzen zituzten zopa plater baten truke (sopaboba edo bodrioa) ostatuetan, taberneetan edo komentuetan.",
      mensajeHighlight:
        'Gaur kaletan eta tabernetan jotzen dugu berriro gizarte justuxeago baten parte sentitzeko, non denek "maitasuna" ekar dezakegun XXI. mendeko mundu honetan.',
      mensajeP2:
        "Integratu, batu, errespetatuz dibertitera datorren pertsona guztia gonbidatu nahi dugu; eta hori musikaren bidez egiten dugu, taldeko kantuetan. Batzuetan maitatutako pertsonengana joango gara, sentitzen dugun maitasuna esateko; behar duguna maitasun hori erantzuna izatea da bakarrik.",
      mensajeP3:
        "Gehiago gara barrenean daramatzagun bihotz handian sinesten dugunak, eta inoiz ez dugu aniztasuna aurreritzi egingo, aitzitik, harroturik gaude. Gay, lesbianak, bisexualak, trans, intergenero, queers, asexualak gara, eta eredu heterosexista identifikatzen ez direnak guztiak, are gutxiago lehengo eta oraingo gizarteari min hainbat ekarri dion matxismoarekin.",

      // Lenguas
      lenguasTitle: "Hizkuntzak eta Kultura",
      lenguasP1:
        "Gure Tuna ez da herrialde edo lurralde bakarrean mugatzen den Tuna bat. Gure hizkuntza edo kantatzen ditugun hizkuntzak ikasi ditzakegun guztiak dira. Espainiar estatuko hizkuntza gutxituak bereziki babestuak dira: Valentziera-Katalana, Euskara, Galegoa.",
      lenguasP2:
        "Hizkuntza gehiagotan kantatzea gustatuko litzaiguke, lagundu gaitzazu zure hizkuntzaren edertasuna gustuko duzun abesti batean aurkitzen. Saia gaitezke, saiatu nahi dugu.",
      lenguaEspanol: "Gaztelania",
      lenguaEspanolDesc: "Komunikaziorako hizkuntza nagusia",
      lenguaEuskera: "Euskara",
      lenguaEuskeraDesc: "Maitasuna, gure oinarrizko balioa",
      lenguaCatalan: "Valentziera-Katalana",
      lenguaCatalanDesc: "Babestutako eta ospatutako hizkuntza",
      lenguaGallego: "Galegoa",
      lenguaGallegoDesc: "Gure aberastasun kulturalaren zatia",
      lenguaOtras: "Beste hizkuntza batzuk",
      lenguaOtrasDesc: "Gehiago ikasi nahi dugu!",

      // Calendario
      calendarioTitle: "Gertaeren Egutegia",
      proximosEventos: "Hurrengo Gertaerak 2024-2025",
      evento1: "Homofobia, transfobia eta bifobiaren aurkako nazioarteko eguna",
      fechasImportantes: "LGTBIQA+ Data Garrantzitsuak",

      // Únete
      uneteTitle: "Batu zaitez gure Tuna Rosara!",
      uneteP1:
        'Gure gonbidapena nazioartekoa da; kantatu, jo eta bere "errollatxo ona" taldera ekarri nahi duen pertsona oro elkartu daiteke. Soilik debekatuta egongo dira banatu, barregarri, umiliatu edo gorrotoa transmititzeko saiatu diren pertsonak.',
      uneteBtn: "Egin bazkide",
      uneteP2:
        "Gure Tuna Rosa Lgtbiqa+ean parte hartu nahi duzuen guztiak itxaroten ditugu; bazkide eginik (inolako ekarpen ekonomikorik gabe) edo, besterik gabe, aurkitzen gaituzten tokian kantatzera batuz.",

      // Footer
      contacto: "Kontaktua",
      escudoBordado: "Ikur Jositakoa",
      escudoP1:
        "Nola lortu Tuna Rosaren ikur jositakoa: tunarosalgtbiqaplus@gmail.com helbidean eskatu.",
      escudoP2:
        "Ikurra kontrareembolsoz bidaliko da maileguan emailean informatuko zaizuen enpresaren prezioaren arabera.",
      siguenos: "Jarraitu gaitzazu",
      siguenosDesc: "Mantendu gure gertaera eta jardueretan eguneratuta",
      copyright: "2026 Tuna Rosa LGTBIQA+. Eskubide guztiak erreserbatuak.",
      ubicacion: "Espainia osoan eta haratago aritzen gara",
    },

    pt: {
      // Navegación
      inicio: "Início",
      valores: "Valores",
      mensaje: "Mensagem",
      lenguas: "Línguas",
      calendario: "Calendário",
      unete: "Junta-te",

      // Hero
      heroTitle: "Bem-vindos/as/es à Tuna Rosa LGTBIQA+",
      heroSubtitle:
        "Um espaço musical inclusivo onde todas as pessoas têm lugar",
      heroIntro: 'Olá! Sou Isidoro, também conhecido como "Bruja" ou "Looky"',
      heroP1:
        "Sou o Coordenador da associação Tuna Rosa, e uma das cabeças visíveis deste novo projeto junto com outros homens, mulheres, trans, queers e pessoas que não se identificam com os padrões tradicionais de heterossexualidade.",
      heroP2:
        "O nosso grupo é uma nova proposta de diversão através da música onde todas as pessoas têm lugar, o único requisito para pertencer a ele é o respeito e o carinho entre nós e para com a sociedade.",

      // Valores
      valoresTitle: "Os Nossos Valores",
      valoresIntro:
        "Queremos ser reflexo da sociedade do século XXI, por isso, no nosso escudo aparecem estes valores fundamentais:",
      valorRespeto: "Respeito",
      valorRespetoDesc:
        "Base fundamental de todas as nossas interações e relações dentro e fora do grupo.",
      valorDiversidad: "Diversidade",
      valorDiversidadDesc:
        "Celebramos e valorizamos a diversidade em todas as suas expressões e formas.",
      valorFeminismo: "Feminismo/Igualdade",
      valorFeminismoDesc:
        "Comprometidos com a igualdade de género e a luta contra o machismo.",
      valorVisibilidad: "Visibilidade",
      valorVisibilidadDesc:
        "Dar voz e presença às identidades e orientações diversas na sociedade.",
      valorOrgullo: "Orgulho",
      valorOrgulloDesc:
        "Orgulho de ser quem somos e da nossa contribuição para uma sociedade mais justa.",
      valorAmor: "Maitasuna/Amor",
      valorAmorDesc:
        "O amor como força transformadora e princípio orientador das nossas ações.",

      // Mensaje
      mensajeTitle: "A Nossa Mensagem",
      mensajeP1:
        "Queremos unir o melhor da tradição estudantil europeia com a música popular atual, com a nossa sociedade aberta, sem complexos nem exclusões. Quando se formaram as primeiras estudantinas (Tunas) em Espanha, Portugal séc.XV, na Holanda e mais tarde nos países ibero-americanos e por todo o mundo, estas, cantavam e tocavam peças populares em troca de um prato de sopa (a sopaboba ou o bodrio) em estalagens, tabernas ou conventos.",
      mensajeHighlight:
        'Hoje voltamos a tocar nas ruas e tabernas para nos sentirmos juntos parte de uma sociedade mais justa onde todos possamos contribuir com "maitasuna" para este mundo do séc. XXI.',
      mensajeP2:
        "Queremos integrar, somar, convidar a juntar-se toda a pessoa que venha divertir-se respeitando; e fazemo-lo através da música, dos cantos em grupo. Algumas vezes iremos serenatar as pessoas amadas, para lhes dizer o amor que sentimos; só precisamos de saber que esse amor é correspondido.",
      mensajeP3:
        "Somos mais os que acreditamos no grande coração que trazemos dentro, e jamais iremos julgar previamente a diversidade, pelo contrário, orgulhamo-nos dela. Somos gays, lésbicas, bissexuais, trans, intergénero, queers, assexuais, e todos os que não se sentem identificados com o modelo heterossexista, muito menos com o machismo que tanta dor trouxe à sociedade de antes e de agora.",

      // Lenguas
      lenguasTitle: "Línguas e Cultura",
      lenguasP1:
        "A nossa Tuna não é uma Tuna que restrinja o seu âmbito a um só país ou território. Assim como as línguas em que nos expressamos e/ou cantamos são todas as que consigamos aprender. São especialmente protegidas as línguas minoritárias do estado espanhol: Valenciano-Catalão, Euskera, Galego.",
      lenguasP2:
        "Adoraríamos poder cantar em mais alguma língua, ajuda-nos a descobrir a beleza da tua língua numa canção que gostes. Podemos tentar, queremos tentar.",
      lenguaEspanol: "Espanhol",
      lenguaEspanolDesc: "Língua principal de comunicação",
      lenguaEuskera: "Euskera",
      lenguaEuskeraDesc: "Maitasuna, o nosso valor fundamental",
      lenguaCatalan: "Valenciano-Catalão",
      lenguaCatalanDesc: "Língua protegida e celebrada",
      lenguaGallego: "Galego",
      lenguaGallegoDesc: "Parte da nossa riqueza cultural",
      lenguaOtras: "Outras línguas",
      lenguaOtrasDesc: "Queremos aprender mais!",

      // Calendario
      calendarioTitle: "Calendário de Eventos",
      proximosEventos: "Próximos Eventos 2024-2025",
      evento1: "Dia internacional contra a homofobia, transfobia e bifobia",
      fechasImportantes: "Datas Importantes LGTBIQA+",

      // Únete
      uneteTitle: "Junta-te à nossa Tuna Rosa!",
      uneteP1:
        'O nosso convite é internacional; pode associar-se toda a pessoa que queira cantar, tocar e contribuir com a sua "boa onda" para o grupo. Unicamente estarão vetadas as pessoas que tentem separar, ridicularizar, humilhar ou transmitir ódio.',
      uneteBtn: "Torna-te sócio/a/e",
      uneteP2:
        "Esperamos todos/as/es que queiram participar da nossa Tuna Rosa Lgtbiqa+; quer tornando-se sócios/as/es (sem qualquer contribuição económica) ou simplesmente juntando-se a cantar onde nos encontrarem.",

      // Footer
      contacto: "Contacto",
      escudoBordado: "Escudo Bordado",
      escudoP1:
        "Como obter o escudo bordado Tuna Rosa: encomendar em tunarosalgtbiqaplus@gmail.com.",
      escudoP2:
        "O escudo será enviado à cobrança segundo o preço da empresa que vos será informado no email.",
      siguenos: "Segue-nos",
      siguenosDesc: "Mantém-te a par dos nossos eventos e atuações",
      copyright: "2026 Tuna Rosa LGTBIQA+. Todos os direitos reservados.",
      ubicacion: "Atuamos em toda a Espanha e além",
    },

    en: {
      // Navegación
      inicio: "Home",
      valores: "Values",
      mensaje: "Message",
      lenguas: "Languages",
      calendario: "Calendar",
      unete: "Join Us",

      // Hero
      heroTitle: "Welcome to Tuna Rosa LGTBIQA+",
      heroSubtitle: "An inclusive musical space where everyone has a place",
      heroIntro: 'Hello! I\'m Isidoro, also known as "Bruja" or "Looky"',
      heroP1:
        "I'm the Coordinator of the Tuna Rosa association, and one of the visible heads of this new project alongside other men, women, trans, queers, and people who don't identify with traditional heterosexuality patterns.",
      heroP2:
        "Our group is a new proposal for fun through music where all people have a place, the only requirement to belong to it is respect and affection among us and towards society.",

      // Valores
      valoresTitle: "Our Values",
      valoresIntro:
        "We want to be a reflection of 21st-century society, that's why these fundamental values appear on our shield:",
      valorRespeto: "Respect",
      valorRespetoDesc:
        "Fundamental basis of all our interactions and relationships inside and outside the group.",
      valorDiversidad: "Diversity",
      valorDiversidadDesc:
        "We celebrate and value diversity in all its expressions and forms.",
      valorFeminismo: "Feminism/Equality",
      valorFeminismoDesc:
        "Committed to gender equality and the fight against sexism.",
      valorVisibilidad: "Visibility",
      valorVisibilidadDesc:
        "Giving voice and presence to diverse identities and orientations in society.",
      valorOrgullo: "Pride",
      valorOrgulloDesc:
        "Pride in being who we are and our contribution to a fairer society.",
      valorAmor: "Maitasuna/Love",
      valorAmorDesc:
        "Love as a transforming force and guiding principle of our actions.",

      // Mensaje
      mensajeTitle: "Our Message",
      mensajeP1:
        "We want to unite the best of European student tradition with current popular music, with our open society, without complexes or exclusions. When the first student groups (Tunas) were formed in Spain, Portugal 15th century, in Holland and later in Ibero-American countries and around the world, they sang and played popular pieces in exchange for a bowl of soup (sopaboba or bodrio) in inns, taverns or convents.",
      mensajeHighlight:
        'Today we return to play in the streets and taverns to feel together part of a fairer society where we can all contribute "maitasuna" to this 21st century world.',
      mensajeP2:
        "We want to integrate, add, invite everyone who comes to have fun while respecting; and we do it through music, through group singing. Sometimes we will go serenade loved ones, to tell them the love we feel; we only need to know that this love is reciprocated.",
      mensajeP3:
        "There are more of us who believe in the great heart we carry inside, and we will never prejudge diversity, on the contrary, we are proud of it. We are gay, lesbian, bisexual, trans, intergender, queers, asexual, and all those who don't identify with the heterosexist model, much less with the sexism that has brought so much pain to society before and now.",

      // Lenguas
      lenguasTitle: "Languages and Culture",
      lenguasP1:
        "Our Tuna is not a Tuna that restricts its scope to a single country or territory. The languages in which we express ourselves and/or sing are all those we can learn. Minority languages of the Spanish state are especially protected: Valencian-Catalan, Basque, Galician.",
      lenguasP2:
        "We would love to sing in more languages, help us discover the beauty of your language in a song you like. We can try, we want to try.",
      lenguaEspanol: "Spanish",
      lenguaEspanolDesc: "Main communication language",
      lenguaEuskera: "Basque",
      lenguaEuskeraDesc: "Maitasuna, our fundamental value",
      lenguaCatalan: "Valencian-Catalan",
      lenguaCatalanDesc: "Protected and celebrated language",
      lenguaGallego: "Galician",
      lenguaGallegoDesc: "Part of our cultural richness",
      lenguaOtras: "Other languages",
      lenguaOtrasDesc: "We want to learn more!",

      // Calendario
      calendarioTitle: "Events Calendar",
      proximosEventos: "Upcoming Events 2024-2025",
      evento1: "International Day Against Homophobia, Transphobia and Biphobia",
      fechasImportantes: "Important LGTBIQA+ Dates",

      // Únete
      uneteTitle: "Join our Tuna Rosa!",
      uneteP1:
        'Our invitation is international; any person who wants to sing, play and contribute their "good vibes" to the group can join. Only people who try to separate, ridicule, humiliate or transmit hatred will be banned.',
      uneteBtn: "Become a member",
      uneteP2:
        "We await all of you who want to participate in our Tuna Rosa Lgtbiqa+; either by becoming members (without any economic contribution) or simply by joining us to sing wherever you find us.",

      // Footer
      contacto: "Contact",
      escudoBordado: "Embroidered Shield",
      escudoP1:
        "How to get the Tuna Rosa embroidered shield: order at tunarosalgtbiqaplus@gmail.com.",
      escudoP2:
        "The shield will be sent cash on delivery according to the price of the company that will be informed in the email.",
      siguenos: "Follow Us",
      siguenosDesc: "Stay up to date with our events and performances",
      copyright: "2026 Tuna Rosa LGTBIQA+. All rights reserved.",
      ubicacion: "We perform throughout Spain and beyond",
    },

    fr: {
      // Navegación
      inicio: "Accueil",
      valores: "Valeurs",
      mensaje: "Message",
      lenguas: "Langues",
      calendario: "Calendrier",
      unete: "Rejoins-nous",

      // Hero
      heroTitle: "Bienvenue à la Tuna Rosa LGTBIQA+",
      heroSubtitle:
        "Un espace musical inclusif où toutes les personnes ont leur place",
      heroIntro:
        'Bonjour ! Je suis Isidoro, aussi connu comme "Bruja" ou "Looky"',
      heroP1:
        "Je suis le Coordinateur de l'association Tuna Rosa, et l'une des têtes visibles de ce nouveau projet avec d'autres hommes, femmes, trans, queers et personnes qui ne s'identifient pas aux modèles traditionnels d'hétérosexualité.",
      heroP2:
        "Notre groupe est une nouvelle proposition de divertissement à travers la musique où toutes les personnes ont leur place, la seule exigence pour en faire partie est le respect et l'affection entre nous et envers la société.",

      // Valores
      valoresTitle: "Nos Valeurs",
      valoresIntro:
        "Nous voulons être le reflet de la société du XXIe siècle, c'est pourquoi ces valeurs fondamentales apparaissent sur notre blason :",
      valorRespeto: "Respect",
      valorRespetoDesc:
        "Base fondamentale de toutes nos interactions et relations à l'intérieur et à l'extérieur du groupe.",
      valorDiversidad: "Diversité",
      valorDiversidadDesc:
        "Nous célébrons et valorisons la diversité dans toutes ses expressions et formes.",
      valorFeminismo: "Féminisme/Égalité",
      valorFeminismoDesc:
        "Engagés pour l'égalité des genres et la lutte contre le sexisme.",
      valorVisibilidad: "Visibilité",
      valorVisibilidadDesc:
        "Donner voix et présence aux identités et orientations diverses dans la société.",
      valorOrgullo: "Fierté",
      valorOrgulloDesc:
        "Fierté d'être qui nous sommes et de notre contribution à une société plus juste.",
      valorAmor: "Maitasuna/Amour",
      valorAmorDesc:
        "L'amour comme force transformatrice et principe guide de nos actions.",

      // Mensaje
      mensajeTitle: "Notre Message",
      mensajeP1:
        "Nous voulons unir le meilleur de la tradition étudiante européenne avec la musique populaire actuelle, avec notre société ouverte, sans complexes ni exclusions. Quand les premières estudiantinas (Tunas) se sont formées en Espagne, Portugal XVe siècle, en Hollande et plus tard dans les pays ibéro-américains et partout dans le monde, elles chantaient et jouaient des morceaux populaires en échange d'une assiette de soupe (la sopaboba ou le bodrio) dans des auberges, tavernes ou couvents.",
      mensajeHighlight:
        "Aujourd'hui nous revenons jouer dans les rues et tavernes pour nous sentir ensemble partie d'une société plus juste où nous pouvons tous apporter \"maitasuna\" à ce monde du XXIe siècle.",
      mensajeP2:
        "Nous voulons intégrer, ajouter, inviter toute personne qui vient s'amuser en respectant ; et nous le faisons à travers la musique, les chants en groupe. Parfois nous irons sérénade les personnes aimées, pour leur dire l'amour que nous ressentons ; nous avons juste besoin de savoir que cet amour est partagé.",
      mensajeP3:
        "Nous sommes plus nombreux à croire dans le grand cœur que nous portons en nous, et nous ne jugerons jamais la diversité, au contraire, nous en sommes fiers. Nous sommes gays, lesbiennes, bisexuels, trans, intergenres, queers, asexuels, et tous ceux qui ne s'identifient pas au modèle hétérosexiste, encore moins au sexisme qui a apporté tant de douleur à la société d'avant et d'aujourd'hui.",

      // Lenguas
      lenguasTitle: "Langues et Culture",
      lenguasP1:
        "Notre Tuna n'est pas une Tuna qui restreint son champ d'action à un seul pays ou territoire. Les langues dans lesquelles nous nous exprimons et/ou chantons sont toutes celles que nous pouvons apprendre. Les langues minoritaires de l'État espagnol sont particulièrement protégées : Valencien-Catalan, Basque, Galicien.",
      lenguasP2:
        "Nous aimerions pouvoir chanter dans plus de langues, aide-nous à découvrir la beauté de ta langue dans une chanson que tu aimes. Nous pouvons essayer, nous voulons essayer.",
      lenguaEspanol: "Espagnol",
      lenguaEspanolDesc: "Langue principale de communication",
      lenguaEuskera: "Basque",
      lenguaEuskeraDesc: "Maitasuna, notre valeur fondamentale",
      lenguaCatalan: "Valencien-Catalan",
      lenguaCatalanDesc: "Langue protégée et célébrée",
      lenguaGallego: "Galicien",
      lenguaGallegoDesc: "Partie de notre richesse culturelle",
      lenguaOtras: "Autres langues",
      lenguaOtrasDesc: "Nous voulons en apprendre plus !",

      // Calendario
      calendarioTitle: "Calendrier des Événements",
      proximosEventos: "Prochains Événements 2024-2025",
      evento1:
        "Journée internationale contre l'homophobie, la transphobie et la biphobie",
      fechasImportantes: "Dates Importantes LGTBIQA+",

      // Únete
      uneteTitle: "Rejoins notre Tuna Rosa !",
      uneteP1:
        'Notre invitation est internationale ; toute personne qui veut chanter, jouer et apporter ses "bonnes vibes" au groupe peut s\'associer. Seules seront exclues les personnes qui tentent de séparer, ridiculiser, humilier ou transmettre la haine.',
      uneteBtn: "Deviens membre",
      uneteP2:
        "Nous attendons tous ceux qui veulent participer à notre Tuna Rosa Lgtbiqa+ ; soit en devenant membres (sans aucune contribution économique) ou simplement en nous rejoignant pour chanter où vous nous trouvez.",

      // Footer
      contacto: "Contact",
      escudoBordado: "Blason Brodé",
      escudoP1:
        "Comment obtenir le blason brodé Tuna Rosa : commander à tunarosalgtbiqaplus@gmail.com.",
      escudoP2:
        "Le blason sera envoyé contre remboursement selon le prix de l'entreprise qui vous sera informé dans l'email.",
      siguenos: "Suivez-nous",
      siguenosDesc: "Restez à jour de nos événements et performances",
      copyright: "2026 Tuna Rosa LGTBIQA+. Tous droits réservés.",
      ubicacion: "Nous jouons dans toute l'Espagne et au-delà",
    },
  };

  // Obtener idioma guardado o usar español por defecto
  let currentLang = localStorage.getItem("tunaRosaLang") || "es";

  // Elementos del DOM
  const langBtn = document.getElementById("langBtn");
  const langDropdown = document.getElementById("langDropdown");

  // Inicializar
  if (langBtn && langDropdown) {
    // Aplicar idioma guardado al cargar
    changeLanguage(currentLang);

    // Actualizar botón con idioma actual
    updateLangButton(currentLang);

    // Toggle dropdown
    langBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      langDropdown.classList.toggle("show");
    });

    // Cerrar dropdown al hacer clic fuera
    document.addEventListener("click", function () {
      langDropdown.classList.remove("show");
    });

    // Cambiar idioma al hacer clic en opción
    document.querySelectorAll(".lang-dropdown a").forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const lang = this.getAttribute("data-lang");
        changeLanguage(lang);
        updateLangButton(lang);
        langDropdown.classList.remove("show");

        // Guardar preferencia
        localStorage.setItem("tunaRosaLang", lang);
      });
    });
  }

  function updateLangButton(lang) {
    const langNames = {
      es: "ES",
      cat: "CAT",
      gal: "GAL",
      eus: "EUS",
      pt: "PT",
      en: "EN",
      fr: "FR",
    };

    if (langBtn) {
      langBtn.innerHTML = `<i class="fas fa-globe"></i> ${
        langNames[lang] || "ES"
      }`;
    }
  }

  function changeLanguage(lang) {
    if (!translations[lang]) {
      console.warn(`Idioma ${lang} no encontrado, usando español`);
      lang = "es";
    }

    const t = translations[lang];
    currentLang = lang;

    // Actualizar atributo lang del HTML
    document.documentElement.lang = lang;

    // Actualizar todos los elementos con data-i18n
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (t[key]) {
        element.textContent = t[key];
      }
    });

    // Actualizar elementos con data-i18n-html (para contenido HTML)
    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const key = element.getAttribute("data-i18n-html");
      if (t[key]) {
        element.innerHTML = t[key];
      }
    });
  }

  // Exportar función para uso externo si es necesario
  window.tunaRosaChangeLang = changeLanguage;
});
