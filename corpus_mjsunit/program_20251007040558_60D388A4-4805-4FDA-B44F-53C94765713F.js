function f0() {
    function foo() {
        const x = 0.1;
        return Object.is(-0, x * -1e-308);
    }
    foo();
    foo();
    foo();
}
f0();
function f15() {
    function foo(a17) {
        return Object.is(-0, a17 * -1e-308);
    }
    foo(0.1);
    foo(0.1);
    foo(0.1);
}
f15();
function f32() {
    function foo(a34) {
        return Object.is(-0, a34);
    }
    foo(0.1 * -1e-308);
    foo(0.1 * -1e-308);
    foo(0.1 * -1e-308);
}
f32();
