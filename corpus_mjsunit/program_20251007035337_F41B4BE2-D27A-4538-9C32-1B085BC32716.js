function runTest() {
    if (Math) {
        function createTester(a3) {
            function f4() {
                return a3.blah;
            }
            return f4;
        }
        return createTester({ blah: "bar" });
    }
}
const t11 = runTest();
t11();
