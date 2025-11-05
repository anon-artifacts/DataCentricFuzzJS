var toStringName = "toString";
var global = this;
function globalFunction1() {
    return "function1";
}
function globalFunction2() {
    return "function2";
}
this[toStringName]();
global[toStringName]();
function testGlobals() {
    '[object global]';
    this[toStringName]();
    global[toStringName]();
}
testGlobals();
function F() {
}
function f20() {
    return "one";
}
const t21 = F.prototype;
t21.one = f20;
function f23() {
    return "two";
}
const t26 = F.prototype;
t26.two = f23;
function f26() {
    return "three";
}
const t31 = F.prototype;
t31.three = f26;
var keys = ["one","one","one","one","two","two","one","three","one","two"];
function testKeyTransitions() {
    var i;
    var key;
    var result;
    var message;
    const v50 = new F();
    var f = v50;
    var array = [];
    for ((() => {
            i = 0;
        })();
        i != 10;
        i++) {
        key = i < 8 ? "push" : "pop";
        array[key](i);
    }
    array.length;
    for ((() => {
            i = 0;
        })();
        i != array.length;
        i++) {
        array[i];
    }
    for ((() => {
            i = 0;
        })();
        i != 10;
        i++) {
        key = i < 3 ? "pop" : "push";
        array[key](i);
    }
    array.length;
    for ((() => {
            i = 0;
        })();
        i != array.length;
        i++) {
        array[i];
    }
    var string = "ABCDEFGHIJ";
    for ((() => {
            i = 0;
        })();
        i != 10;
        i++) {
        key = i < 5 ? "charAt" : "charCodeAt";
        result = string[key](i);
        message = ((((("'" + string) + "'['") + key) + "'](") + i) + ")";
        if (i < 5) {
            string.charAt(i);
        } else {
            string.charCodeAt(i);
        }
    }
    for ((() => {
            i = 0;
        })();
        i != 10;
        i++) {
        key = i < 5 ? "charCodeAt" : "charAt";
        result = string[key](i);
        message = ((((("'" + string) + "'['") + key) + "'](") + i) + ")";
        if (i < 5) {
            string.charCodeAt(i);
        } else {
            string.charAt(i);
        }
    }
    key = "one";
    for ((() => {
            i = 0;
        })();
        i != 10;
        i++) {
        f[key]();
        if (i == 5) {
            key = "two";
        }
    }
    function f147() {
        return "field";
    }
    f.field = f147;
    key = "field";
    for ((() => {
            i = 0;
        })();
        i != 10;
        i++) {
        f[key]();
        if (i == 5) {
            key = "two";
        }
    }
    f.prop = 0;
    delete f.prop;
    function f160() {
        return "four";
    }
    f.four = f160;
    function f162() {
        return "five";
    }
    f.five = f162;
    key = "four";
    for ((() => {
            i = 0;
        })();
        i != 10;
        i++) {
        f[key]();
        if (i == 5) {
            key = "five";
        }
    }
    key = "globalFunction1";
    var expect = "function1";
    for ((() => {
            i = 0;
        })();
        i != 10;
        i++) {
        global[key]();
        if (i == 5) {
            key = "globalFunction2";
            expect = "function2";
        }
    }
}
testKeyTransitions();
function testTypeTransitions() {
    const v187 = new F();
    var f = v187;
    var s = "";
    var m = "one";
    var i;
    s = "";
    for ((() => {
            i = 0;
        })();
        i != 10;
        i++) {
        if (i == 5) {
            function f202() {
                return "1";
            }
            const t181 = F.prototype;
            t181.one = f202;
        }
        s += f[m]();
    }
    s = "";
    for ((() => {
            i = 0;
        })();
        i != 10;
        i++) {
        if (i == 5) {
            function f214() {
                return "I";
            }
            f.__proto__ = { one: f214 };
        }
        s += f[m]();
    }
    s = "";
    for ((() => {
            i = 0;
        })();
        i != 10;
        i++) {
        if (i == 5) {
            function f226() {
                return "ONE";
            }
            f.one = f226;
        }
        s += f[m]();
    }
    m = "toString";
    s = "";
    function f232() {
        return "2";
    }
    var obj = { toString: f232 };
    for ((() => {
            i = 0;
        })();
        i != 10;
        i++) {
        if (i == 5) {
            obj = "TWO";
        }
        s += obj[m]();
    }
    s = "";
    function f246() {
        return "ONE";
    }
    obj = { toString: f246 };
    m = "toString";
    for ((() => {
            i = 0;
        })();
        i != 10;
        i++) {
        if (i == 5) {
            obj = 1;
        }
        s += obj[m]();
    }
}
testTypeTransitions();
