function test0(a1) {
    var k = 1073741823;
    k <<= 1;
    if (a1 === 1) {
        --k;
    }
    var a = k;
    while (a1-- !== 0) {
        ++a;
    }
    return a;
}
print("test0: " + test0(2));
function test1() {
    var a = [1];
    a.foo = 2;
    function test1a(a25) {
        var j = a25 & 1;
        return a[a25] + a[j];
    }
    return test1a("foo");
}
print("test1: " + test1());
function test2() {
    var i = 0;
    do {
        ++i;
    } while (i < 1)
    return i;
}
print("test2: " + test2());
function test3a(a49) {
    a49 | 0;
    return ~a49 + 1;
}
print("test3a: " + test3a(-2));
function test3b(a62) {
    a62 | 0;
    return ~a62 + 1;
}
function f69() {
    print("test3b: valueOf");
    return -2;
}
print("test3b: " + test3b({ valueOf: f69 }));
function test3c(a79) {
    a79 | 0;
    return a79 | 0;
}
print("test3c: " + safeCall(test3c, { valueOf: null, toString: null }));
function safeCall(a93) {
    var args = [];
    for (let i97 = 1; i97 < arguments.length; ++i97) {
        args.push(arguments[i97]);
    }
    try {
        return a93.apply(this, args);
    } catch(e109) {
        return e109.name;
    }
}
print("test4");
function makeArrayLength(a114) {
    print(Math.floor(a114));
}
function test4(a119) {
    function f120() {
    }
    var func2 = f120;
    func2.length = 1;
    func2.prop4 = 1;
    var __loopvar2 = 0;
    while ((func2.prop4 + 2147483650) | 1) {
        if (__loopvar2) {
            break;
        }
        __loopvar2 = 2;
        makeArrayLength(2147483650);
    }
}
test4();
test4();
