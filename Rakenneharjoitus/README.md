# Maailman parhaat jalkapalloilijat

HTML-harjoitustyö: monisivuinen verkkosivusto ilman CSS:ää ja JavaScriptiä.

## Sivut

- `index.html` – Etusivu: GOAT-termin selitys, sanasto, äänitallenne
- `pages/maradona.html` – Maradonan tapaus
- `pages/ronaldo.html` – Ronaldon tapaus
- `pages/messi.html` – Messin tapaus
- `pages/vertailu.html` – Uratilastot taulukkona ja Top 10 -lista
- `pages/aanesta.html` – Äänestyslomake ja yhteystiedot

## Kansiorakenne

Rakenneharjoitus/
├── index.html
├── pages/
├── images/
├── audio/
└── README.md

## Katso sivusto

https://robertfarm-hub.github.io/HTML-26/Rakenneharjoitus/

## Semanttiset valinnat

Käytin `<ol>` tehdessäni Top 10 listan ja `<ul>` navigaatioon.
Lähdeviittaus `<blockquote>`n ulkopuolella, koska itse lähteen mainitseminen on omia sanojani.
lang="en" Wikipedia-lainauksessa. Ilman merkintää ruudunlukija ääntäisi englannin suomalaisittain.
Mainittu se että yksikään Messistä löytämäni video ei hyväksynyt upotusta.

## Reflektio

1. Tein sivuston maailman parhaiden jalkapalloilijoiden vertailusta.
2. Opin käyttämään aikasemmin opittuja asioita luontevammin kokonaisuuden parissa ja tehtävä keskittyi erityisesti selkeän rakenteen tekemiseen.
3. Vaikeinta oli lomakkeisiin liittyvien form-elementin eri atribuuttien muistaminen.
4. Mikään ei ollut uusi asia. Olemme käyneet niitä tunnilla läpi. Tosin se ei tarkoita että muistaisin kaiken vielä.
5. `<header>`, `<nav>`, `<main>`, `<section>`, `<figure>`, `<figcaption>`, `<address>`,
   `<blockquote>`, `<footer>`, `<table>`, `<caption>`, `<fieldset>`, `<legend>`, `<dl>`
6. Käytin `<ol>` Top 10 listaan. Se sopi tarkoitukseen täydellisesti, koska järjestys itsessään on sisältö, ja `<ul>` käyttämällä sain helposti selkeän listan sivuista navigointiin.
käytin `<figure>` sectionin sisällä jos kuva liittyi suoraan siinä käsiteltyyn aiheeseen. `<legend>` äänetys-sivulla jotta ruudunlukija tietää mihin kysymykseen vastataan.
7. Validaattori ei löytänyt virheitä.
8. Korjasin niitä sitä mukaa kun jokin ei toiminut sivulla. Lähinnä kirjoitusvirheitä ja hölmöjä logiikkavirheitä. Kun pääsin validaattoriin asti, ongelmia ei enää ollut. Tein testausta tiuhaan tahtiin.
9. Saavutettavuuden parantamiseksi kiinnitin huomiota kieliin, esimerkiksi lainatessani wikipediasta. Testasin sivujen toimivuuden näppäimistöllä. Nauhoitin jopa etusivun tekijän lukemana, jotta sivustolle saatiin audio-sisältöä. Scope-attribuutit taulukossa. Label ja for/id jokaisessa lomakekentässä. Altit ja titlet.
10. CSS:lla alkaisin tekemään ulkoasusta miellyttävämpää, nyt kun rakenne on ehjä. Saattaisin luopua osioiden väliin laittamistani hr-elementeistä, koska ne olivat CSS.n puutteen takia tehty päätös.