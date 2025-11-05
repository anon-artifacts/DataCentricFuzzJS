function TestNonLoopyLoop() {
    function f() {
        do {
            return 23;
        } while (false)
    }
    f();
    f();
}
TestNonLoopyLoop();
function TestNonLoopyGenerator() {
    function* g() {
        do {
            yield 23;
            yield 42;
        } while (false)
        return 999;
    }
    var gen = g();
    const v21 = { value: 23, done: false };
    gen.next();
    const v25 = { value: 42, done: false };
    gen.next();
    const v29 = { value: 999, done: true };
    gen.next();
}
TestNonLoopyGenerator();
