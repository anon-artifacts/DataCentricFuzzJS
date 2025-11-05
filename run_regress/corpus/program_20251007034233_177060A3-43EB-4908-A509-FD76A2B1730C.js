function f0() {
    const a = [1,2,3];
    const v6 = () => {
        return a[0];
    };
    const foo = v6;
    foo();
    foo();
    foo();
    a.length = 1;
    foo();
}
f0();
function f19() {
    const a = [1,2,3];
    const v25 = () => {
        return a[0];
    };
    const foo = v25;
    foo();
    foo();
    foo();
    a[0] = 42;
    foo();
}
f19();
