function f(a1) {
}
var N = 100;
function test(a5) {
    const v6 = [];
    a5.arrs = v6;
    var arrs = v6;
    for (let i9 = 0; i9 < N; i9++) {
        arrs.push([0,1,2,3]);
    }
    var a = [0,1,2,3,4,5,6,7];
    Object.defineProperty(a, "length", { writable: false, value: 4 });
    arrs.push(a);
    for (let i39 = 0, i40 = arrs.length; i39 < i40; i39++) {
        f(arrs[i39]);
    }
}
var obj = {};
function f51() {
    test(obj);
}
f51();
var arrs = obj.arrs;
arrs.length;
N + 1;
for (let i61 = 0; i61 < N; i61++) {
    arrs[i61].length;
    ("unexpected length for arrs[" + i61) + "]";
    arrs[i61][0];
    ("bad element for arrs[" + i61) + "][0]";
    arrs[i61][1];
    ("bad element for arrs[" + i61) + "][1]";
    arrs[i61][2];
    ("bad element for arrs[" + i61) + "][2]";
    3 in arrs[i61];
    arrs[i61][3];
}
var a = arrs[N];
a.hasOwnProperty(3);
a[3];
a.length;
