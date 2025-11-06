function f0() {
}
const v3 = new Int32Array(4);
let ta = v3;
for (const v8 of [null,,]) {
    const v9 = () => {
        let v10;
        try { v10 = ta.set(v8); } catch (e) {}
        return v10;
    };
    v9();
    class C14 extends Error {
    }
    const v15 = () => {
        const v18 = {
            valueOf() {
                const v17 = new C14();
                throw v17;
            },
        };
        let v19;
        try { v19 = ta.set(v8, v18); } catch (e) {}
        return v19;
    };
    v15();
}
[0,0,0,0];
ta.set("");
[0,0,0,0];
ta.set("123");
[1,2,3,0];
const v40 = () => {
    let v42;
    try { v42 = ta.set("456789"); } catch (e) {}
    return v42;
};
v40();
[1,2,3,0];
for (const v59 of [true,false,0,NaN,123,Infinity,Symbol()]) {
    ta.set(v59);
    [1,2,3,0];
}
const t42 = Number.prototype;
t42.length = 4;
const v70 = -1;
const t45 = Number.prototype;
t45[3] = v70;
try {
    ta.set(456);
    [0,0,0,-1];
} finally {
    const t51 = Number.prototype;
    delete t51.length;
    const t52 = Number.prototype;
    delete t52[3];
}
if (typeof f0 === "function") {
    f0(true, true);
}
