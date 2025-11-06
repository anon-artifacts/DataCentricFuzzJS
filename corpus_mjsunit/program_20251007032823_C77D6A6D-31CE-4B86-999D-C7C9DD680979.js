console.log("Tests that an array length access being dead does not result in register allocation failures.");
function foo(a4) {
    var y = a4.f.length;
    return 42;
}
for (let i10 = 0; i10 < 200; i10++) {
    const v16 = [];
    foo({ f: v16 });
}
const v19 = [];
foo({ f: v19 });
