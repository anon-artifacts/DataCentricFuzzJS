function f0() {
    const v7 = {
        Int8Array: Int8Array,
        Uint8Array: Uint8Array,
        Int16Array: Int16Array,
        Uint16Array: Uint16Array,
        Int32Array: Int32Array,
        Uint32Array: Uint32Array,
    };
    const v8 = {};
    const v13 = new ArrayBuffer(64 * 1024);
    function Module(a15, a16, a17) {
        'use asm';
        const t13 = a15.Int8Array;
        const v19 = new t13(a17);
        var i8 = v19;
        const t16 = a15.Uint8Array;
        const v22 = new t16(a17);
        var u8 = v22;
        const t19 = a15.Int16Array;
        const v25 = new t19(a17);
        var i16 = v25;
        const t22 = a15.Uint16Array;
        const v28 = new t22(a17);
        var u16 = v28;
        const t25 = a15.Int32Array;
        const v31 = new t25(a17);
        var i32 = v31;
        const t28 = a15.Uint32Array;
        const v34 = new t28(a17);
        var u32 = v34;
        var H = 0;
        function store_i8() {
            H = 4294967295;
            i8[0 >> 0] = H;
            return i8[0 >> 0];
        }
        function store_u8() {
            H = 4294967295;
            u8[0 >> 0] = H;
            return u8[0 >> 0];
        }
        function store_i16() {
            H = 4294967295;
            i16[0 >> 0] = H;
            return i16[0 >> 0];
        }
        function store_u16() {
            H = 4294967295;
            u16[0 >> 0] = H;
            return u16[0 >> 0];
        }
        function store_i32() {
            H = 4294967295;
            i32[0 >> 0] = H;
            return i32[0 >> 0];
        }
        function store_u32() {
            H = 4294967295;
            u32[0 >> 0] = H;
            return u32[0 >> 0];
        }
        const v92 = {
            store_i8: store_i8,
            store_u8: store_u8,
            store_i16: store_i16,
            store_u16: store_u16,
            store_i32: store_i32,
            store_u32: store_u32,
        };
        return v92;
    }
    var asm = Module(v7, v8, v13);
    -1;
    asm.store_i8();
    asm.store_u8();
    -1;
    asm.store_i16();
    asm.store_u16();
    -1;
    asm.store_i32();
    asm.store_u32();
}
f0();
function f111() {
    const v113 = { Int32Array: Int32Array };
    const v114 = {};
    const v119 = new ArrayBuffer(64 * 1024);
    function Module(a121, a122, a123) {
        'use asm';
        const t90 = a121.Int32Array;
        const v125 = new t90(a123);
        var i32 = v125;
        var H = 0;
        function store_i32_from_string() {
            H = "3";
            i32[0 >> 0] = H;
            return i32[0 >> 0];
        }
        return { store_i32_from_string: store_i32_from_string };
    }
    var asm = Module(v113, v114, v119);
    asm.store_i32_from_string();
}
f111();
