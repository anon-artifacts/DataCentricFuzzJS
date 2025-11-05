function testInterpreterReentry5() {
    var arr = [0,1,2,3,4];
    function f9() {
        return 1000;
    }
    arr.__defineGetter__("4", f9);
    for (let i13 = 0; i13 < 5; i13++) {
        arr[i13];
    }
    for (const v20 in arr) {
        arr[v20];
    }
}
testInterpreterReentry5();
