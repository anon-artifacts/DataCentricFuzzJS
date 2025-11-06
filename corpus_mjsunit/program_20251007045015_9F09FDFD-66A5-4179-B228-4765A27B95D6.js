function makeProperty(a1, a2) {
    Object.defineProperty(a1, a2, { configurable: false, writable: true, value: "basic" });
}
function test1() {
    var obj = { length: 4 };
    makeProperty(obj, "3");
    try {
        Array.prototype.copyWithin.call(obj, 3, 0);
    } catch(e21) {
    }
}
test1();
function test2() {
    var ta = Int8Array.of(0, 1, 2);
    Object.defineProperty(ta, "length", { value: 4 });
    try {
        Array.prototype.copyWithin.call(ta, 1, 2);
    } catch(e41) {
    }
}
test2();
function test3() {
    var obj = { length: 4 };
    makeProperty(obj, "3");
    try {
        Array.prototype.pop.call(obj);
    } catch(e53) {
    }
}
test3();
function test4() {
    var obj = { length: 4 };
    makeProperty(obj, "3");
    try {
        Array.prototype.shift.call(obj);
    } catch(e65) {
    }
}
test4();
function test5() {
    var obj = { length: 4 };
    makeProperty(obj, "3");
    try {
        Array.prototype.reverse.call(obj);
    } catch(e77) {
    }
}
test5();
