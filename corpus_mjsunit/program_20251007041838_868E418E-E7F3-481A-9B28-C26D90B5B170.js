function TestLookupOnReceiver() {
    let log = [];
    function f(a4, a5) {
        a4.x = a5;
        return a4.x;
    }
    let p = {};
    function f10() {
        return 153;
    }
    function f12(a13) {
        log.push("set");
    }
    Object.defineProperty(p, "x", { get: f10, set: f12, configurable: true });
    let o = Object.create(p);
    for (let i23 = 0; i23 < 2048; i23++) {
        o["p" + i23] = 0;
    }
    for (let i33 = 0; i33 < 5; i33++) {
        log.push(f(o, i33));
    }
    Object.defineProperty(o, "x", { value: 0, configurable: true, writable: true });
    for (let i48 = 0; i48 < 5; i48++) {
        log.push(f(o, 42 + i48));
    }
    ["set",153,"set",153,"set",153,"set",153,"set",153,42,43,44,45,46];
}
TestLookupOnReceiver();
