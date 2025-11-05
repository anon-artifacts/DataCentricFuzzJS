function assert(a1) {
}
try { noInline(assert); } catch (e) {}
const v5 = { f: 50 };
const v8 = { f: 50, g: 70 };
const v11 = { g: 50, f: 70 };
const v14 = { h: 50, f: 70 };
const v17 = { z: 50, f: 70 };
let objs = [v5,v8,v11,v14,v17,{ k: 50, f: 70 }];
let v24;
try { v24 = Symbol(); } catch (e) {}
let s1 = v24;
let v26;
try { v26 = Symbol(); } catch (e) {}
let s2 = v26;
for (const v28 of objs) {
    v28[s1] = "foo";
}
function foo(a31) {
    try { a31.hasOwnProperty("f"); } catch (e) {}
    let v35;
    try { v35 = a31.hasOwnProperty("ff"); } catch (e) {}
    !v35;
    try { a31.hasOwnProperty(s1); } catch (e) {}
    let v38;
    try { v38 = a31.hasOwnProperty(s2); } catch (e) {}
    !v38;
}
try { noInline(foo); } catch (e) {}
for (let i42 = 0; i42 < 40000; ++i42) {
    const v50 = objs?.[i42 % objs?.length];
    try { foo(v50); } catch (e) {}
}
