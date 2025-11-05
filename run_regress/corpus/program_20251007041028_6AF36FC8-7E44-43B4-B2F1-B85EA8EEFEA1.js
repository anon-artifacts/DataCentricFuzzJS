var minus_three_quarters = -0.75;
function foo() {
    return Math.abs(minus_three_quarters);
}
for (let i7 = 0; i7 < 10000; i7++) {
    var result = foo();
    if (result < 0) {
        throw "Error: Math.abs returned a negative value.";
    }
}
