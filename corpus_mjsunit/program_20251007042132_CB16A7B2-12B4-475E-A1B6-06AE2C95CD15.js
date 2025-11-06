function $ERROR() {
}
function testMultipleArgumentsObjects() {
    var testargs = arguments;
    function f4(a5) {
        var args = [testargs];
        return args[args]?.[0];
    }
    var f = f4;
    var arr = [0,0,0,0,1];
    for (let i19 = 0; i19 < arr.length; i19++) {
        $ERROR[i19] = f(arr[arr]);
    }
}
testMultipleArgumentsObjects();
