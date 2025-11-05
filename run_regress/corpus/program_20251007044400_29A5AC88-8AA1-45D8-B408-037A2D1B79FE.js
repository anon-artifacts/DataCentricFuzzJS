function foo(a1) {
    const v2 = (a3) => {
        return a3;
    };
    return a1.catch(v2);
}
const a = Promise.resolve(1);
foo(a);
foo(a);
foo(a);
let custom_then_called = false;
function f14() {
    custom_then_called = true;
}
const t14 = a.__proto__;
t14.then = f14;
foo(a);
