function foo(a1) {
    'use asm';
    function bar() {
        a1 = 0;
    }
    return bar;
}
print("pass");
