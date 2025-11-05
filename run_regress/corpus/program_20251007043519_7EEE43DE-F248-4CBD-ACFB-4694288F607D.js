function test0(a1) {
    const v3 = new Cons(a1);
    return v3;
    function Cons(a5) {
        this.a = (a5 << 1) + 2;
    }
}
print(test0(1073741823).a);
function test1(a17) {
    const v19 = new Cons(a17);
    return v19;
    function Cons(a21) {
        const v25 = (a21 << 1) + 2;
        return { a: v25 };
    }
}
print(test0(1073741823).a);
