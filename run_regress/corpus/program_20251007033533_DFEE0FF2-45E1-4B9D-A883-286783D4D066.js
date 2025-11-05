function f0(a1, a2, a3) {
    if (a1 !== a2) {
        throw ((((a3 + ". Expected '") + a2) + "', but was '") + a1) + "'";
    }
}
var testCase = f0;
function f14(a15, a16) {
    var _x = a15;
    var _y = a16;
    const v19 = () => {
        return (_x + _y) + this.val;
    };
    return v19;
}
var deepScope = f14;
var a = deepScope.call({ val: "A" }, "D", "E");
var b = deepScope.call({ val: "B" }, "D", "F");
var c = deepScope.call({ val: "C" }, "D", "G");
function f43(a44) {
    return a44();
}
var anotherScope = f43;
for (let i48 = 0; i48 < 1000; i48++) {
    const v54 = c();
    testCase(v54, anotherScope.call({ val: "I" }, c), "Error: this is not lexically binded inside of the arrow function #1");
    const v60 = b();
    testCase(v60, anotherScope.call({ val: "J" }, b), "Error: this is not lexically binded inside of the arrow function #2");
    const v66 = a();
    testCase(v66, anotherScope.call({ val: "K" }, a), "Error: this is not lexically binded inside of the arrow function #3");
}
