const v2 = new Array(10);
var a = v2;
function test_load_set_smi(a5) {
    a5[0] = 1;
    a5[0] = 1;
    return 1;
}
test_load_set_smi(a);
test_load_set_smi(a);
test_load_set_smi(123);
function test_load_set_smi_2(a12) {
    a12[0] = 1;
    a12[0] = 1;
    return 1;
}
test_load_set_smi_2(a);
test_load_set_smi_2(a);
test_load_set_smi_2(0);
const v19 = new Object();
var b = v19;
function test_load_set_smi_3(a22) {
    a22[0] = 1;
    a22[0] = 1;
    return 1;
}
test_load_set_smi_3(b);
test_load_set_smi_3(b);
test_load_set_smi_3(123);
function test_load_set_smi_4(a29) {
    a29[0] = 1;
    a29[0] = 1;
    return 1;
}
test_load_set_smi_4(b);
test_load_set_smi_4(b);
test_load_set_smi_4(0);
