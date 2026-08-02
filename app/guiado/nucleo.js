/* Núcleo de cálculo de Soy — COPIA EXACTA extraída de app/index.html.
   Generado por scratchpad/extract.py para que el prototipo guiado entregue
   resultados idénticos a la app actual sin modificarla. Si la entrada guiada
   se adopta, este archivo debe pasar a ser la única fuente y app/index.html
   debe importarlo en vez de mantener su propia copia. */

const pad = (value) => String(value).padStart(2, "0");
const mod = (value, base) => ((value % base) + base) % base;


const LIFE = {
  1: { key: "inicio", meaning: "liderazgo, independencia e impulso creador", gift: "Abrir camino", giftCopy: "Tu recurso aparece cuando una situación necesita dirección y una primera decisión.", shadow: "No hacerlo todo solo", shadowCopy: "El impulso de liderar puede aislarte o convertir velocidad en impaciencia.", question: "¿Dónde necesitas iniciar y dónde te conviene pedir compañía?" },
  2: { key: "vínculo", meaning: "cooperación, sensibilidad y diplomacia", gift: "Leer el vínculo", giftCopy: "Puedes notar matices y construir acuerdos donde otros solo ven posiciones.", shadow: "No desaparecer en el otro", shadowCopy: "La sensibilidad puede convertirse en duda, complacencia o espera excesiva.", question: "¿Qué acuerdo necesita escucha y qué decisión sigue siendo tuya?" },
  3: { key: "expresión", meaning: "expresión, alegría y creatividad", gift: "Dar forma a una idea", giftCopy: "Tu recurso crece al comunicar, crear y levantar energía compartida.", shadow: "Elegir un foco", shadowCopy: "La abundancia de ideas puede dispersar la atención o dejar cosas a medias.", question: "¿Qué merece ser expresado y qué ruido puedes dejar fuera?" },
  4: { key: "estructura", meaning: "orden, trabajo sostenido y construcción", gift: "Sostener el proceso", giftCopy: "Tu recurso está en crear método, límites y continuidad para volver algo real.", shadow: "Dejar entrar el cambio", shadowCopy: "La estructura puede endurecerse y convertir seguridad en rigidez o exceso de deber.", question: "¿Qué necesita método y qué estructura ya cumplió su función?" },
  5: { key: "libertad", meaning: "libertad, cambio y exploración", gift: "Mover lo estancado", giftCopy: "Tu capacidad de adaptación abre opciones cuando el camino conocido se queda corto.", shadow: "Quedarte lo suficiente", shadowCopy: "El movimiento constante puede volverse evasión, ansiedad o rechazo al compromiso.", question: "¿Qué cambio te expande y cuál solo evita una incomodidad?" },
  6: { key: "armonía", meaning: "cuidado, responsabilidad y armonía", gift: "Cuidar con criterio", giftCopy: "Tu recurso está en hacer habitable un espacio, un vínculo o una responsabilidad.", shadow: "No cargar de más", shadowCopy: "Cuidar puede convertirse en control, idealización o agotamiento silencioso.", question: "¿Qué sí te corresponde cuidar y qué necesita volver a su dueño?" },
  7: { key: "búsqueda", meaning: "introspección, estudio y búsqueda espiritual", gift: "Ir al fondo", giftCopy: "Tu recurso aparece al investigar, observar patrones y tolerar preguntas abiertas.", shadow: "Volver al mundo", shadowCopy: "La profundidad puede convertirse en aislamiento, desconfianza o análisis sin acción.", question: "¿Qué merece más estudio y qué ya sabes suficiente para probar?" },
  8: { key: "poder", meaning: "estrategia, recursos y realización", gift: "Mover recursos", giftCopy: "Tu recurso está en organizar poder, dinero y decisiones hacia un resultado concreto.", shadow: "Aflojar el control", shadowCopy: "La ambición puede endurecer el trato o confundir logro con valor personal.", question: "¿Qué resultado importa y qué costo no estás dispuesto a normalizar?" },
  9: { key: "cierre", meaning: "compasión, cierre de ciclos y visión amplia", gift: "Ver el cuadro completo", giftCopy: "Tu recurso aparece al integrar experiencia, comprender matices y ayudar a cerrar.", shadow: "Soltar sin sacrificarte", shadowCopy: "La amplitud puede convertirse en melancolía, rescate o dificultad para poner final.", question: "¿Qué necesita una despedida clara para dejar espacio a lo nuevo?" },
  11: { key: "intuición maestra", meaning: "inspiración y sensibilidad intensa", gift: "Traducir sensibilidad", giftCopy: "Tu recurso está en captar señales sutiles y convertirlas en una visión comunicable.", shadow: "Regular la intensidad", shadowCopy: "La apertura puede sentirse como nerviosismo, sobrecarga o idealismo doloroso.", question: "¿Qué intuición merece una prueba concreta antes de convertirse en certeza?" },
  22: { key: "constructor maestro", meaning: "visión práctica y construcción a gran escala", gift: "Convertir visión en obra", giftCopy: "Tu recurso está en bajar una ambición grande a sistemas, etapas y resultados sostenibles.", shadow: "No exigir perfección", shadowCopy: "La escala puede sentirse como presión, miedo o control excesivo de cada detalle.", question: "¿Cuál es el siguiente bloque real, no la obra completa?" },
  33: { key: "servicio maestro", meaning: "guía, servicio y compasión madura", gift: "Acompañar sin imponer", giftCopy: "Tu recurso está en sostener aprendizaje y cuidado con una mirada amplia.", shadow: "Cuidar tus límites", shadowCopy: "El servicio puede volverse salvacionismo, agotamiento o amor sin borde.", question: "¿Cómo puedes acompañar sin hacerte responsable del camino ajeno?" }
};


