function test(a1) {
    /bar/.exec("foo bar baz");
    function validateContexts(a6) {
        if (RegExp.leftContext !== "foo ") {
            throw (("Error: " + a6) + ": bad leftContext: ") + RegExp.leftContext;
        }
        if (RegExp.rightContext !== " baz") {
            throw (("Error: " + a6) + ": bad rightContext: ") + RegExp.rightContext;
        }
    }
    if (a1 === "before") {
        validateContexts("before");
    }
    RegExp.input = "";
    if (a1 === "after") {
        validateContexts("after");
    }
}
test("before");
test("after");
