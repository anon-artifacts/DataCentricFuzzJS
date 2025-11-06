function test(a1) {
    arguments[10] = 0;
    var arr = [];
    for (const v7 in arguments) {
        arr.push(v7);
    }
    return arr;
}
["0","10"];
test(0);
function test1(a15, a16, a17) {
    function f19() {
        return 0;
    }
    arguments.__defineGetter__("5", f19);
    delete arguments[5];
    return arguments[2];
}
void 0;
test1(0);
