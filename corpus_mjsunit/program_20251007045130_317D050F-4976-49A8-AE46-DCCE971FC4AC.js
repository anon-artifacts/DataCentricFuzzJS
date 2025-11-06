function test(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
function f8() {
    var array = [];
    var values = 42;
    with (array) {
        test(values, 42);
    }
    const t12 = array[Symbol.unscopables];
    t12.values = false;
    with (array) {
        test(values, Array.prototype.values);
    }
}
f8();
function f24() {
    const v26 = new Map();
    var map = v26;
    var values = 42;
    with (map) {
        test(values, Map.prototype.values);
    }
    const v34 = { values: true };
    map[Symbol.unscopables] = v34;
    with (map) {
        test(values, 42);
    }
}
f24();
function f40() {
    const v42 = new Set();
    var set = v42;
    var values = 42;
    with (set) {
        test(values, Set.prototype.values);
    }
    const v50 = { values: true };
    set[Symbol.unscopables] = v50;
    with (set) {
        test(values, 42);
    }
}
f40();
