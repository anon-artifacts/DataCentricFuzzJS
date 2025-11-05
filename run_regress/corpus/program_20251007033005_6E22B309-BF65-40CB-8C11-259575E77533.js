function Ctor() {
    this.a = 1;
}
function get_closure() {
    function add_field(a5) {
        a5.c = 3;
        a5.a = a5.a + a5.c;
        return a5.a;
    }
    return add_field;
}
function get_closure2() {
    function cc(a13) {
        a13.c = 3;
        a13.a = a13.a + a13.c;
    }
    return cc;
}
function dummy() {
    function f19() {
        var o = { c: 10 };
        var f1 = get_closure2();
        f1(o);
        f1(o);
        f1(o);
    }
    f19();
}
const v29 = new Ctor();
var o = v29;
function opt() {
    function f32() {
        var f1 = get_closure();
        const v35 = new Ctor();
        f1(v35);
        const v37 = new Ctor();
        f1(v37);
        f1(o);
    }
    f32();
}
opt();
opt();
opt();
dummy();
dummy();
for (let i47 = 0; i47 < 3; i47++) {
    gc(true);
}
o.c = 2.2;
var f2 = get_closure();
const v59 = new Ctor();
f2(v59);
