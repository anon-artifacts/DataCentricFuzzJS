console.log("This test checks for potential edge case bugs with certain math transforms involving multiplication by 1 and unary plus.");
const v7 = -1;
const v10 = -0;
const v12 = -Infinity;
const v16 = {
    someInt: 42,
    someFloat: 42.42,
    one: 1,
    minusOne: v7,
    zero: 0,
    minusZero: v10,
    infinity: Infinity,
    minusInfinity: v12,
    notANumber: NaN,
    nonNumberString: "x",
    someFloatString: "42.42",
};
var values = v16;
var numberForString = { nonNumberString: "notANumber", someFloatString: "someFloat" };
for (const v22 in values) {
    var numForStr = numberForString[v22] ? numberForString[v22] : v22;
    +values[v22];
    1 * values[v22];
}
for (const v32 in values) {
    var numForStr1 = numberForString[v32] ? numberForString[v32] : v32;
    for (const v37 in values) {
        var numForStr2 = numberForString[v37] ? numberForString[v37] : v37;
        values[v32];
        values[v37];
    }
}
