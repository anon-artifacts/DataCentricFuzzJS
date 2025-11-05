var a = [];
for (let i3 = 0; i3 < 2000; i3++) {
    a.push({ f: i3 });
}
function f() {
    var total = 0;
    for (let i15 = 0; i15 < a.length; i15++) {
        total += a[i15].f;
    }
    return total;
}
f();
var sub = Object.create(a[0]);
f();
