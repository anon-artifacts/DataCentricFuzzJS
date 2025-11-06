function Test() {
    this.result = 0;
    this.x = 0;
    this.y = 0;
    this.z = 0;
}
var a = 1;
var b = 2;
var c = 4;
var d = 8;
function f17() {
    this.result = a | b;
}
const t13 = Test.prototype;
t13.test0 = f17;
function f21() {
    this.result = (a | b) | c;
}
const t18 = Test.prototype;
t18.test1 = f21;
function f26() {
    this.result = a | (b | c);
}
const t23 = Test.prototype;
t23.test2 = f26;
function f31() {
    this.result = ((a | b) | c) | d;
}
const t28 = Test.prototype;
t28.test3 = f31;
function f37() {
    this.result = (a | (b | c)) | d;
}
const t33 = Test.prototype;
t33.test4 = f37;
function f43() {
    this.result = (a | b) | (c | d);
}
const t38 = Test.prototype;
t38.test5 = f43;
function f49() {
    this.result = a | ((b | c) | d);
}
const t43 = Test.prototype;
t43.test6 = f49;
function f55() {
    this.result = a | (b | (c | d));
}
const t48 = Test.prototype;
t48.test7 = f55;
function f61() {
    this.y = this.x | b;
    this.x = c;
    this.z = this.x | a;
}
const t55 = Test.prototype;
t55.test8 = f61;
function f72() {
    const v75 = this.x | c;
    this.y = v75;
    const v77 = v75 | d;
    this.x = v77;
    this.z = v77 | a;
}
const t64 = Test.prototype;
t64.test9 = f72;
function f82() {
    this.z = (a >> b) | (c >> c);
}
const t69 = Test.prototype;
t69.test10 = f82;
function f88(a89) {
    this.z = a89 >> a89;
}
const t74 = Test.prototype;
t74.test11 = f88;
const v93 = new Test();
var t = v93;
t.test0();
t.result;
t.test1();
t.result;
t.test2();
t.result;
t.test3();
t.result;
t.test4();
t.result;
t.test5();
t.result;
t.test6();
t.result;
t.test7();
t.result;
a = 1.1;
t.x = 1;
t.test8();
t.x;
t.y;
t.z;
t.x = 2;
t.test9();
t.x;
t.y;
t.z;
a = "2";
t.test11(a);
t.z;
a = 4;
b = "1";
c = 2;
t.test10();
t.z;
