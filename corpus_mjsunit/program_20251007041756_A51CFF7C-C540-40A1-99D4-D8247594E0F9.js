console.log("Test for error messages on function.apply");
try {
    function foo() {
    }
    foo.apply(null, 20);
} catch(e7) {
}
try {
    function foo() {
    }
    foo.apply(null, "hello");
} catch(e12) {
}
try {
    function foo() {
    }
    foo.apply(null, true);
} catch(e17) {
}
