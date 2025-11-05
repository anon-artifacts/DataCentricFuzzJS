const v1 = -4;
const t1 = Object.prototype;
t1.prop0 = v1;
function test0(a5) {
    var obj1 = {};
    obj0 = obj1;
    obj1.prop1 += 0;
    if (a5) {
        obj1.prop1 = obj1.prop1.prop0;
    } else {
        obj1.prop1 = obj0.prop0;
        obj0.prop0 = obj1;
    }
}
test0(true);
test0(true);
test0(true);
print("PASSED");
