var promise = Promise.resolve(1);
function f4(a5) {
    function f6() {
    }
    function f7() {
    }
    a5(f6, f7);
}
var FakeCtor = f4;
const v11 = Symbol.species;
Object.defineProperty(Promise, v11, { value: FakeCtor });
function f15() {
}
promise.then(f15);
this.reportCompare && reportCompare(true, true);
