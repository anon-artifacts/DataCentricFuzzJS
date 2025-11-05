var log;
var dstdata = [];
function f5(a6, a7, a8) {
    log.push(["def",a7,a8.value]);
    return true;
}
function f14(a15, a16, a17) {
    log.push(["set",a16,a17]);
    return true;
}
const v23 = new Proxy(dstdata, { defineProperty: f5, set: f14 });
var dst = v23;
function Troop() {
    return dst;
}
Troop.of = Array.of;
log = [];
Troop.of("monkeys", "baboons", "kangaroos");
[["def","0","monkeys"],["def","1","baboons"],["def","2","kangaroos"],["set","length",3]];
