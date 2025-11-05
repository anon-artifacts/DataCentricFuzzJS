function f0() {
    function makeObjectWithStableMap() {
        return { a: 1, b: 1, c: 1 };
    }
    const a = makeObjectWithStableMap();
    function foo() {
        return Promise.resolve(a);
    }
    foo();
    foo();
    foo();
    foo();
    const b = makeObjectWithStableMap();
    b.d = 1;
    foo();
}
f0();
function f21() {
    function makeObjectWithStableMap() {
        return { x: 1, y: 1 };
    }
    const a = makeObjectWithStableMap();
    async function foo() {
        return a;
    }
    foo();
    foo();
    foo();
    foo();
    const b = makeObjectWithStableMap();
    b.z = 1;
    foo();
}
f21();
