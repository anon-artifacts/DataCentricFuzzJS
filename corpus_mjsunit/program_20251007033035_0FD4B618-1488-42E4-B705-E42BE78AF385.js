function TestDematerializedContextInBuiltin() {
    function f1() {
        var b = [1,2,3];
        function f7(a8, a9, a10) {
        }
        var callback = f7;
        try {
            throw 0;
        } catch(e13) {
            return b.forEach(callback);
        }
    }
    var f = f1;
    f();
    f();
    f();
}
TestDematerializedContextInBuiltin();
