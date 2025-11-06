var data = ["a",1,{}];
const v6 = new Set(data);
var s1 = v6;
const v8 = new Set(data);
var s2 = v8;
const t5 = Set.prototype;
delete t5.delete;
const t6 = Set.prototype;
delete t6.iterator;
s1.clear();
s1.size;
function f17() {
    throw "FAIL";
}
const t14 = Set.prototype;
t14.delete = f17;
function f20() {
    throw "FAIL";
}
const t19 = Set.prototype;
t19.iterator = f20;
s2.clear();
s2.size;
