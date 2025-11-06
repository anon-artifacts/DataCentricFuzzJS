function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v6 = "bad value: " + a1;
        let v7;
        try { v7 = new Error(v6); } catch (e) {}
        throw v7;
    }
}
const v10 = -0;
let v13;
try { v13 = Symbol("Cocoa"); } catch (e) {}
const v16 = -42;
const v23 = -1;
const v25 = -2147483648;
var keys = ["Cappuccino",v10,v13,42,v16,null,,420.5,4294967295,2147483648,v23,v25,{},[],false,true,NaN];
let i = 0;
let v36;
try { v36 = new Set(); } catch (e) {}
let set = v36;
for (const v38 of keys) {
    try { set.add(v38); } catch (e) {}
}
function test(a41, a42) {
    let v43;
    try { v43 = a41.has(a42); } catch (e) {}
    let v44;
    try { v44 = a41.has(a42); } catch (e) {}
    return v43 + v44;
}
try { noInline(test); } catch (e) {}
for (let i49 = 0; i49 < 10000; ++i49) {
    let j = 0;
    for (const v57 of keys) {
        let v58;
        try { v58 = test(set, v57); } catch (e) {}
        try { shouldBe(v58, 2); } catch (e) {}
    }
}
let v62;
try { v62 = test(set, 0); } catch (e) {}
try { shouldBe(v62, 2); } catch (e) {}
