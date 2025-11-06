var obj = {};
function noargs() {
    return arguments;
}
var a1;
var a2;
var a3;
for (let i11 = 0; i11 < 5; i11++) {
    let v17;
    try { v17 = noargs(); } catch (e) {}
    a1 = v17;
    let v19;
    try { v19 = noargs(1); } catch (e) {}
    a2 = v19;
    let v22;
    try { v22 = noargs(2, obj, 8); } catch (e) {}
    a3 = v22;
}
const v23 = [];
try { arraysEqual(a1, v23); } catch (e) {}
const v28 = [1];
try { arraysEqual(a2, v28); } catch (e) {}
const v33 = [2,obj,8];
try { arraysEqual(a3, v33); } catch (e) {}
