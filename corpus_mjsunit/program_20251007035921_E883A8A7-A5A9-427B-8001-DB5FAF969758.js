function testMultipleArgumentsObjects() {
    var testargs = arguments;
    function f3(a4, a5) {
        var args = [testargs,arguments];
        return args[a5][0];
    }
    var f = f3;
    var arr = [0,0,0,0,1];
    for (let i20 = 0; i20 < arr.length; i20++) {
        arr[i20] = f("f", arr[i20]);
    }
    return arr + "";
}
testMultipleArgumentsObjects();
