function assertEvaluateAndIndirectEvalThrows(a1) {
    const v2 = () => {
        return evaluate(a1);
    };
    v2();
    const v7 = () => {
        return eval(a1);
    };
    v7();
}
`var NaN; function NaN() {}`;
`for (var NaN of []); function NaN() {}`;
`{ function NaN() {} } function NaN() {}`;
function f17() {
}
Object.defineProperty(this, "foo", { set: f17 });
`var foo; function foo() {}`;
`for (var foo of []); function foo() {}`;
`{ function foo() {} } function foo() {}`;
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