const SOY_FACTORS = {
  action:{label:"Acción e iniciativa",thesis:"abrir camino, decidir y dar movimiento",practice:"elige un frente y da un primer paso visible",analysis:"La iniciativa aparece como tu recurso más consistente: tiendes a arrancar antes de que el mapa esté completo, y eso destraba lo que para otros se queda en idea. Bien usada se ve como decisión y dirección; forzada, como impulsos que deciden por cansancio o por urgencia ajena. La pregunta útil no es si actuar, sino qué merece tu arranque.",keywords:["acción","iniciativa","coraje","impulso","liderazgo","voluntad","decisión","dirección","vitalidad","visibilidad","activo","exterior","abrir camino","abrir caminos"]},
  structure:{label:"Estructura y logro",thesis:"construir con método, criterio y continuidad",practice:"define una regla simple que puedas sostener esta semana",analysis:"Lo tuyo es dar forma: convertir intenciones en método, y método en resultados que se sostienen. Esa constancia es la que otros notan cuando algo tuyo simplemente funciona; su exceso es rigidez, o seguir sosteniendo estructuras que ya cumplieron. Vale la pena observar qué estás construyendo por convicción y qué por inercia.",keywords:["estructura","orden","disciplina","constancia","estabilidad","trabajo","construcción","método","estrategia","precisión","foco","forma concreta","realización","recursos"]},
  link:{label:"Vínculo y armonía",thesis:"leer vínculos, cooperar y construir acuerdos",practice:"vuelve explícito un acuerdo que hoy depende de supuestos",analysis:"Tu señal dominante es relacional: lees el clima entre personas antes de que se diga en voz alta, y tiendes a construir puentes donde otros ven bandos. Esa sensibilidad crea acuerdos que duran; su sombra es ceder tu posición para conservar la armonía. La pregunta útil: ¿qué acuerdo necesita tu voz, no solo tu mediación?",keywords:["vínculo","cooperación","armonía","belleza","diplomacia","afecto","acuerdos","placer","carisma social"]},
  care:{label:"Cuidado y servicio",thesis:"sostener, acompañar y hacer algo útil para otros",practice:"separa qué cuidado te corresponde y cuál debes devolver",analysis:"Lo que se repite en ti es el sostén: estar disponible, resolver lo concreto y hacer que otros puedan apoyarse. Es un recurso silencioso que rara vez pide crédito; su desgaste aparece cuando cuidar reemplaza tus propios frentes. Observa dónde tu ayuda construye autonomía y dónde solo acumula dependencia.",keywords:["cuidado","servicio","protección","acompañar","guía","lealtad","responsabilidad"]},
  intuition:{label:"Intuición y sensibilidad",thesis:"observar lo interno antes de convertirlo en certeza",practice:"anota la intuición y busca una evidencia que pueda corregirla",analysis:"Tu señal más repetida es interior: percibes matices, estados y trasfondos antes de poder explicarlos. Esa lectura fina orienta bien cuando le das tiempo; se vuelve ruido cuando la conviertes en certeza inmediata o la usas para anticipar rechazos. El trabajo está en distinguir percepción de interpretación.",keywords:["intuición","sensibilidad","emoción","memoria","compasión","misterio","introspección","percepción"]},
  mind:{label:"Mente y comunicación",thesis:"analizar, comprender y comunicar con claridad",practice:"explica la idea en una frase y comprueba qué entiende la otra persona",analysis:"Converge en ti la claridad: entender rápido, ordenar ideas y traducirlas para que otros las usen. Ese filo mental abre puertas; su exceso es analizar en lugar de decidir, o ganar la discusión y perder la conversación. Observa qué idea tuya necesita menos pulido y más publicación.",keywords:["mente","comunicación","ideas","intercambio","curiosidad","aprendizaje","estudio","análisis","discernimiento","precisión"]},
  expansion:{label:"Expansión y visión",thesis:"ampliar perspectiva, buscar sentido y mirar más lejos",practice:"abre una opción nueva sin comprometerte todavía con ella",analysis:"Tu constante es el horizonte: buscar sentido, ampliar el marco y detectar la versión más grande de cada situación. Esa visión contagia dirección; su riesgo es vivir en el siguiente paso y desatender el actual. La pregunta útil: ¿qué parte de tu visión ya puede aterrizar esta semana?",keywords:["expansión","búsqueda","visión","sentido","optimismo","confianza","originalidad","amplitud"]},
  creativity:{label:"Creatividad y expresión",thesis:"dar forma visible a una idea propia",practice:"haz una versión compartible antes de seguir perfeccionando",analysis:"Lo que insiste en ti es la expresión: las ideas te piden forma visible, con sello propio. Cuando le das salida, ordena el resto de tu energía; cuando la pospones, se filtra como inquietud o dispersión. No es un lujo decorativo: observa qué pieza tuya está esperando ser mostrada, aunque no esté perfecta.",keywords:["creatividad","expresión","imaginación","alegría","inspiración","generosidad","presencia","crear","creador","manifestación"]},
  transformation:{label:"Transformación y cierre",thesis:"leer los ciclos, cerrar y renovar",practice:"termina o suelta una cosa concreta antes de abrir la siguiente",analysis:"Tu patrón dominante es el ciclo: detectas cuándo algo ya dio lo que tenía que dar, y tienes capacidad de soltarlo y reconstituirte. Eso te hace fuerte en crisis y transiciones; su sombra es cortar de más, o cerrar por dentro sin avisar. Vale observar qué cierre está pendiente y qué merece, en cambio, una segunda temporada.",keywords:["transformación","cierre","ciclos","renovación","limpieza","soltar","renacimiento","revelación","liberación","revisión","integración","cerrar ciclos"]},
  freedom:{label:"Libertad y cambio",thesis:"adaptarte, explorar y cambiar de rumbo sin perder dirección",practice:"cambia una condición del camino sin abandonar todavía el objetivo",analysis:"Tu señal más consistente es el movimiento: te adaptas rápido, exploras sin miedo y detectas cuándo un plan dejó de tener sentido. Esa flexibilidad es ventaja en entornos que cambian; su exceso es cambiar de rumbo justo antes de cosechar. La pregunta útil: ¿qué necesita de ti permanencia esta vez, no otra salida?",keywords:["libertad","cambio","exploración","adaptación","adaptar","independencia","movimiento","camino abierto","autonomía"]}
};


