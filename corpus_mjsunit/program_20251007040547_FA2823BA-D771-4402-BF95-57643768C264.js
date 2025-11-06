function Receiver() {
    this.receiver = "receiver";
}
function Proto() {
    this.proto = "proto";
}
function f(a7) {
    return a7.foo;
}
const v9 = new Receiver();
var rec = v9;
var proto = rec.__proto__;
f(rec);
f(rec);
const v17 = new Proto();
var p2 = v17;
p2.__proto__ = null;
proto.__proto__ = p2;
f(rec);
p2.foo = "bar";
f(rec);
delete p2.foo;
p2.secret = "GAME OVER";
f(rec);
