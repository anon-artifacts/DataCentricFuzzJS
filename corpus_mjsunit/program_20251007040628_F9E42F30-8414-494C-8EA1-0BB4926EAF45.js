var stack;
var used_custom_lookup = false;
function f4() {
    used_custom_lookup = true;
}
function f6() {
    try {
        f();
    } catch(e9) {
        stack = e9.stack;
    }
}
({ __lookupGetter__: f4, test: f6 }).test();
var expected_message = "ReferenceError: f is not defined";
stack.indexOf(expected_message) >= 0;
