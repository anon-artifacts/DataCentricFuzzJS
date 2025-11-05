function f1() {
    var o = {};
    var values = [];
    for (let i6 = 0; i6 < 6; ++i6) {
        var desc = { value: i6, writable: true, configurable: true, enumerable: true };
        try {
            Object.defineProperty(o, "p", desc);
        } catch(e20) {
        }
        if (i6 === 1) {
            Object.defineProperty(o, "p", { configurable: false });
        }
        values.push(o.p);
    }
    values.toString();
}
f1();
function f2() {
    var o = {};
    for (let i37 = 0; i37 < 6; ++i37) {
        var desc = { value: i37, writable: true, configurable: true, enumerable: true };
        try {
            Object.defineProperty(o, "p", desc);
        } catch(e51) {
        }
        Object.getOwnPropertyDescriptor(o, "p").enumerable;
        if (i37 > 0) {
            Object.defineProperty(o, "p", { enumerable: false });
        }
    }
}
f2();
