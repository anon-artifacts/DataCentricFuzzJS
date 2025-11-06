function BadProto() {
    function f1() {
    }
    this.constant_function = f1;
    this.one = 1;
    this.two = 2;
}
const v7 = new BadProto();
var b1 = v7;
const v9 = new BadProto();
var b2 = v9;
function Ctor() {
}
Ctor.prototype = b1;
const v12 = new Ctor();
var a = v12;
function Two(a15) {
    return a15.two;
}
Two(a);
Two(a);
b2.constant_function = "no longer constant!";
Two(a);
