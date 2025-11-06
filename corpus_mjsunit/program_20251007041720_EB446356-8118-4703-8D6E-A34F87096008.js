function write(a1) {
    print(a1);
}
write("Test case 0");
function f6() {
    function f7() {
        const v12 = {
            get value() {
                return 20;
            },
            set value(a11) {
                this._value = a11;
            },
        };
        var x = v12;
        x.value;
        write(x.value);
    }
    var test = f7;
    test();
    test();
}
f6();
write("Test case 1");
function f23() {
    function f24() {
        const v29 = {
            get value() {
                return this._value;
            },
            set value(a28) {
                this._value = a28;
            },
        };
        var x = v29;
        x.value = 10;
        write(x.value);
    }
    var test = f24;
    test();
    test();
}
f23();
write("Test case 2");
function f40() {
    function f41() {
        var ab = {};
        function f45() {
            write("In getter");
            return 10;
        }
        Object.defineProperty(ab, "foo", { get: f45, configurable: true });
        write(ab.foo);
    }
    var test = f41;
    test();
    test();
}
f40();
write("Test case 3");
function f61() {
    function f62(a63) {
        const v68 = {
            get value() {
                return this._value;
            },
            set value(a67) {
                this._value = a67;
            },
        };
        var x = v68;
        if (a63) {
            Object.defineProperty(x, "value", { value: 20, writable: true, enumerable: true, configurable: true });
        }
        write(x.value);
    }
    var test = f62;
    test(false);
    test(true);
}
f61();
write("Test case 4");
function f88() {
    function f89(a90) {
        const v96 = {
            _value: 10,
            get value() {
                return this._value;
            },
            set value(a95) {
                this._value = a95;
            },
        };
        var x = v96;
        delete x.value;
        write(x.value);
    }
    var test = f89;
    test();
    test();
}
f88();
write("Test case 5");
function f107() {
    function f108(a109) {
        const v115 = {
            _value: 10,
            get value() {
                return this._value;
            },
            set value(a114) {
                this._value = a114;
            },
        };
        var x = v115;
        if (a109) {
            delete x.value;
        }
        write(x.value);
    }
    var test = f108;
    test(false);
    test(true);
}
f107();
write("Test case 6");
function f128() {
    function f129(a130) {
        const v136 = {
            _value: 25,
            get value() {
                return this._value;
            },
            set value(a135) {
                this._value = a135;
            },
        };
        var x = v136;
        if (a130) {
            function f139() {
                write("In getter");
                return 10;
            }
            Object.defineProperty(x, "value", { get: f139, configurable: true });
        }
        write(x.value);
    }
    var test = f129;
    test(false);
    test(true);
}
f128();
write("Test case 7");
function f157() {
    function f158() {
        function foo() {
        }
        const t157 = foo.prototype;
        t157.value = 10;
        const v162 = new foo();
        var x = v162;
        function f165() {
            write("In getter");
            return 10;
        }
        Object.defineProperty(x, "value", { get: f165, configurable: true });
        write(x.value);
    }
    var test = f158;
    test();
    test();
}
f157();
write("Test case 8");
function f181() {
    function f182() {
        function foo() {
        }
        const t178 = foo.prototype;
        t178.value = 10;
        const v186 = new foo();
        var x = v186;
        write(x.value);
        function f191() {
            write("In getter");
            return 10;
        }
        Object.defineProperty(x, "value", { get: f191, configurable: true });
        write(x.value);
    }
    var test = f182;
    test();
    test();
}
f181();
write("Test case 9");
function f207() {
    function f208(a209) {
        function foo() {
        }
        if (a209) {
            const t201 = foo.prototype;
            t201.value = 10;
        }
        const v213 = new foo();
        var x = v213;
        function f216() {
            write("In getter");
            return 10;
        }
        Object.defineProperty(x, "value", { get: f216, configurable: true });
        write(x.value);
    }
    var test = f208;
    test(false);
    test(true);
}
f207();
write("Test case 10");
function f234() {
    function f235(a236) {
        var x = { value: 10 };
        if (a236) {
            write(x.value);
        }
        function f243() {
            write("In getter");
            return 10;
        }
        Object.defineProperty(x, "value", { get: f243, configurable: true });
        write(x.value);
    }
    var test = f235;
    test(false);
    test(true);
}
f234();
write("Test case 11");
function f261() {
    function f262(a263) {
        var x = {};
        function f267(a268) {
            write("In getter");
            return 10 + a268;
        }
        Object.defineProperty(x, "value", { get: f267, configurable: true });
        write(x.value);
    }
    var test = f262;
    test(false);
    test(true);
}
f261();
