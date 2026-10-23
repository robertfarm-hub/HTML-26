let kirjautunut = false;
let admin = false;
let opettaja = true;

if (!kirjautunut) {
  console.log("Kirjaudu sisään");
} else if (admin || opettaja) {
  console.log("Muokkaus sallittu");
} else {
  console.log("Ei muokkausoikeutta");
}