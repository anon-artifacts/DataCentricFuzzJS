function assert(a1) {
}
try { noInline(assert); } catch (e) {}
function shouldThrowTDZ(a5) {
    var hasThrown = false;
    try {
        try { a5(); } catch (e) {}
    } catch(e9) {
    }
}
try { noInline(shouldThrowTDZ); } catch (e) {}
function foo() {
    return lexicalVariableNotYetDefined;
}
function bar() {
    lexicalVariableNotYetDefinedSecond = 300;
    return lexicalVariableNotYetDefinedSecond;
}
