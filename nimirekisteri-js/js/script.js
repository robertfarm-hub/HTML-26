const nimet = ["Sara", "Aino", "Mika"];
console.log("Alussa:", nimet.join(", "));

nimet.push("Oskari");
console.log("Pushin jälkeen:", nimet.join(", "));

console.log("Onko Aino listalla?", nimet.includes("Aino"));
console.log("Onko Leevi listalla?", nimet.includes("Leevi"));

console.log("Ainon indeksi:", nimet.indexOf("Aino"));
console.log("Leevin indeksi:", nimet.indexOf("Leevi"));

const jarjestetty = [...nimet].sort();
console.log("Alkuperäinen:", nimet.join(", "));
console.log("Järjestetty kopio:", jarjestetty.join(", "));