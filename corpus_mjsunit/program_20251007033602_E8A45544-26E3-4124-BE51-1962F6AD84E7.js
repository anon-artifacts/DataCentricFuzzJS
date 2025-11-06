function Hest() {
}
function Svin() {
}
function f2() {
    o.three();
}
const t7 = Svin.prototype;
t7.two = f2;
function f6(a7) {
    a7.two();
}
const t12 = Hest.prototype;
t12.one = f6;
function f10() {
    if (v == 42) {
        const v16 = new Error("urg");
        throw v16;
    }
}
const t20 = Hest.prototype;
t20.three = f10;
const v18 = new Hest();
var o = v18;
const v20 = new Svin();
var s = v20;
var v = 0;
for (let i25 = 0; i25 < 5; i25++) {
    o.one(s);
}
o.one(s);
v = 42;
try {
    o.one(s);
} catch(e35) {
    var stack = e35.stack.toString();
    var p3 = stack.indexOf("at Hest.three");
    var p2 = stack.indexOf("at Svin.two");
    var p1 = stack.indexOf("at Hest.one");
    p3 != -1;
    p2 != -1;
    p1 != -1;
    p3 < p2;
    p2 < p1;
    stack.indexOf("38:56") != -1;
    stack.indexOf("34:51") != -1;
    stack.indexOf("36:38") != -1;
    stack.indexOf("54:5") != -1;
}
