var propName = "d";
var propValue = "dvalue";
function CreateSimpleTypeHandlerObject() {
    var obj = Object.create(null);
    obj[propName] = propValue;
    return obj;
}
function CreateSimpleDictionaryTypeHandlerObject() {
    var obj = {};
    obj[propName] = propValue;
    return obj;
}
function CreateDictionaryTypeHandlerObject() {
    var obj = {};
    function f15() {
    }
    Object.defineProperty(obj, propName, { get: f15, configurable: true, enumerable: true });
    delete obj[propName];
    obj[propName] = propValue;
    return obj;
}
function TestNonWritable(a23) {
    var beforeTestValue = null;
    var value = 1;
    value = TestEnumerations(a23, beforeTestValue, value);
    SetWritable(a23, propName, false);
    value = TestEnumerations(a23, beforeTestValue, value);
    SetWritable(a23, propName, true);
    value = TestEnumerations(a23, beforeTestValue, value);
    print("Changing writability during enumeration...");
    function f40(a41, a42, a43) {
        SetWritable(a41, propName, false);
        return a43;
    }
    beforeTestValue = f40;
    value = TestEnumerations(a23, beforeTestValue, value);
    function f47(a48, a49, a50) {
        SetWritable(a48, propName, true);
        return a50;
    }
    beforeTestValue = f47;
    value = TestEnumerations(a23, beforeTestValue, value);
    print("Freezing object");
    Object.freeze(a23);
    beforeTestValue = null;
    value = TestEnumerations(a23, beforeTestValue, value);
}
function TestAccessors() {
    var o = { a: "aValue" };
    function f65() {
        return "GETTER FOR b";
    }
    function f67(a68) {
        print("SETTER FOR b");
    }
    DefineAccessor(o, "b", f65, f67);
    o.c = "cValue";
    o.d = "dValue";
    Object.defineProperty(o, "e", { value: "eValue", configurable: true, writable: true, enumerable: false });
    function f85() {
        return "GETTER FOR f";
    }
    function f87(a88) {
        print("SETTER FOR f");
    }
    DefineAccessor(o, "f", f85, f87);
    o.g = "gValue";
    delete o.c;
    var value = 1;
    var beforeTestValue = null;
    value = TestEnumerations(o, beforeTestValue, value);
    DefineAccessor(o, propName);
    value = TestEnumerations(o, beforeTestValue, value);
    DefineDataProperty(o, propName, value++);
    value = TestEnumerations(o, beforeTestValue, value);
    print("Defining accessor property during enumeration...");
    function f110(a111, a112, a113) {
        if (a112 === propName) {
            DefineAccessor(a111, propName);
        }
        return a113;
    }
    beforeTestValue = f110;
    value = TestEnumerations(o, beforeTestValue, value);
    print("Defining data property during enumeration...");
    function f119(a120, a121, a122) {
        if (a121 === propName) {
            DefineDataProperty(a120, propName, a122);
        }
        return a122 + 1;
    }
    beforeTestValue = f119;
    value = TestEnumerations(o, beforeTestValue, value);
}
function SetWritable(a129, a130, a131) {
    print((("Setting writability of " + a130) + " to ") + a131);
    Object.defineProperty(a129, a130, { writable: a131 });
}
function DefineAccessor(a143, a144, a145, a146) {
    if (!a145) {
        function f148() {
            return "GETTER";
        }
        a145 = f148;
    }
    if (!a146) {
        function f151(a152) {
            print("SETTER");
        }
        a146 = f151;
    }
    print("Defining accessors for " + a144);
    Object.defineProperty(a143, a144, { get: a145, set: a146, configurable: true, enumerable: true });
}
function DefineDataProperty(a166, a167, a168) {
    print((("Defining data property " + a167) + " with value ") + a168);
    Object.defineProperty(a166, a167, { value: a168, writable: true, configurable: true, enumerable: true });
}
function TestEnumerations(a183, a184, a185) {
    print("Testing for-in enumeration");
    for (const v189 in a183) {
        if (a184) {
            a185 = a184(a183, v189, a185);
        }
        TestValue(a183, v189, a185++);
    }
    print("Testing getOwnPropertyNames enumeration");
    var names = Object.getOwnPropertyNames(a183);
    for (let i200 = 0; i200 < names.length; i200++) {
        if (a184) {
            a185 = a184(a183, i200, a185);
        }
        TestValue(a183, names[i200], a185++);
    }
    return a185;
}
function TestValue(a212, a213, a214) {
    print((a213 + ": ") + a212[a213]);
    print("Setting value to " + a214);
    a212[a213] = a214;
    print((a213 + ": ") + a212[a213]);
}
print("Test 1: Non-writable, simple type handler");
TestNonWritable(CreateSimpleTypeHandlerObject());
print("");
print("Test 2: Non-writable, simple dictionary type handler");
TestNonWritable(CreateSimpleDictionaryTypeHandlerObject());
print("");
print("Test 3: Non-writable, dictionary type handler");
TestNonWritable(CreateDictionaryTypeHandlerObject());
print("");
print("Test 4: Accessors");
TestAccessors();
