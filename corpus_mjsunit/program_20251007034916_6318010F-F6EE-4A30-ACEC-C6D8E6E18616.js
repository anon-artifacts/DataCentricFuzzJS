var k1 = {};
var v1 = 42;
var k2 = {};
var v2 = 43;
var k3 = {};
var v3 = {};
function f12() {
    const v15 = [,];
    try { new WeakMap(v15); } catch (e) {}
}
f12();
function f19() {
    const v22 = [null];
    try { new WeakMap(v22); } catch (e) {}
}
f19();
function f25() {
    const v31 = [[k1,v1],[k2,v2],,[k3,k3]];
    try { new WeakMap(v31); } catch (e) {}
}
f25();
function f34() {
    const v39 = [[k1,v1],[k2,v2],,];
    try { new WeakMap(v39); } catch (e) {}
}
f34();
function f42() {
    const v47 = [1,2,3];
    try { new WeakMap(v47); } catch (e) {}
}
f42();
function f50() {
    const v56 = new Set([1,2,"abc"]);
    let s = v56;
    try { new WeakMap(s); } catch (e) {}
}
f50();
