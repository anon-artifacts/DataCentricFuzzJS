try {
    function TestFunc() {
        var a;
        function outer() {
            function inner() {
            }
            inner();
            with ({}) {
                outer();
            }
        }
        outer();
    }
    TestFunc();
} catch(e11) {
    if (e11.message == "Out of stack space") {
        print("PASSED");
    }
}
