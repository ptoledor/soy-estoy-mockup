# Entrada guiada — por qué existe y en qué estado está

Prototipo paralelo en `app/guiado/`. **No reemplaza nada**: la app actual
(`app/index.html`) sigue intacta y es la que está en producción. Esto es una
entrada alternativa para probar una hipótesis.

---

## El feedback que la originó

De mostrar el mockup a gente cercana (agosto 2026):

1. Los vieron **scrollear muy rápido** buscando información.
2. **No entendían de qué trataba la app.**
3. **No entendieron la distinción Soy / Estoy.**
4. Encontraron la propuesta **muy interesante**.
5. Estarían más cómodos con una **entrada tipo tutorial** que no entregue toda
   la info de una, sino que se vaya descubriendo.

Los puntos 1-3 son el mismo problema: la app abre mostrándolo todo junto, así
que nadie sabe dónde mirar primero. El punto 4 dice que el contenido no es el
problema. El punto 5 es la hipótesis a probar.

### Decisiones de alcance

- **En la app, no en la landing.** La landing vende; el problema es de la
  primera corrida del producto.
- **Prototipo aparte, no reemplazo.** Permite comparar contra la app actual
  antes de comprometerse.

---

## Qué es

Nueve pasos, una idea por pantalla, cada paso cabe sin scroll en teléfono
(390×844 es el viewport de referencia):

| # | Paso | Qué hace |
|---|------|----------|
| 1 | intro | Define Soy (no cambia) vs Estoy (cambia) antes de pedir nada |
| 2 | fecha | Pide fecha de nacimiento; bloquea el avance si no es válida |
| 3-6 | numerología · occidental · chino · tarot | Una tradición por pantalla, con la cuenta a la vista |
| 7 | convergencia | El pago: qué se repitió entre las cuatro |
| 8 | aterrizaje | Recurso, tensión, pregunta |
| 9 | cierre | Explica que el Estoy queda pendiente; enlaza a la app con los datos ya cargados |

`nucleo.js` es una **copia exacta** de la lógica de cálculo de
`app/index.html`, para que los resultados sean idénticos.

---

## Estado y deudas abiertas

### 1. `nucleo.js` es una copia, no una fuente compartida

Si la entrada guiada se adopta, `app/index.html` debe importar `nucleo.js` en
vez de mantener su propia copia. Mientras tanto, **cualquier cambio de cálculo
hay que hacerlo en los dos lados.**

### 2. El paso chino desborda 195px con fechas de ventana lunisolar

Fechas entre el 21 de enero y el 20 de febrero de años sin tabla exacta de Año
Nuevo lunisolar (~7% del total) muestran un párrafo de advertencia que rompe el
encuadre de una pantalla. Ejemplo: `1985-02-19`.

Es **preexistente** y se midió contra la versión anterior: eran 229px, hoy son
195px. Achicar o esconder ese párrafo es una decisión editorial sobre cuánto
admitir de los límites del producto — por eso no se tocó.

Convergencia con tema largo se pasa 11px, también preexistente.

### 3. Tipografía: hay tres sistemas distintos conviviendo

| Página | Fuente display |
|---|---|
| `index.html` (landing) | Fraunces (Google Fonts) |
| `app/index.html` (app) | Newsreader (Google Fonts) |
| `app/guiado/` | stack de sistema, sin webfont |

Feedback recibido: *"la página parecía muy IA, mencionaron la font"*.

Se sacó Newsreader de la entrada guiada, pero **probablemente se atacó la
página equivocada**: el feedback vino de gente que vio la landing y la app, no
la entrada guiada, que todavía no existía. Además:

- El `--sans` sigue siendo **Inter primero en las tres páginas**. Inter es
  posiblemente la tipografía más asociada a producto de IA hoy, y es la que
  compone la mayor parte del texto que esa gente leyó. Es la sospecha más
  fuerte y sigue sin tocarse.
- Sacar el webfont ayuda en iOS (Iowan Old Style es fuente de sistema y tiene
  carácter) pero en Android no existe ninguna de las cuatro del stack y cae a
  Noto Serif, que es más genérico que Newsreader. Si los testers estaban en
  Android, el cambio empeoró las cosas.

**Sin verificar visualmente.** El entorno donde se hicieron los cambios no
tiene ninguna de esas fuentes instaladas; los tamaños y el encuadre sí se
midieron, la textura de la letra no.

### 4. Bug de jerarquía corregido (commit 87a98f4)

El dato revelado (`Virgo`, `Caballo de Metal`) se renderizaba en 15px gris —
más chico que las glosas de abajo. Causa: `.reveal-body > p` (especificidad
0,1,1) le ganaba a `.reveal-value` (0,1,0) y le imponía tamaño y color de
párrafo. La variante `.reveal-value.numeric` (0,2,0) se salvaba, por eso el
número de numerología se veía bien y el bug pasó desapercibido.

Vale como recordatorio: **al agregar un selector de elemento junto a uno de
clase se sube la especificidad sin querer.**

---

## Cómo verificar cambios

El riesgo al tocar tipografía o espaciado es que algún paso deje de caber. Se
verifica con Playwright recorriendo los 9 pasos a 390×844 y midiendo
`scrollHeight - innerHeight` por paso, sobre un barrido de fechas que cubra
años y meses (las de enero/febrero son las que activan los casos borde).

Al comparar, medir **contra la versión anterior servida en paralelo** — así se
distingue lo que uno rompió de lo que ya estaba roto.

---

## Nota

Este repositorio se publica tal cual en GitHub Pages, así que este archivo es
público. No poner acá nada que no pueda serlo.
