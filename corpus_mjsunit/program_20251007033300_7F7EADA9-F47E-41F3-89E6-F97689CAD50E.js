console.log("Tests for ES6 arrow function, make sure parsing is OK in strict mode.");
const v3 = (a4) => {
    return a4;
};
var f1 = v3;
f1(10);
const v8 = (a9) => {
    return a9;
};
var f2 = v8;
f2(20);
const v13 = (a14, a15) => {
    return a14 + a15;
};
var f3 = v13;
f3(10, 20);
const v21 = (a22, a23) => {
    return a22 + a23;
};
var f4 = v21;
f4(20, 20);
function foo(a30) {
    return a30(10);
}
const v33 = (a34) => {
    return a34 + 1;
};
foo(v33);
const v38 = (a39) => {
    return a39 + 1;
};
foo(v38);
const v43 = (a44) => {
    return a44 + 1;
};
foo(v43);
const v48 = (a49) => {
    return a49 + 1;
};
foo(v48);
