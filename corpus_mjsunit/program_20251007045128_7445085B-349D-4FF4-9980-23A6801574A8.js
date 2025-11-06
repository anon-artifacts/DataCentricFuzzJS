function test(a1) {
    return Array(a1);
}
function test2() {
    return test(2);
}
function test3(a8) {
    a8[0] = 1;
}
test(0);
var smi_array = [1,2];
smi_array[2] = 3;
test3(smi_array);
var broken_array = test2();
test3(broken_array);
1 + broken_array[0];