const SIGNS = [
  ["Capricornio", "Tierra", "Cardinal", [12,22], [1,19], ["disciplina", "ambición", "estructura"]],
  ["Acuario", "Aire", "Fijo", [1,20], [2,18], ["originalidad", "visión", "independencia"]],
  ["Piscis", "Agua", "Mutable", [2,19], [3,20], ["intuición", "sensibilidad", "imaginación"]],
  ["Aries", "Fuego", "Cardinal", [3,21], [4,19], ["iniciativa", "coraje", "energía"]],
  ["Tauro", "Tierra", "Fijo", [4,20], [5,20], ["constancia", "placer", "estabilidad"]],
  ["Géminis", "Aire", "Mutable", [5,21], [6,20], ["curiosidad", "comunicación", "movimiento"]],
  ["Cáncer", "Agua", "Cardinal", [6,21], [7,22], ["cuidado", "memoria", "emoción"]],
  ["Leo", "Fuego", "Fijo", [7,23], [8,22], ["creatividad", "presencia", "generosidad"]],
  ["Virgo", "Tierra", "Mutable", [8,23], [9,22], ["precisión", "servicio", "análisis"]],
  ["Libra", "Aire", "Cardinal", [9,23], [10,22], ["armonía", "vínculo", "belleza"]],
  ["Escorpio", "Agua", "Fijo", [10,23], [11,21], ["intensidad", "transformación", "profundidad"]],
  ["Sagitario", "Fuego", "Mutable", [11,22], [12,21], ["expansión", "búsqueda", "optimismo"]]
];

