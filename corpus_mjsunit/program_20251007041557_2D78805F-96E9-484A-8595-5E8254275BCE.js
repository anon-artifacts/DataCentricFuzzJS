function f0() {
    function foo(a2) {
        return a2.catch();
    }
    foo(Promise.resolve(1));
    foo(Promise.resolve(1));
    foo(Promise.resolve(1));
}
f0();
function f15() {
    function foo(a17) {
        return a17.catch(foo);
    }
    foo(Promise.resolve(1));
    foo(Promise.resolve(1));
    foo(Promise.resolve(1));
}
f15();
function f30() {
    function foo(a32) {
        return a32.catch(foo, undefined);
    }
    foo(Promise.resolve(1));
    foo(Promise.resolve(1));
    foo(Promise.resolve(1));
}
f30();
