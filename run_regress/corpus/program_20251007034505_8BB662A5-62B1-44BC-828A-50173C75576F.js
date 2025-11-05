function DoTest() {
    var stdlib = this;
    try {
        const v7 = new ArrayBuffer(2097120 * 1024);
        var buffer = v7;
    } catch(e9) {
        print("OOM: soft pass");
        return;
    }
    var foreign = {};
    function Module(a17, a18, a19) {
        'use asm';
        const t12 = a17.Int16Array;
        const v21 = new t12(a19);
        var MEM16 = v21;
        function load(a24) {
            a24 = a24 | 0;
            a24 = MEM16[a24 >> 1] | 0;
            return a24 | 0;
        }
        function store(a35, a36) {
            a35 = a35 | 0;
            a36 = a36 | 0;
            MEM16[a35 >> 1] = a36;
        }
        function load8(a44) {
            a44 = a44 | 0;
            a44 = MEM16[(a44 + 8) >> 1] | 0;
            return a44 | 0;
        }
        function store8(a57, a58) {
            a57 = a57 | 0;
            a58 = a58 | 0;
            MEM16[(a57 + 8) >> 1] = a58;
        }
        return { load: load, store: store, load8: load8, store8: store8 };
    }
    var m = Module(stdlib, foreign, buffer);
    m.load(-8);
    m.load8(-16);
    m.store(2014, 2, 30, 1, 0);
    m.load8(-8);
    m.store8(-8, 99);
    m.load(0);
    m.load8(-8);
}
DoTest();
