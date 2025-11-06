function TestOptimizedLiteral(a1, a2) {
    a2(a1(1, 2, 3), 1, 2, 3);
    a2(a1(3, 5, 7), 3, 5, 7);
    a2(a1(11, 23, 42), 11, 23, 42);
}
function create_arr_shallow(a28, a29, a30) {
    return [0,a28,0,a29,0,a30];
}
function verify_arr_shallow(a36, a37, a38, a39) {
    a36.length;
    a36[0];
    a36[1];
    a36[2];
    a36[3];
    a36[4];
    a36[5];
}
TestOptimizedLiteral(create_arr_shallow, verify_arr_shallow);
function create_arr_nested(a53, a54, a55) {
    return [[0,a53],[a54,a55],[1,2],3];
}
function verify_arr_nested(a65, a66, a67, a68) {
    a65.length;
    a65[0].length;
    a65[0][0];
    a65[0][1];
    a65[1].length;
    a65[1][0];
    a65[1][1];
    a65[2].length;
    a65[2][0];
    a65[2][1];
    a65[3];
}
TestOptimizedLiteral(create_arr_nested, verify_arr_nested);
function create_obj_shallow(a99, a100, a101) {
    const v104 = {
        x: a99,
        y: a100,
        z: a101,
        v: "foo",
        9: "bar",
    };
    return v104;
}
function verify_obj_shallow(a106, a107, a108, a109) {
    a106.x;
    a106.y;
    a106.z;
    a106.v;
    a106[9];
}
TestOptimizedLiteral(create_obj_shallow, verify_obj_shallow);
function create_obj_nested(a119, a120, a121) {
    const v122 = { v: a119, w: a120 };
    const v125 = { v: 1, w: 2 };
    const v128 = {
        x: v122,
        y: v125,
        z: a121,
        v: "foo",
        9: "bar",
    };
    return v128;
}
function verify_obj_nested(a130, a131, a132, a133) {
    a130.x.v;
    a130.x.w;
    a130.y.v;
    a130.y.w;
    a130.z;
    a130.v;
    a130[9];
}
TestOptimizedLiteral(create_obj_nested, verify_obj_nested);
function create_mixed_nested(a151, a152, a153) {
    const v156 = [1,2];
    const v157 = [a151,a152];
    const v159 = { v: "foo" };
    const v161 = {
        x: v156,
        y: v157,
        z: a153,
        v: v159,
        9: "bar",
    };
    return v161;
}
function verify_mixed_nested(a163, a164, a165, a166) {
    a163.x.length;
    a163.x[0];
    a163.x[1];
    a163.y.length;
    a163.y[0];
    a163.y[1];
    a163.z;
    a163.v.v;
    a163[9];
}
TestOptimizedLiteral(create_mixed_nested, verify_mixed_nested);