const ELEMENT_LANGUAGE = {
  Fuego:"acción, impulso y decisión", Tierra:"prueba, estabilidad y forma concreta",
  Aire:"ideas, conversación y perspectiva", Agua:"emoción, intuición y elaboración"
};

const MODALITY_LANGUAGE = {
  Cardinal:"iniciar y marcar dirección", Fijo:"sostener y consolidar", Mutable:"adaptar y cerrar ciclos"
};


const ARCANA = {
  1:["El Mago","voluntad, foco y manifestación"],2:["La Sacerdotisa","intuición, misterio y escucha interna"],3:["La Emperatriz","fertilidad creativa, placer y abundancia"],4:["El Emperador","estructura, autoridad y orden"],5:["El Hierofante","tradición, aprendizaje y guía"],6:["Los Enamorados","elección, vínculo y coherencia"],7:["El Carro","dirección, avance y voluntad"],8:["La Fuerza","coraje sereno y autocontrol"],9:["El Ermitaño","sabiduría, retiro y búsqueda interior"],10:["La Rueda","ciclos, cambio y oportunidad"],11:["La Justicia","equilibrio, verdad y consecuencias"],12:["El Colgado","pausa, entrega y otra perspectiva"],13:["La Muerte","transformación, cierre y renacimiento"],14:["La Templanza","paciencia e integración"],15:["El Diablo","deseo, sombra y poder personal"],16:["La Torre","ruptura, revelación y liberación"],17:["La Estrella","esperanza, inspiración y reparación"],18:["La Luna","inconsciente, sensibilidad y símbolos"],19:["El Sol","vitalidad, claridad y confianza"],20:["El Juicio","llamado, despertar y revisión"],21:["El Mundo","integración, logro y cierre mayor"],22:["El Loco","libertad, salto y camino abierto"]
};


const ANIMALS = ["Rata","Buey","Tigre","Conejo","Dragón","Serpiente","Caballo","Cabra","Mono","Gallo","Perro","Cerdo"];

const ELEMENTS = ["Madera","Fuego","Tierra","Metal","Agua"];

const CHINESE_ELEMENT_TONE = {Madera:"crecimiento",Fuego:"acción",Tierra:"estabilidad",Metal:"estructura",Agua:"adaptación"};

const POLARITY_TONE = {Yang:"un movimiento más activo y exterior",Yin:"un movimiento más receptivo y gradual"};

const TRINES = [["Rata","Dragón","Mono"],["Buey","Serpiente","Gallo"],["Tigre","Caballo","Perro"],["Conejo","Cabra","Cerdo"]];

const TRINE_TONES = [
  "estrategia, carisma social y capacidad de abrir caminos",
  "disciplina, precisión y paciencia para construir resultados",
  "acción, lealtad, idealismo y movimiento directo",
  "sensibilidad, cuidado, belleza y cooperación afectiva"
];

