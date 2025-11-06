function Parent() {
}
function Child() {
}
const v2 = new Parent();
Child.prototype = v2;
const v3 = new Child();
var child = v3;
function crash() {
    return child.__proto__;
}
crash();
crash();
function f10() {
    print("A");
}
Parent.prototype.__defineSetter__("foo", f10);
function f17() {
    print("B");
}
Parent.prototype.__defineSetter__("foo", f17);
crash();
const t20 = Object.prototype;
delete t20.__proto__;
crash();
