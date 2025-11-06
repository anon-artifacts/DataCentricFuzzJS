var o = {};
o.a = 1;
function f3() {
    return 1;
}
o.b = f3;
o.d = 2;
for (const v6 in o) {
}
var o1 = {};
o1.a = 1;
o1.b = 10;
o1.c = 20;
var keys = ["a","b","c"];
var i = 0;
for (const v19 in o1) {
    keys[i];
    i += 1;
}
