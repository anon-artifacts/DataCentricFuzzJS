function test(a1, a2) {
    var iter = a1[Symbol.iterator]();
    typeof iter;
    iter.toString();
    ("[object " + a1.constructor.name) + " Iterator]";
}
test([]);
const v19 = new Map();
test(v19);
const v22 = new Set();
test(v22);
