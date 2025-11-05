const v1 = { a: 1 };
const v5 = Object.create({ a: 2 });
var missingObjs = [v1,v5,{}];
function testMissing(a10) {
    var res = 0;
    for (let i14 = 0; i14 < 1000; i14++) {
        for (let i21 = 0; i21 < missingObjs.length; i21++) {
            var obj = missingObjs[i21];
            if (i21 < a10) {
                res += obj.a;
            }
        }
    }
    return res;
}
testMissing(2);
testMissing(3);
const v38 = { a: 1 };
const v39 = { length: v38 };
const v41 = { a: 2 };
var lengthObjs = [v39,Object.create({ length: v41 }),[0,1]];
function testArrayLength(a50) {
    var res = 0;
    for (let i54 = 0; i54 < 1000; i54++) {
        for (let i61 = 0; i61 < lengthObjs.length; i61++) {
            var obj = lengthObjs[i61];
            if (i61 < a50) {
                res += obj.length.a;
            }
        }
    }
    return res;
}
testArrayLength(2);
testArrayLength(3);
