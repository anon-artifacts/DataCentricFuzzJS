function plainSet() {
    var callCount = 0;
    const v6 = {
        valueOf() {
            callCount++;
            return 1;
        },
    };
    var value = v6;
    var N = 100;
    const v12 = new Int32Array(0);
    var ta = v12;
    for (let i15 = 0; i15 < N; ++i15) {
        ta[0] = value;
    }
}
for (let i21 = 0; i21 < 2; ++i21) {
    plainSet();
}
function reflectSet() {
    var callCount = 0;
    const v34 = {
        valueOf() {
            callCount++;
            return 1;
        },
    };
    var value = v34;
    var N = 100;
    const v40 = new Int32Array(0);
    var ta = v40;
    for (let i43 = 0; i43 < N; ++i43) {
        Reflect.set(ta, 0, value);
    }
}
for (let i53 = 0; i53 < 2; ++i53) {
    reflectSet();
}
function defineProp() {
    var callCount = 0;
    const v66 = {
        valueOf() {
            callCount++;
            return 1;
        },
    };
    var value = v66;
    var desc = { value: value, writable: true, enumerable: true, configurable: false };
    var N = 100;
    const v77 = new Int32Array(0);
    var ta = v77;
    for (let i80 = 0; i80 < N; ++i80) {
        Reflect.defineProperty(ta, 0, desc);
    }
}
for (let i91 = 0; i91 < 2; ++i91) {
    defineProp();
}
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
