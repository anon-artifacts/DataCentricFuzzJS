function f0() {
    const v3 = new Array(10);
    var array = v3;
    for (let i6 = 0; i6 < 7; i6++) {
        var sliced = array.slice();
        array.length;
        sliced.length;
        0 in sliced;
    }
}
f0();
function f19() {
    for (let i21 = 0; i21 < 7; i21++) {
        [];
        ([]).slice(0, 0);
        [];
        ([]).slice(1, 0);
        [];
        ([]).slice(0, 1);
        [];
        const v44 = -1;
        ([]).slice(v44, 0);
    }
}
f19();
function f49() {
    const v52 = new Array(7);
    var array = v52;
    for (let i55 = 0; i55 < 7; i55++) {
        array.slice();
        array.slice(0);
        array.slice(undefined);
        array.slice("foobar");
        array.slice(undefined, undefined);
    }
}
f49();
function f72() {
    const v75 = new Array(7);
    var array = v75;
    for (let i78 = 0; i78 < 7; i78++) {
        array.slice(-100).length;
        array.slice(-3).length;
        array.slice(4).length;
        array.slice(6).length;
        array.slice(7).length;
        array.slice(8).length;
        array.slice(100).length;
        array.slice(0, -100).length;
        array.slice(0, -3).length;
        array.slice(0, 4).length;
        array.slice(0, 6).length;
        array.slice(0, 7).length;
        array.slice(0, 8).length;
        array.slice(0, 100).length;
        function f151() {
            throw "Exception";
        }
        obj = { toString: f151 };
        array.slice(0, 7, obj, null, undefined).length;
        function f164() {
            return 1;
        }
        const v166 = { valueOf: f164 };
        function f167() {
            return 2;
        }
        array.slice(v166, { toString: f167 }).length;
        try {
            array.slice(0, obj).length;
            throw "Should have thrown";
        } catch(e177) {
        }
    }
}
f72();
function f180() {
    var array = [];
    var expected = [];
    function f185() {
        array.push(array.length);
        return -1;
    }
    bad_guy = { valueOf: f185 };
    for (let i193 = 0; i193 < 13; i193++) {
        var sliced = array.slice(bad_guy);
        expected.push(i193);
        if (i193 == 0) {
            [];
        } else {
            [i193 - 1];
        }
    }
}
f180();
function f210() {
    var len = 9;
    const v214 = new Array(len);
    var array = v214;
    var at3 = "@3";
    var at7 = "@7";
    for (let i221 = 0; i221 < 7; i221++) {
        var array_proto = [];
        array_proto[3] = at3;
        array_proto[7] = at7;
        array.__proto__ = array_proto;
        array.length;
        for (let i231 = 0; i231 < array.length; i231++) {
            array[i231];
            array_proto[i231];
        }
        var sliced = array.slice();
        sliced.length;
        delete array_proto[3];
        delete array_proto[7];
        array[3];
        array.hasOwnProperty(3);
        sliced[3];
        sliced.hasOwnProperty(3);
        array[7];
        array.hasOwnProperty(7);
        sliced[7];
        sliced.hasOwnProperty(7);
        array_proto[5] = "@5";
        array[5];
        array_proto[5];
        array.hasOwnProperty(5);
    }
}
f210();
function f266() {
    var len = 9;
    const v270 = new Array(len);
    var array = v270;
    var at3 = "@3";
    var at7 = "@7";
    for (let i277 = 0; i277 < 7; i277++) {
        const t137 = Array.prototype;
        t137[3] = at3;
        const t139 = Array.prototype;
        t139[7] = at7;
        array.length;
        for (let i287 = 0; i287 < array.length; i287++) {
            array[i287];
            Array.prototype[i287];
        }
        var sliced = array.slice();
        sliced.length;
        const t147 = Array.prototype;
        delete t147[3];
        const t149 = Array.prototype;
        delete t149[7];
        array[3];
        array.hasOwnProperty(3);
        sliced[3];
        sliced.hasOwnProperty(3);
        array[7];
        array.hasOwnProperty(7);
        sliced[7];
        sliced.hasOwnProperty(7);
        const t151 = Array.prototype;
        t151[5] = "@5";
        array[5];
        Array.prototype[5];
        array.hasOwnProperty(5);
        sliced[5];
        Array.prototype[5];
        sliced.hasOwnProperty(5);
        const t162 = Array.prototype;
        delete t162[5];
    }
}
f266();
function f335() {
    function func(a337, a338, a339, a340) {
        let result = Array.prototype.slice.call(arguments, 1);
    }
    func([]);
    func(["a"], "a");
    func(["a",1], "a", 1);
    func(["a",1,2,3,4,5], "a", 1, 2, 3, 4, 5);
    func(["a",1,,], "a", 1, undefined);
    func(["a",1,,void 0], "a", 1, undefined, void 0);
}
f335();
function f395() {
    function func(a397, a398) {
        arguments.length;
        a398 = 239;
        arguments.length;
        let result = Array.prototype.slice.call(arguments, 0);
        [a397];
    }
    func("a");
}
f395();
function f418() {
    function func(a420, a421) {
        arguments.length;
        arguments.length = 7;
        let result = Array.prototype.slice.call(arguments, 0);
        [a420,,,,,,,];
    }
    func("a");
}
f418();
function f439() {
    function func(a441, a442) {
        arguments.length;
        arguments.length = "foobar";
        let result = Array.prototype.slice.call(arguments, 0);
        [];
    }
    func("a");
}
f439();
function f459() {
    function func(a461, a462) {
        arguments.length;
        arguments[3] = 239;
        let result = Array.prototype.slice.call(arguments, 0);
        [a461];
    }
    func("a");
}
f459();
function f479() {
    function func(a481, a482, a483) {
        arguments.length;
        delete arguments[1];
        let result = Array.prototype.slice.call(arguments, 0);
        [a481,,a483];
    }
    func("a", "b", "c");
}
f479();
function f504() {
    function f() {
        delete arguments[1];
        const t238 = arguments.__proto__;
        t238[1] = 5;
        var result = Array.prototype.slice.call(arguments);
        const t242 = arguments.__proto__;
        delete t242[1];
        [1,5,3];
    }
    f(1, 2, 3);
}
f504();
