try {
    function testfn(a1) {
        return ([1]).map(a1)[0];
    }
    function foo() {
        return ([]).map?.caller;
    }
    function f10() {
        testfn(foo);
    }
    f10();
    const t10 = Array.prototype.map;
    delete t10.caller;
    function f17() {
        testfn(foo);
    }
    f17();
    function testarguments(a21) {
        return ([1]).map(a21)[0];
    }
    function bar() {
        return ([]).map?.arguments;
    }
    function f30() {
        testarguments(bar);
    }
    f30();
    const t26 = Array.prototype.map;
    delete t26.arguments;
    function f36() {
        testarguments(bar);
    }
    f36();
} catch(e39) {
}
