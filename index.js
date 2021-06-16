const student = require("./information");
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : (`Je m'appelle ${student.myName} et j'étudie au sein du campus ${student.campus}`),
    e : "oO",
    T : "U "
}));