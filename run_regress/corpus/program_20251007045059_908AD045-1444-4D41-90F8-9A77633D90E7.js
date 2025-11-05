try {
    function f1() {
    }
    Object.prototype.__defineGetter__(0, f1);
} catch(e6) {
    print("Caught: " + e6);
}
try {
    function f11() {
        let asyncIds = [];
        let triggerIds = [];
        async function foo() {
        }
        foo();
    }
    f11();
} catch(e19) {
    print("Caught: " + e19);
}
try {
    var obj = { prop: 7 };
} catch(e28) {
    print("Caught: " + e28);
}
