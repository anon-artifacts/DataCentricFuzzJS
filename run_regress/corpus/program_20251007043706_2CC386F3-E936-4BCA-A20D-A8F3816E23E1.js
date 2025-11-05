try {
    function TestFunc() {
        var a;
        function outer() {
            function inner() {
            }
            inner();
            var o = { p1: 1 };
            with (o) {
                outer();
                p1++;
            }
        }
        outer();
    }
    TestFunc();
} catch(e15) {
    if (e15.message == "Out of stack space") {
        print("PASSED");
    }
}
