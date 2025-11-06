console.log("Tests for ES6 arrow function nested declaration");
var af1;
var af2;
var af3;
const v9 = (a10) => {
    af2 = a10;
    af1 = a10;
    return a10;
};
af2 = v9;
af1 = v9;
console.log("af1 = af2 = af3 => af1 = af2 = af3");
af1(13);
var successfullyParsed = true;
