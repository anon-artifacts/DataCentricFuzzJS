function testOneElementArrayVariableIndex() {
    function f(a2) {
        const v5 = new Array("first");
        const a = v5;
        return a[a2];
    }
    f(0);
    f(0);
    f(0);
}
testOneElementArrayVariableIndex();
function testTwoElementArrayVariableIndex() {
    function f(a20) {
        const v24 = new Array("first", "second");
        const a = v24;
        return a[a20];
    }
    f(0);
    f(1);
    f(0);
    f(1);
}
testTwoElementArrayVariableIndex();
