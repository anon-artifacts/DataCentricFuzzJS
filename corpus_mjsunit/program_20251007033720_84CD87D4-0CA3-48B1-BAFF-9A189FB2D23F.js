function test() {
    var proxied = {};
    var passed = false;
    function f6(a7) {
        passed = a7 === proxied;
        function f9() {
            return { done: true, value: null };
        }
        return { next: f9 };
    }
    const v15 = new Proxy(proxied, { enumerate: f6 });
    for (const v16 in v15) {
    }
    return passed;
}
test();
