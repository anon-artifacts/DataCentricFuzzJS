function def_prop_array() {
    var array = [];
    function f4() {
        print("array[0]");
    }
    Object.defineProperty(array, 0, { get: f4 });
    var sum = 0;
    for (let i14 = 0; i14 < 3; i14++) {
        sum += array[0];
    }
}
function def_prop_object() {
    var object = {};
    function f25() {
        print("sum");
    }
    Object.defineProperty(object, "sum", { get: f25 });
    var sum = 0;
    for (let i35 = 0; i35 < 3; i35++) {
        sum += object.sum;
    }
}
function def_props_array() {
    var array = [];
    function f45() {
        print("array[0]");
    }
    const v49 = { get: f45 };
    function f50() {
        print("array[1]");
    }
    const v54 = { get: f50 };
    Object.defineProperties(array, { 0: v49, 1: v54 });
    var sum = 0;
    for (let i61 = 0; i61 < 3; i61++) {
        sum += array[0];
    }
}
function def_props_object() {
    var object = {};
    function f71() {
        print("sum1");
    }
    const v75 = { get: f71 };
    function f76() {
        print("sum2");
    }
    const v80 = { get: f76 };
    Object.defineProperties(object, { sum1: v75, sum2: v80 });
    var sum = 0;
    for (let i87 = 0; i87 < 3; i87++) {
        sum += object.sum1;
    }
}
function def_props_number() {
    function diag() {
        print("Type: " + typeof this);
        print("  Is Object: " + (this instanceof Object));
        print("  Is Number: " + (this instanceof Number));
    }
    const v115 = Number.prototype;
    Object.defineProperty(v115, "foo", { set: diag });
    const v120 = Number.prototype;
    Object.defineProperty(v120, "42", { set: diag });
    function f124(a125) {
        print("** Testing property 'foo'");
        a125.foo = {};
        print("");
        print("** Testing property 42");
        a125[42] = {};
        print("");
    }
    var runTests = f124;
    var i = 3;
    runTests(i);
    var d = 3.14;
    runTests(d);
}
function main() {
    def_prop_array();
    def_prop_object();
    def_props_array();
    def_props_object();
    def_props_number();
}
main();
