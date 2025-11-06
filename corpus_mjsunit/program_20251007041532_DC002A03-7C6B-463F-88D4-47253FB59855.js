function f0() {
}
function p() {
}
function test() {
    var counter = 0;
    function f(a6) {
        try {
            throw 42;
        } catch(e8) {
            function f10() {
            }
            p(f10);
            counter = 1;
        }
    }
    f(2);
}
test();
f0(0, 0, "ok");
