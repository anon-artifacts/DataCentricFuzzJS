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
const v45 = Symbol.toStringTag;
const v51 = {
    [v45]: "LexicalThis",
    run(a47) {
        const v48 = async (a49) => {
            return `${a47}. ${a49}: ${this}`;
        };
        return v48;
    },
};
var O = v51;
const v54 = () => {
    const t36 = O.run(1);
    return t36("PASS");
};
v54();
const v61 = Symbol.toStringTag;
const v63 = O.run(2);
var O2 = { [v61]: "LexicalThis", run: v63 };
const v67 = () => {
    return O2.run("PASS");
};
v67();
