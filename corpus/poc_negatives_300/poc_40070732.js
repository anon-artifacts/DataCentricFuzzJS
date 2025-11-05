function f1(a2) {
    const o3 = {
        "h": -6,
    };
    o3.b = a2;
    return o3;
}
class C4 {
}
class C5 extends C4 {
}
const v6 = new C5();
const v7 = v6.f;
const v8 = f1();
v8.h = v7;
const v10 = f1();
f1(-59945);
function f13(a14, a15, a16, a17) {
    const o18 = {
        ...v8,
        "g": v10,
        [v6]: -59945,
    };
    const o19 = {
        __proto__: v8,
        "g": undefined,
    };
    for (let v20 = 0; v20 < 50; v20++) {
    }
    return a15;
}
f13();
f13();
f13();