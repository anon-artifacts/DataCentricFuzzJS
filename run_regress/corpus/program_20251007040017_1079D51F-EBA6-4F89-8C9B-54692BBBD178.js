function assertEqualsAsync(a1, a2, a3) {
    var actual;
    var hadValue = false;
    var hadError = false;
    var promise = a2();
    if ((typeof promise !== "object") || (typeof promise.then !== "function")) {
        const v29 = new MjsUnitAssertionError((("Expected " + a2.toString()) + " to return a Promise, but it returned ") + PrettyPrint(promise));
        throw v29;
    }
    function f30(a31) {
        hadValue = true;
        actual = a31;
    }
    function f33(a34) {
        hadError = true;
        actual = a34;
    }
    promise.then(f30, f33);
    hadValue || hadError;
    if (hadError) {
        throw actual;
    }
    ("Expected '" + a2.toString()) + "' to produce a value";
}
const v44 = () => {
    function f48() {
        const v49 = async () => {
            return JSON.stringify([...arguments]);
        };
        return v49();
    }
    return f48(1, 2, 3);
};
v44();
const v58 = () => {
    function f62() {
        const v63 = async () => {
            return JSON.stringify([...await arguments]);
        };
        return v63();
    }
    return f62(4, 5, 6);
};
v58();
