function TestInlinedConstructor(a1, a2) {
    var result;
    var counter = { value: 0 };
    var noDeopt = { deopt: 0 };
    var forceDeopt = {};
    result = a2(a1, 11, noDeopt, counter);
    counter.value;
    result = a2(a1, 23, noDeopt, counter);
    counter.value;
    result = a2(a1, 42, noDeopt, counter);
    counter.value;
    result = a2(a1, 127, forceDeopt, counter);
    counter.value;
}
function value_context(a34, a35, a36, a37) {
    const v38 = new a34(a35, a36, a37);
    var obj = v38;
    return obj.x;
}
function test_context(a42, a43, a44, a45) {
    const v46 = new a42(a43, a44, a45);
    if (!v46) {
    }
    return a43;
}
function effect_context(a50, a51, a52, a53) {
    new a50(a51, a52, a53);
    return a51;
}
function TestInAllContexts(a56) {
    TestInlinedConstructor(a56, value_context);
    TestInlinedConstructor(a56, test_context);
    TestInlinedConstructor(a56, effect_context);
}
function c1(a61, a62, a63) {
    a62.deopt;
    this.x = a61;
    let v66 = a63.value;
    v66++;
}
TestInAllContexts(c1);
function c2(a70, a71, a72) {
    var obj = {};
    a71.deopt;
    obj.x = a70;
    let v76 = a72.value;
    v76++;
    return obj;
}
TestInAllContexts(c2);
function c3(a80, a81, a82) {
    a81.deopt;
    this.x = a80;
    let v85 = a82.value;
    v85++;
    return "not an object";
}
TestInAllContexts(c3);
function c_too_many(a90, a91) {
    this.x = a90 + a91;
}
function f_too_many(a95, a96, a97) {
    const v98 = new c_too_many(a95, a96, a97);
    var obj = v98;
    return obj.x;
}
f_too_many(11, 12, 1);
f_too_many(23, 19, 1);
f_too_many(1, 42, 1);
f_too_many("foo", "bar", "baz");
function c_too_few(a122, a123) {
    this.x = a122 + 1;
}
function f_too_few(a129) {
    const v130 = new c_too_few(a129);
    var obj = v130;
    return obj.x;
}
f_too_few(11);
f_too_few(23);
f_too_few(1);
f_too_few("foo");
function c_unsupported_syntax(a146, a147, a148) {
    try {
        a147.deopt;
        this.x = a146;
        let v151 = a148.value;
        v151++;
    } catch(e153) {
        const v155 = new Error();
        throw v155;
    }
}
TestInAllContexts(c_unsupported_syntax);
function c_strict(a158, a159, a160) {
    'use strict';
    a159.deopt;
    this.x = a158;
    let v163 = a160.value;
    v163++;
}
TestInAllContexts(c_strict);
