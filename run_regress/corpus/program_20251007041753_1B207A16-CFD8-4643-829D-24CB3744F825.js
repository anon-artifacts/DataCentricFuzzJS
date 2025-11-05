console.log("Tests that a side-effecting ValueToInt32 only executes once when there is an OSR exit.");
function foo(a4, a5) {
    var result = a4 | a5.f;
    return [result,a4];
}
var counter = 0;
for (let i13 = 0; i13 < 100; ++i13) {
    function f19() {
        counter++;
        return 1;
    }
    const v22 = { valueOf: f19 };
    const v27 = i13 == 99 ? 5.5 : 5;
    var result = foo(v22, { f: v27 });
    result.length;
    result[0];
}
