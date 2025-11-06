function mk() {
    function f1() {
    }
    return f1;
}
const t5 = mk();
t5();
const t6 = mk();
t6();
var o = {};
o.func = mk();
function cmp(a11, a12) {
    return a12 === a11.func;
}
cmp(o, o.func);
cmp(o, o.func);
cmp(o, o.func);
