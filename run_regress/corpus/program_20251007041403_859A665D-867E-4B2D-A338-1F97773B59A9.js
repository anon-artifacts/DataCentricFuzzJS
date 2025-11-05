try {
    const v0 = () => {
    };
    typeof v0;
    Function.prototype;
    const v4 = () => {
    };
    Object.getPrototypeOf(v4);
    function f7() {
        const v8 = () => {
        };
        try { new v8(); } catch (e) {}
    }
    f7();
    const v13 = () => {
    };
    "prototype" in v13;
    const v16 = () => {
        return 1;
    };
    v16();
    const v21 = (a22) => {
        return a22 + 1;
    };
    v21(1);
    const v27 = () => {
        return 3;
    };
    v27();
    const v32 = (a33) => {
        return a33 + 3;
    };
    v32(1);
    const v40 = (a41, a42) => {
        return a41 + a42;
    };
    v40(1, 4);
    const v48 = (a49, a50) => {
        return a49 + a50;
    };
    v48(1, 5);
    const v53 = () => {
    };
    var empty = v53;
    empty();
    const v57 = (a58) => {
        return a58;
    };
    var identity = v57;
    identity(empty);
    const v61 = (a62) => {
        return a62 * a62;
    };
    var square = v61;
    square(3);
    const v68 = (a69) => {
        return { key: a69 };
    };
    var key_maker = v68;
    key_maker(empty).key;
    var evens = [0,2,4,6,8];
    [1,3,5,7,9];
    const v87 = (a88) => {
        return a88 + 1;
    };
    evens.map(v87);
    var fives = [];
    const v94 = (a95) => {
        if ((a95 % 5) === 0) {
            fives.push(a95);
        }
    };
    ([1,2,3,4,5,6,7,8,9,10]).forEach(v94);
    [5,10];
    function testRestrictedFunctionPropertiesStrict() {
        const v117 = () => {
            'use strict';
        };
        var arrowFn = v117;
        arrowFn.hasOwnProperty("arguments");
        function f121() {
            return arrowFn?.arguments;
        }
        f121();
        function f124() {
            arrowFn.arguments = {};
        }
        try { f124(); } catch (e) {}
        arrowFn.hasOwnProperty("caller");
        function f129() {
            return arrowFn?.caller;
        }
        f129();
        function f132() {
            arrowFn.caller = {};
        }
        try { f132(); } catch (e) {}
    }
    testRestrictedFunctionPropertiesStrict();
    function testRestrictedFunctionPropertiesSloppy() {
        const v137 = () => {
        };
        var arrowFn = v137;
        arrowFn.hasOwnProperty("arguments");
        function f141() {
            return arrowFn?.arguments;
        }
        f141();
        function f144() {
            arrowFn.arguments = {};
        }
        try { f144(); } catch (e) {}
        arrowFn.hasOwnProperty("caller");
        function f149() {
            return arrowFn?.caller;
        }
        f149();
        function f152() {
            arrowFn.caller = {};
        }
        try { f152(); } catch (e) {}
    }
    testRestrictedFunctionPropertiesSloppy();
    function testConciseBodyReturnsRegexp() {
        const v157 = () => {
            return /foo/;
        };
        var arrow1 = v157;
        const v160 = () => {
            return /foo/;
        };
        var arrow2 = v160;
        const v163 = () => {
            return /foo/i;
        };
        var arrow3 = v163;
        const v166 = () => {
            return /foo/i;
        };
        var arrow4 = v166;
        try { arrow1.toString(); } catch (e) {}
        try { arrow2.toString(); } catch (e) {}
        try { arrow3.toString(); } catch (e) {}
        try { arrow4.toString(); } catch (e) {}
    }
} catch(e177) {
}
