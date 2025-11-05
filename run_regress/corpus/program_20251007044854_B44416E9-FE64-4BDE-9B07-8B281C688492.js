var x = {};
function f(a3) {
    a3[200000000] = x;
}
const v6 = new Array(100000);
f(v6);
f([]);
f([]);
