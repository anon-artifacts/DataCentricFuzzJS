function props(a1) {
    var array = [];
    for (const v4 in a1) {
        array.push(v4);
    }
    return array.sort();
}
function f1() {
    this.x = 1;
}
function f2(a11) {
    this.x = a11;
}
function f3(a14) {
    this.x = a14;
    this.y = 1;
    this.z = f1;
}
function f4(a20) {
    this.x = a20;
    this.y = 1;
    if (a20 == 1) {
        return;
    }
    this.z = f1;
}
const v27 = new f1();
o1_1 = v27;
o1_1.x;
const v33 = new f1();
o1_2 = v33;
o1_1.x;
["x"];
props(o1_1);
["x"];
props(o1_2);
const v48 = new f2(0);
o2_1 = v48;
const v51 = new f2(0);
o2_2 = v51;
["x"];
props(o2_1);
["x"];
props(o2_2);
const v62 = new f3(0);
o3_1 = v62;
const v65 = new f3(0);
o3_2 = v65;
["x","y","z"];
props(o3_1);
["x","y","z"];
props(o3_2);
const v80 = new f4(0);
o4_0_1 = v80;
const v83 = new f4(0);
o4_0_2 = v83;
["x","y","z"];
props(o4_0_1);
["x","y","z"];
props(o4_0_2);
const v98 = new f4(1);
o4_1_1 = v98;
const v101 = new f4(1);
o4_1_2 = v101;
["x","y"];
props(o4_1_1);
["x","y"];
props(o4_1_2);
function f5(a114, a115) {
    this.x = a114;
    this.y = a115;
}
function f6(a119, a120) {
    this.y = a120;
    this.x = a119;
}
function f7(a124, a125, a126) {
    this.x = a124;
    this.y = a125;
}
function testArgs(a130) {
    const v131 = new a130();
    obj = v131;
    ["x","y"];
    props(obj);
    void 0;
    obj.x;
    void 0;
    obj.y;
    const v145 = new a130("x");
    obj = v145;
    ["x","y"];
    props(obj);
    obj.x;
    void 0;
    obj.y;
    const v157 = new a130("x", "y");
    obj = v157;
    ["x","y"];
    props(obj);
    obj.x;
    obj.y;
    const v169 = new a130("x", "y", "z");
    obj = v169;
    ["x","y"];
    props(obj);
    obj.x;
    obj.y;
}
for (let i179 = 0; i179 < 10; i179++) {
    testArgs(f5);
    testArgs(f6);
    testArgs(f7);
}
function g() {
    this.x = 1;
}
const v191 = new g();
o = v191;
o.x;
const v196 = new g();
o = v196;
o.x;
g.prototype = { y: 2 };
const v201 = new g();
o = v201;
o.x;
o.y;
const v206 = new g();
o = v206;
o.x;
o.y;
