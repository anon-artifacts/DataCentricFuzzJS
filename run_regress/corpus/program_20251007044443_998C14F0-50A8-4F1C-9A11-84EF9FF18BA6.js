function run() {
    function f1() {
        function f2() {
            for (i = 0; i != (1 << 10); ++i) {
                new Object();
            }
            var big = unescape("%udddd");
            while (big.length != 1048576) {
                big += big;
            }
            for (i = 0; i != 32; ++i) {
                new String(big + i);
            }
            return "whatever";
        }
        const v33 = { toJSON: f2 };
        function f34() {
            function f35() {
                return "key";
            }
            return { next: f35 };
        }
        return { key: v33, __iterator__: f34 };
    }
    var obj = { toJSON: f1 };
    function f41(a42, a43) {
        let v45 = this[0];
        v45++;
        return a43;
    }
    var repl = f41;
    JSON.stringify(obj, repl);
}
run();
