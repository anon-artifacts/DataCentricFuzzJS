var t;
function f2() {
    function* f3() {
        yield k();
    }
    t = f3();
    function h() {
    }
    function k() {
        function f10() {
            h();
        }
        return f10;
    }
}
f2();
t.next();
