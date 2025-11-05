const v2 = Symbol.species;
Object.defineProperty(Promise, v2, { value: 0 });
function f7() {
}
const v8 = new Promise(f7);
var p = v8;
try {
    p.then();
} catch(e11) {
    e11 instanceof TypeError;
}
