var _quit;
function testNestedDeepBail() {
    _quit = false;
    function loop() {
        for (let i6 = 0; i6 < 4; i6++) {
        }
    }
    loop();
    function f() {
        loop();
        _quit = true;
    }
    var stk = [[1],[],[],[],[]];
    while (!_quit) {
        stk.pop().forEach(f);
    }
}
testNestedDeepBail();
