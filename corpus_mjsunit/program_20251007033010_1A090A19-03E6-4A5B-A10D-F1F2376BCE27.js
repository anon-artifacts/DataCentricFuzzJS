console.log("This tests sorting an array with more than 10,000 values.");
var test = [];
for (let i6 = 0; i6 < 10010; i6++) {
    test.push(10009 - i6);
}
function f15(a16, a17) {
    return a16 - a17;
}
test.sort(f15);
test.length;
test[9999];
test[10000];
test.slice(0, 20).join(", ");
test.slice(9990, 10010).join(", ");
var testNoValues = [];
testNoValues.length = 10110;
function f36(a37, a38) {
    return a37 < a38;
}
testNoValues.sort(f36);
testNoValues.length;
testNoValues[9999];
testNoValues[10000];
