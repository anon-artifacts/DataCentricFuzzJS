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
try { v36 = new Map(); } catch (e) {}
let map = v36;
for (const v38 of keys) {
    const v39 = i++;
    try { map.set(v38, v39); } catch (e) {}
}
function test(a42, a43) {
    let v44;
    try { v44 = a42.get(a43); } catch (e) {}
    return v44;
}
try { noInline(test); } catch (e) {}
for (let i48 = 0; i48 < 10000; ++i48) {
    let j = 0;
    for (const v56 of keys) {
        let v57;
        try { v57 = test(map, v56); } catch (e) {}
        const v58 = j++;
        try { shouldBe(v57, v58); } catch (e) {}
    }
}
let v61;
try { v61 = test(map, 0); } catch (e) {}
try { shouldBe(v61, 1); } catch (e) {}
