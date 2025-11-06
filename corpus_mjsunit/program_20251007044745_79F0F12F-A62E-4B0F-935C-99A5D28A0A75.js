function pluck1(a1, a2) {
    function f3(a4) {
        return a4[a2];
    }
    return a1.map(f3);
}
[2,2];
pluck1([[0,0],[0,0]], "length");
[1,3];
pluck1([[1,2],[3,4]], "0");
function pluck2(a32, a33) {
    function f34(a35) {
        return a35[a33];
    }
    return a32.map(f34);
}
[2,2];
pluck2(["ab","cd"], "length");
["a","c"];
pluck2(["ab","cd"], "0");
function pluck3(a55, a56) {
    function f57(a58) {
        return a58[a56];
    }
    return a55.map(f57);
}
function f61() {
}
f = f61;
function f64() {
}
g = f64;
f.prototype = f64;
[g,g];
pluck3([f,f], "prototype");
[,,];
pluck3([f,f], "0");
