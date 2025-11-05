console.log("Tests for ES6 arrow function lexical bind of arguments on top level");
const v3 = () => {
    return arguments;
};
let foo = v3;
const v6 = () => {
    return arguments[0];
};
let boo = v6;
const v10 = (a11) => {
    return a11 ? arguments : "no-error";
};
let bar = v10;
try {
    foo();
} catch(e17) {
}
try {
    boo();
} catch(e19) {
}
try {
    bar(true);
} catch(e22) {
}
bar(false);
var successfullyParsed = true;
