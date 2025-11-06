console.log("Tests for ES6 arrow function nested declaration");
console.log("af = a => b => a");
const v5 = (a6) => {
    const v7 = (a8) => {
        return a6;
    };
    return v7;
};
var af = v5;
const t9 = af("ABC");
t9("DEF");
var successfullyParsed = true;
