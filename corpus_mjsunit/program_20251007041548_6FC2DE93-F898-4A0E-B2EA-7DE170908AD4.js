function write(a1) {
    print(a1 + "");
}
function printDesc(a7) {
    write(a7);
    write(a7.set);
    write(a7.get);
    var s = (((((("V:" + a7.value) + ", W:") + a7.writable) + ", E:") + a7.enumerable) + ", C:") + a7.configurable;
    write(s += ((", get:" + a7.hasOwnProperty("get")) + ", set:") + a7.hasOwnProperty("set"));
}
function f() {
    return true;
}
var g = f.bind();
var callerDesc = Object.getOwnPropertyDescriptor(g.__proto__, "caller");
var getter = callerDesc.get;
write("***************** getter ***************** ");
write("length = " + getter.length);
printDesc(Object.getOwnPropertyDescriptor(getter, "length"));
write("***************** g.caller ***************** ");
printDesc(callerDesc);
write("***************** g.arguments ***************** ");
printDesc(Object.getOwnPropertyDescriptor(g.__proto__, "arguments"));
write("***************** try to set/get the caller/arguments *****************");
try {
    g.caller = {};
    write("fail1");
} catch(e73) {
    write("Set caller passed");
}
try {
    write(g.caller);
    write("fail2");
} catch(e80) {
    write("Get caller passed");
}
try {
    g.arguments = {};
    write("fail3");
} catch(e86) {
    write("Set arguments passed");
}
try {
    write(g.arguments);
    write("fail4");
} catch(e93) {
    write("Get arguments passed");
}
