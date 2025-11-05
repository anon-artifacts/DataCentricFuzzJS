function asmModule(a1) {
    'use asm';
    var sin = Math.sin;
    function foo() {
        return +sin(0);
    }
    function bar() {
        return +foo();
    }
    return bar;
}
var bar = asmModule(this);
for (let i16 = 0; i16 < 1000; ++i16) {
    bar();
}
console.log("pass");
