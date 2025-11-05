function getTypeName(a1) {
    function f2(a3, a4) {
        return a4;
    }
    Error.prepareStackTrace = f2;
    function f6() {
        const v7 = new Error();
        return v7.stack;
    }
    var stack = f6.call(a1);
    Error.prepareStackTrace = undefined;
    return stack[0].getTypeName();
}
getTypeName(undefined);
getTypeName(null);
getTypeName(1);
getTypeName("");
getTypeName(false);
getTypeName({});
getTypeName([]);
const v35 = {};
const v37 = new Proxy(v35, {});
getTypeName(v37);
function Custom() {
}
const v41 = new Custom();
getTypeName(v41);
