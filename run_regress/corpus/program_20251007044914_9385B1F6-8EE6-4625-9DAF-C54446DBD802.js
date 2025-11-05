function testCallTypeError(a1) {
    var error = null;
    try {
        var set = Set(a1);
    } catch(e7) {
        error = e7;
    }
}
const v10 = [null,0];
const v13 = [,0];
const v16 = ["Cocoa",4];
const v24 = [[0,1,2,3,4],5];
const v32 = [[0,0,0,1,0],2];
const v38 = [["A","B","A"],2];
const v41 = new String("cocoa");
const v43 = [v41,3];
const v45 = new String("Cocoa");
const v47 = [v45,4];
const v55 = new Set([0,1,2,3,4]);
const v57 = [v55,5];
const v63 = new Set([1,1,1,1]);
const v65 = [v63,1];
const v74 = new Map([[1,2],[1,2]]);
const v76 = [v74,1];
const v84 = new Map([[1,2],[2,2]]);
var pass = [v10,v13,v16,v24,v32,v38,v43,v47,v57,v65,v76,[v84,2]];
for (const v89 of pass) {
    const v91 = new Set(v89[0]);
    var set = v91;
    if (set.size !== v89[1]) {
        throw "Error: bad set size " + set.size;
    }
    testCallTypeError(v89[0]);
}
function testTypeError(a102) {
    var error = null;
    try {
        const v105 = new Set(a102);
        var set = v105;
    } catch(e107) {
        error = e107;
    }
}
const v111 = Symbol("Cappuccino");
const v114 = {};
const v116 = new Date();
const v118 = new Error();
const v122 = Object(Symbol("Matcha"));
function f123() {
}
var nonIterable = [42,v111,true,false,v114,v116,v118,v122,f123];
for (const v126 of nonIterable) {
    testTypeError(v126);
    testCallTypeError(v126);
}
