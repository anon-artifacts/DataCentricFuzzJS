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
function test(a44) {
    const v50 = "@" + a44.name;
    return Object.defineProperty(a44, "name", { enumerable: false, configurable: true, value: v50, writable: false });
}
function getStack(a56) {
    const v57 = (a58) => {
        return a58.replace(/^\s*at (@?(?:new )?[a-zA-Z0-9_\.\[\]]+)(.*)/, "$1");
    };
    function f62(a63) {
        return /^\s*at @?[a-zA-Z0-9_]/.test(a63);
    }
    var stack = a56.stack.split("\n").filter(f62).map(v57);
    if (stack[2] === "assertEqualsAsync") {
        return [];
    }
    return stack.reverse();
}
var log = [];
class C80 extends Promise {
    constructor(a82) {
        const v85 = new Error("Getting Callstack");
        var stack = getStack(v85);
        if (stack.length) {
            var first = -1;
            for (let i93 = 0; i93 < stack.length; ++i93) {
                if (stack[i93][0] === "@") {
                    first = i93;
                    break;
                }
            }
            while (first > 0) {
                stack.shift();
                --first;
            }
            if (stack.length) {
                log.push(("@@Species: [" + stack.join(" > ")) + "]");
            }
        }
        const v115 = new Promise(a82);
        return v115;
    }
}
const v117 = Symbol.species;
Object.defineProperty(Promise, v117, { value: C80, configurable: true, enumerable: false, writable: false });
async function asyncFn() {
    return await "foo";
}
function testInternalOnly() {
    return asyncFn();
}
test(testInternalOnly, "should not call Promise[@@Species]");
[];
log.length = 0;
function testThenOnReturnedPromise() {
    const v136 = (a137) => {
        log.push("Then: " + a137);
        return a137;
    };
    return asyncFn().then(v136);
}
test(testThenOnReturnedPromise);
["@@Species: [@testThenOnReturnedPromise > Promise.then > new FakePromise]","Then: foo"];
