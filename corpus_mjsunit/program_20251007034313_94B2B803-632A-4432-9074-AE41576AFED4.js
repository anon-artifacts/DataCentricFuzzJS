console.log("Tests for ES6 arrow function declaration body as block");
console.log("f = () => {}");
const v5 = () => {
};
var f = v5;
typeof f();
console.log("g = () => ({})");
const v11 = () => {
    return {};
};
var g = v11;
typeof g();
var successfullyParsed = true;
