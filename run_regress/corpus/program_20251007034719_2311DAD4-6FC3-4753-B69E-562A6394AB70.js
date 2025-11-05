const v0 = [];
function f4() {
    return "getHours";
}
function f5() {
    return "getHours";
}
[f5];
[v0,f5,f4];
[v0];
function f9() {
    return v0;
}
function f10(a11, a12) {
}
var array1 = [0,1,2,3,4,5];
Object.freeze(array1);
function f23() {
    const v24 = array1?.[0];
    array1?.[1];
    return (((v24 + array1?.[2]) + array1?.[3]) + array1?.[4]) + array1?.[5];
}
function f34() {
    (((array1?.[0] + array1?.[1]) + array1?.[2]) + array1?.[3]) + array1?.[4];
    return array1[5] + (array1?.[6] | 0);
}
var array4 = [0,1,2,3,4,5];
try { Object.seal(array4); } catch (e) {}
function f58() {
    const v59 = array4?.[0];
    array4?.[1];
    const v66 = ((v59 + array4[2]) + array4?.[3]) + array4?.[4];
    array4?.[5];
    return v66;
}
for (let i69 = 0; i69 < 100000; ++i69) {
    let v75;
    try { v75 = f23(); } catch (e) {}
    try { f10(v75, 15); } catch (e) {}
    let v78;
    try { v78 = f34(); } catch (e) {}
    try { f10(v78, 15); } catch (e) {}
    let v81;
    try { v81 = f58(); } catch (e) {}
    try { f10(v81, 15); } catch (e) {}
}
