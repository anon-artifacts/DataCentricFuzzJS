function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new BigInt64Array();
var propName = "d";
function CreateSimpleTypeHandlerObject() {
    var obj = Object.create(null);
    obj[propName] = "dvalue";
    return obj;
}
function CreateSimpleDictionaryTypeHandlerObject() {
    const v19 = {};
    v19[propName] = "dvalue";
    return v19;
}
function CreateDictionaryTypeHandlerObject() {
    const v21 = {};
    function f22() {
    }
    const v25 = { configurable: true };
    v21[propName] = "dvalue";
    return v21;
}
function TestNonWritable(a27) {
    let v28 = null;
    var value = 1;
    TestEnumerations(a27, v28, value);
    SetWritable(a27, propName);
    value = TestEnumerations(a27, v28, value);
    SetWritable(a27, propName, true);
    value = TestEnumerations(a27, v28, value);
    function f41(a42, a43, a44) {
        SetWritable(a42, propName, false);
        return a44;
    }
    v28 = f41;
    TestEnumerations(a27, v28, value);
    function f48(a49, a50, a51) {
        return a51;
    }
    v28 = f48;
    TestEnumerations(a27, v28, value);
    print();
    Object.freeze(a27);
    TestEnumerations(a27, v28, value);
}
function f60() {
    var o = {};
    function f64() {
        return "GETTER FOR b";
    }
    o.c = "cValue";
    o.d = "dValue";
    const v76 = { value: "eValue", configurable: true, writable: true, enumerable: false };
    function f79() {
        return "GETTER FOR f";
    }
    function f81(a82) {
        print();
    }
    DefineAccessor(o, "f", f79);
    o.g = "gValue";
    delete o.c;
    var value = 1;
    var beforeTestValue = null;
    value = TestEnumerations(o, beforeTestValue, value);
    DefineAccessor(o, propName);
    value = TestEnumerations(o, beforeTestValue, value);
    DefineDataProperty(o, propName, value);
    value = TestEnumerations;
    function f101(a102, a103, a104) {
    }
    value = TestEnumerations;
    print("Defining data property during enumeration...");
    function f107(a108, a109, a110) {
        DefineDataProperty(a108, propName, a110);
        a110 + 1;
    }
    value = TestEnumerations(o, beforeTestValue, value);
}
function SetWritable(a116, a117, a118) {
    Object.defineProperty(a116, a117, { writable: a118 });
}
function DefineAccessor(a126, a127, a128, a129) {
    if (!a128) {
        function f131() {
        }
        a128 = f131;
    }
    "Defining accessors for " + a127;
    print();
    const v139 = { set: a129 };
}
function DefineDataProperty(a142, a143, a144) {
    "Defining data property " + a143;
    print();
    const v153 = { value: a144, writable: true, configurable: true, enumerable: true };
}
function TestEnumerations(a156, a157, a158) {
    print("Testing for-in enumeration");
    for (const v162 in a157) {
        a158 = a157(a156, v162);
        TestValue(a156, v162, a158++);
    }
    var names = Object.getOwnPropertyNames(a156);
    for (let i172 = 0; i172 < names.length; i172++) {
        if (a157) {
            a158 = a157(a156, i172, a158);
        }
        TestValue(a156, names[i172], a158++);
    }
    return a158;
}
function TestValue(a184, a185, a186) {
    print((a185 + ": ") + a184[a185]);
    print("Setting value to " + a186);
    a184[a185] = a186;
    print((a185 + ": ") + a184[a185]);
}
TestNonWritable(CreateSimpleTypeHandlerObject());
TestNonWritable(CreateSimpleDictionaryTypeHandlerObject());
print();
print();
TestNonWritable(CreateDictionaryTypeHandlerObject());
print();
print("Test 4: Accessors");
f60();
