function InlinedThrowAtEndOfTry() {
    function g() {
        throw "boom";
    }
    function f() {
        try {
            try { g(); } catch (e) {}
        } catch(e5) {
        }
    }
    f();
    f();
    f();
}
InlinedThrowAtEndOfTry();
function InlinedThrowInFrontOfTry() {
    function g() {
        throw "boom";
    }
    function f() {
        try { g(); } catch (e) {}
        try {
            Math.random();
        } catch(e18) {
        }
    }
    f();
    f();
    f();
}
InlinedThrowInFrontOfTry();
