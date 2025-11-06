function f(a1) {
    function x() {
    }
    arguments[0] = 42;
    return x;
}
const t6 = f(0);
t6();
function g(a10) {
    function x() {
    }
    arguments[0];
    x();
}
g(0);
var caught = false;
try {
    function h(a20) {
        function x() {
        }
    }
    h.blah.baz;
} catch(e24) {
    caught = true;
}
