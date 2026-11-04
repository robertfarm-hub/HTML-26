const ostokset = ["maito", "leipä", "kahvi", "juusto", "omenat"];
console.log("Alussa:", ostokset);

ostokset.push("banaanit");
console.log("Pushin jälkeen:", ostokset);

const poistettuLopusta = ostokset.pop();
console.log("Pop poisti:", poistettuLopusta);

const poistettuAlusta = ostokset.shift();
console.log("Shift poisti:", poistettuAlusta);

console.log("Lopuksi:", ostokset);

const kahviLoytyy = ostokset.includes("kahvi");
console.log("Onko kahvi listalla?", kahviLoytyy);

const kaakaoLoytyy = ostokset.includes("kaakao");
console.log("Onko kaakao listalla?", kaakaoLoytyy);