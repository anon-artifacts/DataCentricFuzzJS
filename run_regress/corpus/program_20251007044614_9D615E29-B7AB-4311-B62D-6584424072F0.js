var flags;
function resetFlags(a3) {
    flags = Array(a3);
    while (a3--) {
        flags[a3] = 0;
    }
}
function assertFlags(a9) {
}
function object_factory(a11, a12, a13) {
    var obj = {};
    function f16() {
        let v17 = flags[a11];
        v17++;
        return a12;
    }
    obj.valueOf = f16;
    return obj;
}
-Infinity;
Math.max();
resetFlags(1);
Math.max(object_factory(0, NaN, [0]));
[1];
resetFlags(2);
Math.max(object_factory(0, NaN, [0,0]), object_factory(1, 0, [1,0]));
[1,1];
resetFlags(3);
Math.max(object_factory(0, NaN, [0,0,0]), object_factory(1, 0, [1,0,0]), object_factory(2, 1, [1,1,0]));
[1,1,1];
resetFlags(3);
Math.max(object_factory(0, 2, [0,0,0]), object_factory(1, 0, [1,0,0]), object_factory(2, NaN, [1,1,0]));
[1,1,1];
resetFlags(3);
Math.max(object_factory(0, 2, [0,0,0]), object_factory(1, 0, [1,0,0]), object_factory(2, 1, [1,1,0]));
[1,1,1];
+Infinity;
Math.min();
resetFlags(1);
Math.min(object_factory(0, NaN, [0]));
[1];
resetFlags(2);
Math.min(object_factory(0, NaN, [0,0]), object_factory(1, 0, [1,0]));
[1,1];
resetFlags(3);
Math.min(object_factory(0, NaN, [0,0,0]), object_factory(1, 0, [1,0,0]), object_factory(2, 1, [1,1,0]));
[1,1,1];
resetFlags(3);
Math.min(object_factory(0, 2, [0,0,0]), object_factory(1, 0, [1,0,0]), object_factory(2, NaN, [1,1,0]));
[1,1,1];
resetFlags(3);
Math.min(object_factory(0, 2, [0,0,0]), object_factory(1, 0, [1,0,0]), object_factory(2, 1, [1,1,0]));
[1,1,1];
