function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v6 = "bad value: " + a1;
        let v7;
        try { v7 = new Error(v6); } catch (e) {}
        throw v7;
    }
}
function getByVal(a9, a10) {
    return a9?.[a10];
}
try { noInline(getByVal); } catch (e) {}
function getStr1() {
    return "hello";
}
try { noInline(getStr1); } catch (e) {}
function getStr2() {
    return "hello";
}
try { noInline(getStr2); } catch (e) {}
var object = { hello: 42 };
for (let i24 = 0; i24 < 100; ++i24) {
    const v33 = (i24 % 2) === 0;
    let v34;
    try { v34 = getStr1(); } catch (e) {}
    let v35;
    try { v35 = getStr2(); } catch (e) {}
    const v36 = v33 ? v34 : v35;
    let v37;
    try { v37 = getByVal(object, v36); } catch (e) {}
    try { shouldBe(v37, 42); } catch (e) {}
}
const v42 = {
    toString() {
        return "hello";
    },
};
let v43;
try { v43 = getByVal(object, v42); } catch (e) {}
try { shouldBe(v43, 42); } catch (e) {}
for (let i47 = 0; i47 < 10000; ++i47) {
    const v56 = (i47 % 2) === 0;
    let v57;
    try { v57 = getStr1(); } catch (e) {}
    let v58;
    try { v58 = getStr2(); } catch (e) {}
    const v59 = v56 ? v57 : v58;
    let v60;
    try { v60 = getByVal(object, v59); } catch (e) {}
    try { shouldBe(v60, 42); } catch (e) {}
}
const v65 = {
    toString() {
        return "hello";
    },
};
let v66;
try { v66 = getByVal(object, v65); } catch (e) {}
try { shouldBe(v66, 42); } catch (e) {}
