// 1. Haetaan h1 sen id:n avulla. getElementById ottaa pelkän nimen ilman #-merkkiä.
const otsikko = document.getElementById('title');

// 2. textContent on elementin tekstisisältö. Kun siihen sijoitetaan uusi arvo, vanha teksti korvautuu.
otsikko.textContent = 'DOM toimii!';

// 3. Haetaan p-elementti luokan avulla. querySelector käyttää CSS-valitsimia, joten luokan eteen tulee piste.
const status = document.querySelector('.status');

// 4. Vaihdetaan tekstiksi "Valmis".
status.textContent = 'Valmis';

// Haaste: classList on elementin luokkalista. add lisää siihen uuden luokan, eikä vanha status-luokka katoa.
status.classList.add('success');