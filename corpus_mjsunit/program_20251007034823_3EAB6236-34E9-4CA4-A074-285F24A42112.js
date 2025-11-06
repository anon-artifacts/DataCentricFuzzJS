function f() {
    var res = 0;
    for (let i4 = 0; i4 < 500; i4++) {
        res += "abcd" in Math;
    }
    return res;
}
f();
Math.abcd = 3;
f();
delete Math.abcd;
f();
function O(a23) {
    if (a23) {
        this.x = 1;
    }
}
var arr = [];
for (let i29 = 0; i29 < 4; i29++) {
    const v37 = new O(i29 % 2);
    arr.push(v37);
}
function g(a40) {
    var res = 0;
    for (let i44 = 0; i44 < 500; i44++) {
        var o = a40[i44 % a40.length];
        res += "x" in o;
        res += "abcd" in o;
    }
    return res;
}
g(arr);
const t31 = arr[0];
t31.abcd = 3;
g(arr);
function testPrimitive() {
    var x = 7;
    var c = 0;
    for (let i70 = 0; i70 < 5; i70++) {
        try {
            "z" in x;
        } catch(e78) {
            c++;
        }
    }
}
testPrimitive();
