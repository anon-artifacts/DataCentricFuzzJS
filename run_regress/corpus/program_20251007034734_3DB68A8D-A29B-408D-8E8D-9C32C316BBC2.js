function testCallTypeError(a1) {
    var error = null;
    try {
        var map = WeakMap(a1);
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
const v32 = [[obj1,1],[obj2,2],[obj3,3]];
const v39 = [[obj1,1],[obj1,2],[obj1,3]];
const v41 = { 0: obj2, 1: "O" };
const v43 = { 0: obj3, 1: "K" };
const v46 = [v41,v43,{ 0: obj4, 1: "K" }];
const v54 = new Map([[obj1,1],[obj2,2],[obj3,3]]);
const v62 = new Map([[obj1,1],[obj1,2],[obj1,3]]);
const v64 = { 0: obj2, 1: "O" };
const v66 = { 0: obj3, 1: "K" };
const v70 = new Map([v64,v66,{ 0: obj4, 1: "K" }]);
var pass = [null,,v20,v22,v24,"",v32,v39,v46,v54,v62,v70];
for (const v73 of pass) {
    const v75 = new WeakMap(v73);
    var map = v75;
    testCallTypeError(v73);
}
function testTypeError(a79, a80) {
    var error = null;
    try {
        const v84 = new WeakMap(a79);
        var map = v84;
    } catch(e86) {
        error = e86;
    }
}
const v90 = Symbol("Cappuccino");
const v93 = {};
const v94 = new Date();
const v95 = new Error();
const v99 = Object(Symbol("Matcha"));
function f100() {
}
var nonIterable = [42,v90,true,false,v93,v94,v95,v99,f100];
for (const v103 of nonIterable) {
    testTypeError(v103);
    testCallTypeError(v103);
}
const v112 = [0,1,2,3,4];
const v118 = [0,0,0,1,0];
const v122 = ["A","B","A"];
const v125 = new String("cocoa");
const v127 = new String("Cocoa");
const v134 = new Set([0,1,2,3,4]);
const v140 = new Set([1,1,1,1]);
var notContainNextItem = ["Cocoa",v112,v118,v122,v125,v127,v134,v140];
for (const v143 of notContainNextItem) {
    testTypeError(v143);
    testCallTypeError(v143);
}
const v155 = [[0,1],[1,2],[1,3]];
const v165 = [[1,1],[1,2],[1,3]];
const v168 = { 0: "C", 1: "O" };
const v171 = { 0: "C", 1: "K" };
var nonObjectKeys = [v155,v165,[v168,v171,{ 0: "V", 1: "K" }]];
for (const v178 of nonObjectKeys) {
    testTypeError(v178, "TypeError: Attempted to set a non-object key in a WeakMap");
    testCallTypeError(v178);
}
