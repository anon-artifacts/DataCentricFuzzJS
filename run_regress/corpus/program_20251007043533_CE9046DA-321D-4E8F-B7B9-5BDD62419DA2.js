function f(a1) {
}
var N = 100;
function test(a6) {
    const v7 = [];
    a6.arrs = v7;
    var arrs = v7;
    for (let i10 = 0; i10 < N; i10++) {
        arrs.push([0,1,2,3]);
    }
    var a = [0,1,2,3,4,5,6,7];
    Object.defineProperty(a, "length", { writable: false, value: 4 });
    arrs.push(a);
    for (let i40 = 0, i41 = arrs.length; i40 < i41; i40++) {
        f(arrs[i40]);
    }
}
var obj = {};
function f52() {
    test(obj);
}
f52();
var arrs = obj.arrs;
arrs.length;
N + 1;
for (let i62 = 0; i62 < N; i62++) {
    arrs[i62].length;
    ("unexpected length for arrs[" + i62) + "]";
    arrs[i62][0];
    ("bad element for arrs[" + i62) + "][0]";
    arrs[i62][1];
    ("bad element for arrs[" + i62) + "][1]";
    arrs[i62][2];
    ("bad element for arrs[" + i62) + "][2]";
    arrs[i62][3];
    ("bad element for arrs[" + i62) + "][3]";
    arrs[i62][4];
    ("bad element for arrs[" + i62) + "][4]";
    arrs[i62][5];
    ("bad element for arrs[" + i62) + "][5]";
}
var a = arrs[N];
a[0];
a[1];
a[2];
a[3];
a.hasOwnProperty(4);
a[4];
a.hasOwnProperty(5);
a[5];
a.length;
