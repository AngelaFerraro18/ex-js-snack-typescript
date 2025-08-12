const datiRicevuti: unknown = 'Dati ricevuti';

if (typeof datiRicevuti === 'string') {
  console.log(datiRicevuti.toUpperCase());
} else if (typeof datiRicevuti === 'number') {
  console.log(datiRicevuti * 2);
} else if (typeof datiRicevuti === 'boolean') {
  console.log(datiRicevuti ? 'Sì' : 'No');
} else {
  console.log('Tipo non supportato');
}
