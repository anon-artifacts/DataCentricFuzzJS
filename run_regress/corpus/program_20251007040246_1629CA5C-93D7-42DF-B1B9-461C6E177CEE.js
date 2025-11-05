function makeProxyPrototype(a1) {
    const v3 = {};
    const v18 = {
        getPrototypeOf() {
            return null;
        },
        ownKeys() {
            return [];
        },
        get(a9, a10, a11) {
            const v17 = new Error("Unexpected [[Get]]: " + String(a10));
            throw v17;
        },
    };
    const v30 = {
        get(a20, a21, a22) {
            if (a21 in a20) {
                return Reflect.get(a20, a21, a22);
            }
            const v29 = new Error("Unexpected trap called: " + a21);
            throw v29;
        },
    };
    const v31 = new Proxy(v18, v30);
    const v32 = new Proxy(v3, v31);
    return Object.setPrototypeOf(a1, v32);
}
function enumerateMappedArgs(a36) {
    var a = makeProxyPrototype(arguments);
    delete a.length;
    delete a.callee;
    delete a[Symbol.iterator];
    delete a[0];
    for (const v47 in a) {
    }
}
enumerateMappedArgs(0);
function enumerateUnmappedArgs(a51) {
    'use strict';
    var a = makeProxyPrototype(arguments);
    delete a.length;
    delete a[Symbol.iterator];
    delete a[0];
    for (const v61 in a) {
    }
}
enumerateUnmappedArgs(0);
function enumerateFunction() {
    function named() {
    }
    var f = makeProxyPrototype(named);
    delete f.length;
    delete f.name;
    for (const v70 in f) {
    }
}
enumerateFunction();
if (typeof reportCompare === "function") {
    reportCompare(0, 0);
}
