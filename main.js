console.log("random nonsense");
let sentence = ['labas', 'krabas', 'baobabas', 'sabas'];
let randomSen = "";
for (let i = 0; i < sentence.length; i++) {
    randomSen += sentence[Math.floor(Math.random() * sentence.length)] + " ";  
}
console.log(randomSen);