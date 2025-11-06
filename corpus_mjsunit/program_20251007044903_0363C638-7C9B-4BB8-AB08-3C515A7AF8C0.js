function f0() {
}
function test() {
    var returnCalled = 0;
    var returnCalledExpected = 0;
    var catchEntered = 0;
    var finallyEntered = 0;
    var finallyEnteredExpected = 0;
    var iterable = {};
    function f14() {
        returnCalled++;
        throw 42;
    }
    const v17 = { ret: f14 };
    let v19;
    try { v19 = makeIterator(v17); } catch (e) {}
    iterable[Symbol?.iterator] = v19;
    function f22() {
        for (const v23 of iterable) {
            try {
                return;
            } catch(e24) {
                catchEntered++;
            } finally {
                finallyEntered++;
            }
        }
    }
    try { f22(); } catch (e) {}
    ++returnCalledExpected;
    ++finallyEnteredExpected;
}
try { test(); } catch (e) {}
if (typeof f0 === "function") {
    f0(0, 0);
}
