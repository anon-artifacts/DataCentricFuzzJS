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
    try { v10 = a9.toString(); } catch (e) {}
    return v10;
}
try { noInline(test1); } catch (e) {}
function test2(a14) {
    let v15;
    try { v15 = a14.toString(); } catch (e) {}
    return v15;
}
try { noInline(test2); } catch (e) {}
function test3(a18) {
    let v19;
    try { v19 = a18.toString(); } catch (e) {}
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
const v43 = {};
let v44;
try { v44 = test1(v43); } catch (e) {}
const v45 = `[object Object]`;
try { shouldBe(v44, v45); } catch (e) {}
const v47 = {};
let v48;
try { v48 = test2(v47); } catch (e) {}
const v49 = `[object Object]`;
try { shouldBe(v48, v49); } catch (e) {}
const v51 = {};
let v52;
try { v52 = test3(v51); } catch (e) {}
const v53 = `[object Object]`;
try { shouldBe(v52, v53); } catch (e) {}