const CNY = {2000:[2,5],2001:[1,24],2002:[2,12],2003:[2,1],2004:[1,22],2005:[2,9],2006:[1,29],2007:[2,18],2008:[2,7],2009:[1,26],2010:[2,14],2011:[2,3],2012:[1,23],2013:[2,10],2014:[1,31],2015:[2,19],2016:[2,8],2017:[1,28],2018:[2,16],2019:[2,5],2020:[1,25],2021:[2,12],2022:[2,1],2023:[1,22],2024:[2,10],2025:[1,29],2026:[2,17],2027:[2,6],2028:[1,26],2029:[2,13],2030:[2,3],2031:[1,23],2032:[2,11],2033:[1,31],2034:[2,19],2035:[2,8],2036:[1,28],2037:[2,15],2038:[2,4],2039:[1,24],2040:[2,12],2041:[2,1],2042:[1,22],2043:[2,10],2044:[1,30]};

function sumDigits(value) { return String(value).replace(/\D/g, "").split("").reduce((sum, digit) => sum + Number(digit), 0); }

function reduce(value, preserveMasters = false) {
  const steps = [value];
  while (value > 9 && !(preserveMasters && [11,22,33].includes(value))) { value = sumDigits(value); steps.push(value); }
  return { value, steps };
}

function traceDigits(source, preserveMasters = false) {
  const digits = String(source).replace(/\D/g, "").split("").map(Number);
  const initial = digits.reduce((sum, digit) => sum + digit, 0);
  const reduced = reduce(initial, preserveMasters);
  const steps = [`${digits.join(" + ")} = ${initial}`];
  let previous = initial;
  reduced.steps.slice(1).forEach(next => { steps.push(`${String(previous).split("").join(" + ")} = ${next}`); previous = next; });
  return { number: reduced.value, expression: steps.join(" → ") };
}

function western(date) {
  const md = (date.getUTCMonth()+1) * 100 + date.getUTCDate();
  return SIGNS.find(sign => { const start = sign[3][0]*100+sign[3][1], end = sign[4][0]*100+sign[4][1]; return start <= end ? md >= start && md <= end : md >= start || md <= end; });
}

function chinese(date) {
  const year = date.getUTCFullYear();
  const md = (date.getUTCMonth()+1)*100 + date.getUTCDate();
  const boundary = CNY[year];
  const boundaryLabel = boundary ? `${pad(boundary[1])}/${pad(boundary[0])}/${year}` : null;
  let effective = year, approximate = false, note = "Fecha fuera de la ventana crítica; el año se resuelve sin tabla.";
  if (md < 121) {
    effective = year - 1;
    note = boundaryLabel ? `Año Nuevo chino ${year}: ${pad(boundary[1])}/${pad(boundary[0])}.` : `El Año Nuevo chino de ${year} cae después del 20 de enero.`;
  }
  else if (md <= 220) {
    if (boundary) { effective = md >= boundary[0]*100+boundary[1] ? year : year-1; note = `Año Nuevo chino ${year}: ${pad(boundary[1])}/${pad(boundary[0])}.`; }
    else { approximate = true; note = "Fecha entre 21 de enero y 20 de febrero fuera de la tabla disponible; se usa el año gregoriano como aproximación."; }
  }
  return { effective, animal:ANIMALS[mod(effective-4,12)], element:ELEMENTS[Math.floor(mod(effective-4,10)/2)], polarity:effective%2===0?"Yang":"Yin", approximate, note, shifted:effective!==year, boundaryLabel };
}

function chineseAnimalTone(animal) {
  const trineIndex=TRINES.findIndex(group=>group.includes(animal));
  return trineIndex>=0?TRINE_TONES[trineIndex]:"sin tema de trino disponible";
}


