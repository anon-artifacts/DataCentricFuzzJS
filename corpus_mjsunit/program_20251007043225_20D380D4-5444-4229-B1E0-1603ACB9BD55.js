function shouldThrow(a1, a2) {
    var error = null;
    try {
        a1();
    } catch(e6) {
        error = e6;
    }
    if (!error) {
        const v10 = new Error("not thrown.");
        throw v10;
    }
    if (String(error) !== a2) {
        const v18 = new Error("bad error: " + String(error));
        throw v18;
    }
}
const v21 = new Array(10);
var array = v21;
for (let i24 = 0; i24 < 10; ++i24) {
    function f30(a31) {
        var seenOnce = false;
        var storage = null;
        const v36 = Array.prototype;
        const v49 = {
            get() {
                const v41 = new Error("get is called." + a31);
                throw v41;
                return storage;
            },
            set(a43) {
                if (seenOnce) {
                    const v47 = new Error("set is called." + a31);
                    throw v47;
                }
                seenOnce = true;
                return storage = a43;
            },
        };
        Object.defineProperty(v36, a31, v49);
    }
    f30(i24);
}
array.fill(42);
for (let i56 = 0; i56 < 10; ++i56) {
    function f62() {
        array[i56] = i56;
    }
    shouldThrow(f62, "Error: set is called." + i56);
}
