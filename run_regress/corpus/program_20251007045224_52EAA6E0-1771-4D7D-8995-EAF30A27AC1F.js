var iterProto = Object.getPrototypeOf(Object.getPrototypeOf(([])[Symbol.iterator]()));
function test(a9, a10) {
    var iter0 = a9[Symbol.iterator]();
    var iter1 = a10[Symbol.iterator]();
    var proto = Object.getPrototypeOf(iter0);
    Object.getPrototypeOf(iter1);
    Object.getPrototypeOf(proto);
}
test([], [1]);
const v26 = new Map();
const v31 = new Map([[1,1]]);
test(v26, v31);
const v34 = new Set();
const v37 = new Set([1]);
test(v34, v37);
