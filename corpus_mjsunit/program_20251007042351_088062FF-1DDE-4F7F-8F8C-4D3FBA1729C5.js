function f0() {
}
function make() {
    var r = {};
    function f4() {
    }
    r.desc = { get: f4 };
    r.a = Object.defineProperty({}, "prop", r.desc);
    r.info = Object.getOwnPropertyDescriptor(r.a, "prop");
    return r;
}
r1 = make();
r1.desc.get;
r1.info.get;
r2 = make();
r1.desc.get === r2.desc.get;
const t11 = r1.info.get;
t11.foo = 42;
r1.desc.get.hasOwnProperty("foo");
!r2.desc.get.hasOwnProperty("foo");
r1.info.get.hasOwnProperty("foo");
!r2.info.get.hasOwnProperty("foo");
f0(0, 0, "ok");
