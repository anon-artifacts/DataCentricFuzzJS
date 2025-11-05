console.log("Tests that using an argument as a captured variable, in the legitimate sense rather than the function.arguments sense, works as expected.");
function makeCounter(a4) {
    function f5() {
        return ++a4;
    }
    return f5;
}
for (let i8 = 0; i8 < 100; ++i8) {
    var counter = makeCounter(i8);
    for (let i17 = 0; i17 < 10; ++i17) {
        counter();
    }
}
