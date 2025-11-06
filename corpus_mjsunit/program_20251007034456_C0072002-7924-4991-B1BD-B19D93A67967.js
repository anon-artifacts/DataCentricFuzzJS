function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    let v7 = undefined;
    let v8 = undefined;
    function f9(a10) {
        function f11() {
        }
        v7 = f11;
        v8 = arguments;
        return a10;
    }
    function f13() {
        for (let i = 0; i < 500; i++) {
            const v14 = {};
            Array.prototype.every.call(v8, v7);
        }
        return f13;
    }
    f9(Uint32Array);
    f13();
}
new F0();
new F0();
