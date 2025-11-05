const v1 = new Set();
const s = v1;
function foo(a4) {
    const i = a4[Symbol.iterator]();
    i.next();
    return i;
}
console.log(foo(s));
console.log(foo(s));
console.log(foo(s));
