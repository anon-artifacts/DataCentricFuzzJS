function testCallTypeError(a1) {
    var error = null;
    try {
        var set = WeakSet(a1);
    } catch(e7) {
        error = e7;
    }
}
var obj1 = {};
var obj2 = [];
const v13 = new Date();
var obj3 = v13;
const v16 = new Error();
var obj4 = v16;
const v20 = [];
const v22 = new Set();
const v24 = new Map();
const v26 = [obj1,obj2,obj3];
const v27 = [obj1,obj1,obj1];
const v28 = [obj2,obj3,obj4];
const v36 = new Map([[obj1,1],[obj2,2],[obj3,3]]);
const v44 = new Map([[obj1,1],[obj1,2],[obj1,3]]);
const v46 = new Set([obj1,obj2,obj3]);
const v48 = new Set([obj1,obj1,obj1]);
const v50 = { 0: obj2, 1: "O" };
const v52 = { 0: obj3, 1: "K" };
const v56 = new Map([v50,v52,{ 0: obj4, 1: "K" }]);
const v58 = new Set([obj2,obj3,obj4]);
var pass = [null,,v20,v22,v24,"",v26,v27,v28,v36,v44,v46,v48,v56,v58];
for (const v61 of pass) {
    const v63 = new WeakSet(v61);
    var set = v63;
    testCallTypeError(v61);
}
function testTypeError(a67, a68) {
    var error = null;
    try {
        const v72 = new WeakSet(a67);
        var set = v72;
    } catch(e74) {
        error = e74;
    }
}
const v78 = Symbol("Cappuccino");
const v81 = {};
const v82 = new Date();
const v83 = new Error();
const v87 = Object(Symbol("Matcha"));
function f88() {
}
var nonIterable = [42,v78,true,false,v81,v82,v83,v87,f88];
for (const v91 of nonIterable) {
    testTypeError(v91);
    testCallTypeError(v91);
}
var nonObjectKeys = [[0,1,1],[1,1,1],["C","C","V"]];
for (const v108 of nonObjectKeys) {
    testTypeError(v108, "TypeError: Attempted to add a non-object key to a WeakSet");
    testCallTypeError(v108);
}
