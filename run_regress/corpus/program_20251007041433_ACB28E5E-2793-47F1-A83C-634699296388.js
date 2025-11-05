function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v6 = "bad value: " + a1;
        let v7;
        try { v7 = new Error(v6); } catch (e) {}
        throw v7;
    }
}
function test1(a9) {
    let v10;
    try { v10 = a9.valueOf(); } catch (e) {}
    return v10;
}
try { noInline(test1); } catch (e) {}
function test2(a14) {
    let v15;
    try { v15 = a14.valueOf(); } catch (e) {}
    return v15;
}
try { noInline(test2); } catch (e) {}
function test3(a18) {
    let v19;
    try { v19 = a18.valueOf(); } catch (e) {}
    return v19;
}
try { noInline(test3); } catch (e) {}
var string = "Hello";
let v24;
try { v24 = new String(string); } catch (e) {}
var stringObject = v24;
for (let i27 = 0; i27 < 1000000; ++i27) {
    let v33;
    try { v33 = test1(string); } catch (e) {}
    try { shouldBe(v33, string); } catch (e) {}
    let v35;
    try { v35 = test2(stringObject); } catch (e) {}
    try { shouldBe(v35, string); } catch (e) {}
    if (i27 & 1) {
        let v39;
        try { v39 = test3(string); } catch (e) {}
        try { shouldBe(v39, string); } catch (e) {}
    } else {
        let v41;
        try { v41 = test3(stringObject); } catch (e) {}
        try { shouldBe(v41, string); } catch (e) {}
    }
}
var object = {};
let v45;
try { v45 = test1(object); } catch (e) {}
try { shouldBe(v45, object); } catch (e) {}
let v47;
try { v47 = test2(object); } catch (e) {}
try { shouldBe(v47, object); } catch (e) {}
let v49;
try { v49 = test3(object); } catch (e) {}
try { shouldBe(v49, object); } catch (e) {}
