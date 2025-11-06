function write(a1) {
    print(a1);
}
var n = 5;
function InitObject(a7) {
    for (let i9 = 0; i9 < n; i9++) {
        a7[i9] = (i9 * i9) + 1;
    }
    a7.length = n;
    return a7;
}
function TestPop(a18) {
    write(">>> Start pop test for object: " + a18);
    for (let i23 = 0; i23 < (n + 2); i23++) {
        var x = Array.prototype.pop.call(a18);
        write((((i23 + " iteration. Poped:") + x) + " obj.length:") + a18.length);
    }
    write("<<< Stop pop test for object: " + a18);
}
const v47 = new Array();
const v49 = new Object();
const v50 = new Array(v47, v49);
var testList = v50;
for (let i53 = 0; i53 < testList.length; i53++) {
    TestPop(InitObject(testList[i53]));
}
