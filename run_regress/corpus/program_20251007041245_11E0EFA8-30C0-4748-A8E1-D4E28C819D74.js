console.log("Tests for ES6 arrow function endings");
const v3 = (a4) => {
    return a4 + 1;
};
var afEOL = v3;
result = afEOL(12);
afEOL(12);
try {
    const v13 = (a14) => {
        return a14 + 1;
    };
} catch(e17) {
}
var afEOLTxt = "x=>x+1" + String.fromCharCode(10);
function f24() {
    var result = 0;
    var afEOF;
    const v29 = (a30) => {
        return ((((a30 * 10000) + (a30 * 1000)) - (a30 * 10000)) - (a30 * 1000)) + a30;
    };
    afEOF = v29;
    result = afEOF(12);
    result = result + afEOF(13);
    result = result + afEOF(14);
    return result;
}
var f = f24;
f();
const v53 = (a54) => {
    return a54 * 2;
};
var af = v53;
console.log("eval('var af = x=>x*2')");
af(10);
const v62 = (a63) => {
    return a63 * 3;
};
var af1 = v62;
const v67 = (a68) => {
    return a68 * 4;
};
var af2 = v67;
console.log("eval('var af1 = x=>x*3, af2=x=>x*4')");
af1(10);
af2(10);
const v78 = (a79) => {
    return a79 * 3;
};
var af3 = v78;
console.log("eval('var af1 = x=>x*3;')");
af3(10);
const v87 = (a88) => {
    return a88 * 3;
};
var af4 = v87;
console.log("eval('var af4 = x=>(x*3)')");
af4(10);
const v96 = (a97) => {
    return a97 * 3;
};
var af5 = v96;
console.log("eval('var af5 = x=> { return x*3; }')");
af5(10);
var successfullyParsed = true;
