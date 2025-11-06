function m() {
    'use asm';
    const v3 = new Int32Array(4);
    var i32 = v3;
    const v7 = new Float64Array(4);
    var f64 = v7;
    function init() {
        i32[0] = 1;
        f64[0] = 0.1;
    }
    function load(a13) {
        return (a13 ? 0 : i32[0]) + i32[0];
    }
    function store(a20) {
        if (a20 | 0) {
        } else {
            f64[0] = 42;
        }
        return f64[0];
    }
    return { init: init, load: load, store: store };
}
var m = m();
m.init();
m.load();
m.store(1);
