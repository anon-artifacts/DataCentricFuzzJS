function shouldBe(a1, a2) {
    if (a1 !== a2) {
        let v6;
        try { v6 = String(a1); } catch (e) {}
        const v7 = `bad value: ${v6}`;
        let v8;
        try { v8 = new Error(v7); } catch (e) {}
        throw v8;
    }
}
function test1(a10) {
    let v12;
    try { v12 = Number(a10); } catch (e) {}
    return v12;
}
try { noInline(test1); } catch (e) {}
function test12(a16) {
    let v18;
    try { v18 = Number(a16); } catch (e) {}
    return v18 <= 42;
}
try { noInline(test12); } catch (e) {}
const v24 = {
    valueOf() {
        return 42;
    },
};
var object1 = v24;
for (let i27 = 0; i27 < 10000; ++i27) {
    let v33;
    try { v33 = test1(object1); } catch (e) {}
    try { shouldBe(v33, 42); } catch (e) {}
    let v36;
    try { v36 = test12(object1); } catch (e) {}
    try { shouldBe(v36, true); } catch (e) {}
}
function test2(a40) {
    let v42;
    try { v42 = Number(a40); } catch (e) {}
    return v42;
}
try { noInline(test2); } catch (e) {}
function test22(a45) {
    let v47;
    try { v47 = Number(a45); } catch (e) {}
    return v47 <= 42;
}
try { noInline(test22); } catch (e) {}
const v53 = {
    valueOf() {
        return 42.195;
    },
};
var object2 = v53;
for (let i56 = 0; i56 < 10000; ++i56) {
    let v62;
    try { v62 = test2(object2); } catch (e) {}
    try { shouldBe(v62, 42.195); } catch (e) {}
    let v65;
    try { v65 = test22(object2); } catch (e) {}
    try { shouldBe(v65, false); } catch (e) {}
}
function test3(a69) {
    let v71;
    try { v71 = Number(a69); } catch (e) {}
    return v71;
}
try { noInline(test3); } catch (e) {}
function test32(a74) {
    let v76;
    try { v76 = Number(a74); } catch (e) {}
    return v76 <= 42;
}
try { noInline(test32); } catch (e) {}
var value = 42;
const v83 = {
    valueOf() {
        return value;
    },
};
var object3 = v83;
for (let i86 = 0; i86 < 10000; ++i86) {
    let v92;
    try { v92 = test3(object3); } catch (e) {}
    try { shouldBe(v92, value); } catch (e) {}
    let v94;
    try { v94 = test32(object3); } catch (e) {}
    try { shouldBe(v94, true); } catch (e) {}
}
value = 42.195;
for (let i99 = 0; i99 < 10000; ++i99) {
    let v105;
    try { v105 = test3(object3); } catch (e) {}
    try { shouldBe(v105, value); } catch (e) {}
    let v107;
    try { v107 = test32(object3); } catch (e) {}
    try { shouldBe(v107, false); } catch (e) {}
}
