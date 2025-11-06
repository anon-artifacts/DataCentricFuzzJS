function write(a1) {
    print(a1);
}
write("Scenario 0");
const v8 = new String("world hello");
var s = v8;
s.foo = Array.prototype.sort;
try {
    s.foo();
} catch(e14) {
    if (!e14 instanceof TypeError) {
        throw e14;
    }
    write(s);
}
write("Scenario 1");
var a = [,,,];
a.sort();
write(a);
write(a.length);
write("Scenario 2");
var b;
var a = [b,b];
a[10] = b;
a[11] = b;
a[21] = b;
a[22] = b;
a[8] = b;
a.sort();
write(a);
write(a.length);
write("Scenario 3");
var b;
var a = [b];
a.sort();
write(a);
write(a.length);
write("Scenario 4 - prototype lookup  - output in cscript is different");
for (let i53 = 0; i53 < 20; i53 = i53 + 4) {
    const v61 = "o" + i53;
    const t40 = Object.prototype;
    t40[i53] = v61;
}
for (let i65 = 0; i65 < 20; i65 = i65 + 3) {
    const v73 = "p" + i65;
    const t45 = Array.prototype;
    t45[i65] = v73;
}
const t48 = Array.prototype;
t48[14] = undefined;
const t50 = Object.prototype;
t50[2] = undefined;
var a = [23,14,,17];
a[10] = 5;
a[11] = 22;
a[12] = undefined;
a[13] = 20;
write(a.sort());
write(a);
write(a.length);
write("Scenario 5 - prototype lookup");
const v98 = new Array(3);
var arr = v98;
write(arr.sort());
write(arr);
const t63 = Array.prototype;
t63[0] = 0;
const t67 = Array.prototype;
t67[1] = 0;
const t69 = Array.prototype;
t69[2] = 0;
write(arr.length);
write("Scenario 6 - prototype lookup");
const t71 = Array.prototype;
t71[5] = 10;
const t75 = Array.prototype;
t75[6] = 1;
const t77 = Array.prototype;
t77[7] = 15;
const v120 = new Array(8);
var arr = v120;
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
write(arr.sort());
write("Scenario 7 - output in cscript is different");
const t84 = Array.prototype;
t84[5] = 10;
const v132 = new Array(8);
var arr = v132;
arr[1] = 1;
arr[5] = undefined;
arr.sort();
write(arr);
write("Scenario 8");
const t92 = Array.prototype;
t92[12] = 10;
const v143 = new Array(8);
var arr = v143;
arr[1] = 1;
write(arr.sort());
write(arr);
function comparefn(a150, a151) {
    arr[0] = "test";
    return a150 - a151;
}
const v155 = new Array(2);
var arr = v155;
arr[0] = 12;
arr[1] = 10;
arr.sort(comparefn);
write(arr);
function comparefn(a162, a163) {
    delete arr[0];
    return a162 - a163;
}
const v168 = new Array(3);
var arr = v168;
arr[0] = 12;
arr[2] = 10;
arr.sort(comparefn);
write(arr);
