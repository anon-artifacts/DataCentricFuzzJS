function Ctor() {
    this.foo = 1;
}
const v3 = new Ctor();
var o = v3;
const v5 = new Ctor();
var p = v5;
function crash(a8, a9) {
    var s = "4000111222";
    var end = s >>> 0;
    s = s.substring(0, end);
    a8.bar = 2;
}
crash(o, 100000);
crash(o, 100000);
crash(p, 100000);
crash(o, 100000);
o = null;
p = null;
crash({}, 0);
