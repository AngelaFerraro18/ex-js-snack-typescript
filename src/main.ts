// snack 1 
let datiRicevuti: unknown;
if (typeof datiRicevuti === 'string') {
  console.log(datiRicevuti.toUpperCase());
} else if (typeof datiRicevuti === 'number') {
  console.log(datiRicevuti * 2);
} else if (typeof datiRicevuti === 'boolean') {
  console.log(datiRicevuti ? 'Sì' : 'No');
} else if (datiRicevuti === null) {
  console.log('Il dato è vuoto');
} else if (Array.isArray(datiRicevuti)) { //Si può usare anche dato instanceof Array
  console.log(datiRicevuti.length);
} else if (datiRicevuti instanceof Promise) {
  datiRicevuti.then((message) => console.log(message));
} else {
  console.log('Tipo non supportato');
}


// snack 2
type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: number,
  sesso: 'm' | 'f',
  anniDiServizio: number[],
  readonly emailAziendale: string,
  contratto: 'indeterminato' | 'determinato' | 'freelance'
}


const user: Dipendente = {
  nome: 'Angela',
  cognome: 'Ferraro',
  annoNascita: 1994,
  sesso: 'f',
  anniDiServizio: [2025],
  emailAziendale: 'azienda@azienda.com',
  contratto: 'indeterminato'
}

console.log(user);

// snack 3 
type Developer = {
  livelloEsperienza: 'Junior' | 'Mid' | 'Senior',
  linguaggi: ['Javascript', 'Typescript'] | [],
  certificazioni: string[] | []
}

type ProjectManager = {
  teamSize: number | null,
  budgetGestito: number | null,
  stakeholderPrincipali: string[] | []
}

type Team = {
  nome: string,
  progettoAttuale: string | null,
  budget: number,
  membri: ['Project Manager', ...Developer[]]
}

const user2: Dipendente & Developer & ProjectManager = {
  nome: 'Mario',
  cognome: 'Rossi',
  annoNascita: 1995,
  sesso: 'm',
  anniDiServizio: [2010, 2012, 2014],
  emailAziendale: 'mariorossi@azienda.com',
  contratto: 'freelance',
  livelloEsperienza: 'Mid',
  linguaggi: [],
  certificazioni: ['CISCO'],
  teamSize: null,
  budgetGestito: 1000,
  stakeholderPrincipali: ['BWM', 'Audi']
}

console.log(user2);