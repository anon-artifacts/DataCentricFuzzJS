function SlowObject() {
    this.foo = 1;
    this.bar = 2;
    this.qux = 3;
    this.z = 4;
    delete this.qux;
}
function SlowObjectWithBaz() {
    const v12 = new SlowObject();
    var o = v12;
    o.baz = 4;
    return o;
}
function Load(a16) {
    return a16.baz;
}
for (let i19 = 0; i19 < 10; i19++) {
    const v25 = new SlowObject();
    var o1 = v25;
    var o2 = SlowObjectWithBaz();
    Load(o1);
    Load(o2);
}
function SlowPrototype() {
    this.foo = 1;
}
const t26 = SlowPrototype.prototype;
t26.bar = 2;
const t28 = SlowPrototype.prototype;
t28.baz = 3;
const t30 = SlowPrototype.prototype;
t30.z = 4;
const t32 = SlowPrototype.prototype;
delete t32.baz;
const v44 = new SlowPrototype();
var slow_proto = v44;
function ic() {
    return slow_proto.bar;
}
ic();
ic();
const v50 = new SlowPrototype();
var fast_proto = v50;
