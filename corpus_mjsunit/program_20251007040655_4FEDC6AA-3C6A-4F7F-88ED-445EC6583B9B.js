function shouldEqual(a1, a2) {
}
var exception;
try {
    const t4 = Symbol(1);
    t4();
} catch(e9) {
    exception = e9;
}
shouldEqual(exception, "TypeError: Symbol(1) is not a function. (In 'Symbol(1)()', 'Symbol(1)' is a Symbol)");
