var data = [["a",1],["b",2]];
const v9 = new Map(data);
var m1 = v9;
const v11 = new Map(data);
var m2 = v11;
const t5 = Map.prototype;
delete t5.delete;
const t6 = Map.prototype;
delete t6.iterator;
m1.clear();
m1.size;
function f20() {
    throw "FAIL";
}
const t14 = Map.prototype;
t14.delete = f20;
function f23() {
    throw "FAIL";
}
const t19 = Map.prototype;
t19.iterator = f23;
m2.clear();
m2.size;
