// Jokainen tehtävä on omien aaltosulkeidensa sisällä.
// Aaltosulkeiden sisällä luodut muuttujat ovat olemassa vain niiden sisällä,
// joten samaa nimeä (esim. opiskelija tai tuote) voi käyttää uudestaan.

// ===== 1. Ominaisuus =====
{
  const opiskelija = { nimi: 'Aino', pisteet: 82 };
  console.log('1.', opiskelija.nimi);
}

// ===== 2. Muuta arvoa =====
{
  const opiskelija = { nimi: 'Aino', pisteet: 82 };
  opiskelija.pisteet += 5;
  console.log('2.', opiskelija.pisteet);
}

// ===== 3. Hakasulku =====
{
  const tuote = { hinta: 20 };
  console.log('3.', tuote['hinta']);
}
// Hakee arvon avaimella, kuten pistemerkintä (tuote.hinta).
// Ero: hakasulkeissa avain on merkkijono, joten sen tilalla voi olla muuttuja (ks. tehtävä 9).

// ===== 4. Olio taulukossa =====
{
  const opiskelijat = [{ nimi: 'Aino' }, { nimi: 'Mika' }];
  console.log('4.', opiskelijat[0].nimi);
}
// Hakasulkeiden sisällä olevat 2 oliota ovat taulukon alkiot, jotka saavat indexit.
// opiskelijat[0] ei käy taulukkoa läpi. Se menee suoraan indeksiin 0 ja ottaa sieltä alkion.

// ===== 5. Sisäkkäinen olio =====
{
  const henkilo = { osoite: { kaupunki: 'Helsinki' } };
  console.log('5.', henkilo.osoite.kaupunki);
}
// Sisäkkäiset oliot voivat olla monitasoisia. Tässä osoite on henkilo-olion ominaisuus, ja kaupunki on osoite-olion ominaisuus.
