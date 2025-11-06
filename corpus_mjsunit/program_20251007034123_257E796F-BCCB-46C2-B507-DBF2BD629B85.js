var count = 0;
function Parent() {
    this.log("Parent ctor");
    this.meth1();
    this.log("data3 before : " + this.data3);
    this.meth2();
    this.log("data3 after : " + this.data3);
    this.log("");
    if (count++) {
        this.data3;
    }
}
function f29() {
    this.log("Parent.meth1()");
}
const t15 = Parent.prototype;
t15.meth1 = f29;
function f34() {
    this.log("Parent.meth2()");
    this.data4 = "x";
}
const t21 = Parent.prototype;
t21.meth2 = f34;
function f41(a42) {
    print(a42);
}
const t26 = Parent.prototype;
t26.log = f41;
function ParentEmptyCtor() {
}
ParentEmptyCtor.prototype = Parent.prototype;
function ChildA() {
    this.log("ChildA ctor");
    Parent.call(this);
}
const v54 = new ParentEmptyCtor();
ChildA.prototype = v54;
const t37 = ChildA.prototype;
t37.constructor = ChildA;
function f56() {
    this.log("ChildA.meth1()");
    this.data3 = "z";
}
const t43 = ChildA.prototype;
t43.meth1 = f56;
function f63() {
    this.log("ChildA.meth2()");
}
const t48 = ChildA.prototype;
t48.meth2 = f63;
function ChildB() {
    this.log("ChildB ctor");
    Parent.call(this);
}
const v74 = new ParentEmptyCtor();
ChildB.prototype = v74;
const t56 = ChildB.prototype;
t56.constructor = ChildB;
function demo() {
    new ChildB();
    new ChildA();
}
demo();
