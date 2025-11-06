console.log("Tests for ES6 arrow function, passing arrow function as the paramter");
function f3(a4, a5) {
    return a4(a5);
}
var f = f3;
function f8(a9, a10, a11) {
    return a9(a10, a11);
}
var f2 = f8;
const v14 = (a15) => {
    return a15 * 25;
};
f(v14, 121);
const v20 = (a21, a22) => {
    return a21 * a22;
};
f2(v20, 14, 12);
var successfullyParsed = true;
