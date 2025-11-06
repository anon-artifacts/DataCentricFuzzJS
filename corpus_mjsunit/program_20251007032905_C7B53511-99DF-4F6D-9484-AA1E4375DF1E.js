function* gen() {
    yield;
}
let foo = gen();
let obj = {};
obj.__proto__ = foo;
try {
    obj.next().value;
    throw "bad";
} catch(e9) {
    if (!(e9 instanceof TypeError)) {
        throw e9;
    }
}
