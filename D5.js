/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

const pets1 = ["dog", "cat", "hamster", "redfish"];
console.log(pets1.sort());

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

const pets2 = ["dog", "cat", "hamster", "redfish"];

const reverseArray = function (par) {
  let petsReversed = [];
  for (let i = pets2.length - 1; i >= 0; i--) {
    petsReversed.push(pets2[i]);
  }
  return petsReversed;
};

console.log(reverseArray(pets2));

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const pets3 = ["dog", "cat", "hamster", "redfish"];

const swapFirstAndLastElements = function (arr) {
  let lastElement = arr[arr.length - 1];
  arr[arr.length - 1] = arr[0];
  arr[0] = lastElement;
  return arr;
};

console.log(swapFirstAndLastElements(pets3));

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const addProperty = function (obj) {
  let randomNumber;
  for (let i = 0; i < cars.length; i++) {
    obj[i].licensePlate =
      `${alphabet[Math.floor(Math.random() * 26)]}${alphabet[Math.floor(Math.random() * 26)]}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${alphabet[Math.floor(Math.random() * 26)]}${alphabet[Math.floor(Math.random() * 26)]}`;
  }
  return obj;
};

console.log(addProperty(cars));

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const cars1 = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

const addObjRemoveLastTrims = function (obj) {
  obj.push(structuredClone(obj[0]));
  obj[obj.length - 1].brand = "Fiat";
  obj[obj.length - 1].model = "Panda";
  obj[obj.length - 1].color = "Green";
  obj[obj.length - 1].trims = ["sport", "style"];

  for (let i = 0; i < obj.length; i++) {
    obj[i].trims.pop();
  }
  return obj;
};

console.log(addObjRemoveLastTrims(cars1));

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

const cars2 = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

const justTrims = [];

const addFirstTrims = function (obj) {
  for (let i = 0; i < obj.length; i++) {
    justTrims.push(obj[i].trims[0]);
  }
  return justTrims;
};

console.log(addFirstTrims(cars2));

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

const cars3 = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

const showMessage = function (obj) {
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].color[0] === "b") {
      console.log("Fizz");
    } else {
      console.log("Buzz");
    }
  }
};

showMessage(cars3);

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

let i = 0;
while (numericArray[i] !== 32) {
  console.log(numericArray[i]);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const positions = [];

for (let i = 0; i < charactersArray.length; i++) {
  const indexOfChar = alphabet.indexOf(charactersArray[i]);
  switch (indexOfChar) {
    case -1:
      console.log("Not found!");
      break;
    default:
      positions.push(indexOfChar + 1);
  }
}

console.log(positions);
