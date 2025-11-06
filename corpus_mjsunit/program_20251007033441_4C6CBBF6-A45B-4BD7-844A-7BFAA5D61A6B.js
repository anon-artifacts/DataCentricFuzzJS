var array = [[{}],[1.1]];
function transition() {
    for (let i8 = 0; i8 < array.length; i8++) {
        var arr = array[i8];
        arr[0] = {};
    }
}
var double_arr2 = [1.1,2.2];
var flag = 0;
function swap() {
    try {
    } catch(e24) {
    }
    if (flag == 1) {
        array[1] = double_arr2;
    }
}
var expected = 6.176516726456e-312;
function f() {
    swap();
    double_arr2[0] = 1;
    transition();
    double_arr2[1] = expected;
}
for (let i34 = 0; i34 < 3; i34++) {
    f();
}
flag = 1;
f();
double_arr2[1];
