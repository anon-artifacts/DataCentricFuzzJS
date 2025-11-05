function foo(a1) {
    return arguments;
}
function bar(a4, a5) {
    var args = foo(a4, a5, 13);
    return (((args.length == 3) && (args[0] == 11)) && (args[1] == 12)) && (args[2] == 13);
}
bar(11, 12);
