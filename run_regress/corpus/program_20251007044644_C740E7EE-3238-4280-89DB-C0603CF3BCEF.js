function id(a1) {
    return a1;
}
function LiteralCompareNullDeopt() {
    function f() {
    }
    f();
}
LiteralCompareNullDeopt();
function LiteralCompareUndefinedDeopt() {
    function f() {
    }
    f();
}
LiteralCompareUndefinedDeopt();
function LiteralCompareTypeofDeopt() {
    function f() {
    }
    f();
}
LiteralCompareTypeofDeopt();
