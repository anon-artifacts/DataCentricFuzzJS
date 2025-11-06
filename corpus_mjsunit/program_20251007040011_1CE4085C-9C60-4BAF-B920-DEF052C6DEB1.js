function f0() {
    function getArgs() {
        return arguments;
    }
    var args = getArgs(2, 3);
    if (args.length === 2) {
        print("PASSED");
    } else {
        print(args.length);
    }
}
var test = f0;
test();
