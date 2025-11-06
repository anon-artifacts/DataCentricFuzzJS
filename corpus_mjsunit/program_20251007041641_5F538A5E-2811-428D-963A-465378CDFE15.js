actual = "";
expected = "g,g,g,g,f,";
function test() {
    var testargs = arguments;
    function f7(a8, a9) {
        var args = [testargs,arguments];
        return args[args][0];
    }
    var f = f7;
    var arr = [0,0,0,0,1];
    for (let i24 = 0; i24 < arr.length; i24++) {
        arr[i24] = f("f", arr[arr]);
    }
    try { appendToActual(arr); } catch (e) {}
}
try { test("g"); } catch (e) {}
