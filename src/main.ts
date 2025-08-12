async function gestioneDati(datiRicevuti: unknown) {
  if (typeof datiRicevuti === 'string') {
    console.log(datiRicevuti.toUpperCase());
  } else if (typeof datiRicevuti === 'number') {
    console.log(datiRicevuti * 2);
  } else if (typeof datiRicevuti === 'boolean') {
    console.log(datiRicevuti ? 'Sì' : 'No');
  } else if (datiRicevuti === null) {
    console.log('Il dato è vuoto');
  } else if (Array.isArray(datiRicevuti)) {
    console.log(datiRicevuti.length);
  } else if (datiRicevuti instanceof Promise) {
    const valore = await datiRicevuti;
    console.log('Promise risolta:', valore);
  } else {
    console.log('Tipo non supportato');
  }

}

gestioneDati('Dati ricevuti');
gestioneDati(18);
gestioneDati(true);
gestioneDati(false);
gestioneDati(null);
gestioneDati([1, 2, 3, 4, 5]);
gestioneDati(Promise.resolve('valore della Promise'));
gestioneDati(undefined);
