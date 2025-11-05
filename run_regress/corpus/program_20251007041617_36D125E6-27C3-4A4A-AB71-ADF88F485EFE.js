var sentinel = {};
const v4 = Symbol.species;
function f5(a6) {
    function f7() {
    }
    function f8() {
    }
    a6(f7, f8);
    return sentinel;
}
Object.defineProperty(Promise, v4, { value: f5 });
const v14 = new ArrayBuffer();
var promise = WebAssembly.instantiate(v14);
const v18 = (a19) => {
    print(a19);
};
const v22 = (a23) => {
    print(a23);
};
var monkey = promise.then(v18, v22);
