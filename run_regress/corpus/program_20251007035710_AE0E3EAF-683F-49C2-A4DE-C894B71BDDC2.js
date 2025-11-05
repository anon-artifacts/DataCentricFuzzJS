a = [];
for (let i3 = 0; i3 < 1000; i3++) {
    a[i3] = i3;
}
function foo(a11) {
    for (const v12 in a11) {
    }
}
if (typeof schedulegc != "undefined") {
    schedulegc(100);
}
foo(a);
