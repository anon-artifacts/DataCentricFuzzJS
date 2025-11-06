console.log("This test ensures that regeular expression literals are constants, and so persist over multiple executions");
for (let i4 = 0; i4 < 2; i4++) {
    currentRegExp = /a/;
    if (i4) {
        currentRegExp === lastRegExp;
    }
    lastRegExp = currentRegExp;
}
function test1() {
    for (let i19 = 0; i19 < 2; i19++) {
        currentRegExp = /a/;
        if (i19) {
            currentRegExp === lastRegExp;
        }
        lastRegExp = currentRegExp;
    }
}
test1();
function returnRegExpLiteral() {
    return /a/;
}
returnRegExpLiteral() === returnRegExpLiteral();
function returnConditionalRegExpLiteral(a39) {
    if (a39) {
        return /a/;
    }
    return /a/;
}
returnConditionalRegExpLiteral(true) === returnConditionalRegExpLiteral(true);
returnConditionalRegExpLiteral(false) === returnConditionalRegExpLiteral(false);
returnConditionalRegExpLiteral(true) === returnConditionalRegExpLiteral(false);
const t28 = returnRegExpLiteral();
t28.someAddedProperty = true;
try {
    returnRegExpLiteral().someAddedProperty;
} catch(e61) {
}