function normalizeSignalText(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function analyzeSoyConvergence(signals) {
  const buckets={};
  signals.forEach(signal=>{
    const text=normalizeSignalText(signal.detail),tokens=new Set(text.match(/\b[\w]+\b/g)||[]);
    const matches=Object.entries(SOY_FACTORS).map(([key,factor])=>{
      const score=factor.keywords.reduce((total,keyword)=>{
        const normalized=normalizeSignalText(keyword);
        return total+(normalized.includes(" ")?Number(text.includes(normalized)):Number(tokens.has(normalized)));
      },0);
      return {key,score};
    }).filter(match=>match.score>0).sort((a,b)=>b.score-a.score).slice(0,3);
    const total=matches.reduce((sum,match)=>sum+match.score,0)||1;
    matches.forEach(match=>{
      const bucket=buckets[match.key]||(buckets[match.key]={key:match.key,score:0,sources:[]});
      bucket.score+=signal.weight*match.score/total;
      bucket.sources.push(signal);
    });
  });
  return Object.values(buckets).map(bucket=>({...bucket,sourceCount:new Set(bucket.sources.map(source=>source.key)).size}))
    .sort((a,b)=>b.score-a.score||b.sourceCount-a.sourceCount);
}

function joinSpanish(items) {
  if(items.length<2)return items[0]||"";
  return `${items.slice(0,-1).join(", ")} y ${items[items.length-1]}`;
}

function buildSoySignals(life,profile,sun,chin,tarot) {
  return [
    {key:"life",label:`Camino de vida ${life.number}`,weight:3,detail:`${profile.meaning}; ${profile.gift}; ${profile.giftCopy}`},
    {key:"western",label:sun[0],weight:2.5,detail:`${sun[0]} ${sun[1]} ${sun[2]}; ${sun[5].join(", ")}; ${ELEMENT_LANGUAGE[sun[1]]}; ${MODALITY_LANGUAGE[sun[2]]}`},
    {key:"chinese",label:`${chin.animal} de ${chin.element} ${chin.polarity}`,weight:1.5,detail:`${chineseAnimalTone(chin.animal)}; ${CHINESE_ELEMENT_TONE[chin.element]}; ${POLARITY_TONE[chin.polarity]}`},
    {key:"tarot",label:tarot[0],weight:2.5,detail:tarot[1]}
  ];
}

function buildSoySynthesis(life,profile,sun,chin,tarot,signals,factors) {
  const main=factors.find(factor=>factor.sourceCount>=2);
  if(!main)return {label:"Sin convergencia clara",title:"Señales distintas",sources:"Las cuatro fuentes apuntan a temas distintos.",copy:"Las cuatro tradiciones apuntan a temas diferentes. No forzamos una conclusión común: revisa cada componente por separado."};
  const definition=SOY_FACTORS[main.key],mainKeys=new Set(main.sources.map(source=>source.key));
  const modifiers=[];
  if(!mainKeys.has("western"))modifiers.push(`La condición que la acompaña: hacerlo con ${sun[5][0]} y ${sun[5][1]}.`);
  if(!mainKeys.has("tarot"))modifiers.push(`Como matiz aparece ${tarot[1]}.`);
  if(!mainKeys.has("life")&&modifiers.length<2)modifiers.push(`El recurso de fondo apunta a ${profile.gift.toLowerCase()}.`);
  if(!mainKeys.has("chinese")&&modifiers.length<2)modifiers.push(`Se templa con ${CHINESE_ELEMENT_TONE[chin.element]}.`);
  return {
    label:`Convergencia · ${main.sourceCount} de ${signals.length} señales`,
    title:definition.label,
    sources:`Se repite en ${joinSpanish([...new Map(main.sources.map(source=>[source.key,source])).values()].map(source=>source.label))}.`,
    copy:`${definition.analysis} En concreto: ${definition.practice}. ${modifiers.slice(0,1).join(" ")}`
  };
}


function parseDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

function buildSoy(birth) {
  const source = `${pad(birth.getUTCDate())}${pad(birth.getUTCMonth() + 1)}${birth.getUTCFullYear()}`;
  const life = traceDigits(source, true), profile = LIFE[life.number];
  const sun = western(birth), chin = chinese(birth);
  let tarotNumber = sumDigits(source);
  while (tarotNumber > 22) tarotNumber = sumDigits(tarotNumber);
  const tarot = ARCANA[tarotNumber];
  const signals = buildSoySignals(life, profile, sun, chin, tarot);
  const factors = analyzeSoyConvergence(signals);
  const synthesis = buildSoySynthesis(life, profile, sun, chin, tarot, signals, factors);
  return { birth, life, profile, sun, chin, tarot, tarotNumber, signals, factors, synthesis };
}
