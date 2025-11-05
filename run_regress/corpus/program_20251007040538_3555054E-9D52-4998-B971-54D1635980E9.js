function testReflectApplyArity() {
    Reflect?.apply?.length;
}
try { testReflectApplyArity(); } catch (e) {}
function testReflectApplyNonConstructor() {
    function f7() {
        const v9 = Reflect?.apply;
        function f10() {
        }
        const v12 = [];
        try { new v9(f10, null, v12); } catch (e) {}
    }
    try { f7(); } catch (e) {}
}
try { testReflectApplyNonConstructor(); } catch (e) {}
function testAppliedReceiverSloppy() {
    function returnThis() {
        return this;
    }
    var receiver = {};
    const v24 = void 0;
    const v25 = [];
    try { Reflect.apply(returnThis, v24, v25); } catch (e) {}
    const v30 = [];
    try { Reflect.apply(returnThis, null, v30); } catch (e) {}
    const v34 = [];
    try { Reflect.apply(returnThis, this, v34); } catch (e) {}
    const v36 = [];
    try { Reflect.apply(returnThis, receiver, v36); } catch (e) {}
    String?.prototype;
    const v41 = [];
    let v42;
    try { v42 = Reflect.apply(returnThis, "str", v41); } catch (e) {}
    try { Object.getPrototypeOf(v42); } catch (e) {}
    Number?.prototype;
    const v48 = [];
    let v49;
    try { v49 = Reflect.apply(returnThis, 123, v48); } catch (e) {}
    try { Object.getPrototypeOf(v49); } catch (e) {}
    Boolean?.prototype;
    const v54 = [];
    let v55;
    try { v55 = Reflect.apply(returnThis, true, v54); } catch (e) {}
    try { Object.getPrototypeOf(v55); } catch (e) {}
    Symbol?.prototype;
    let v60;
    try { v60 = Symbol("test"); } catch (e) {}
    const v61 = [];
    let v62;
    try { v62 = Reflect.apply(returnThis, v60, v61); } catch (e) {}
    try { Object.getPrototypeOf(v62); } catch (e) {}
}
try { testAppliedReceiverSloppy(); } catch (e) {}
function testAppliedReceiverStrict() {
    function returnThis() {
        'use strict';
        return this;
    }
    var receiver = {};
    void 0;
    const v73 = void 0;
    const v74 = [];
    try { Reflect.apply(returnThis, v73, v74); } catch (e) {}
    const v79 = [];
    try { Reflect.apply(returnThis, this, v79); } catch (e) {}
    const v81 = [];
    try { Reflect.apply(returnThis, receiver, v81); } catch (e) {}
    var regexp = /123/;
    let v87;
    try { v87 = Symbol("test"); } catch (e) {}
    var symbol = v87;
    const v91 = [];
    try { Reflect.apply(returnThis, "str", v91); } catch (e) {}
    const v95 = [];
    try { Reflect.apply(returnThis, 123, v95); } catch (e) {}
    const v99 = [];
    try { Reflect.apply(returnThis, true, v99); } catch (e) {}
    const v101 = [];
    try { Reflect.apply(returnThis, regexp, v101); } catch (e) {}
    const v103 = [];
    try { Reflect.apply(returnThis, symbol, v103); } catch (e) {}
}
try { testAppliedReceiverStrict(); } catch (e) {}
function testAppliedArgumentsLength() {
    function returnLengthStrict() {
        'use strict';
        return arguments?.length;
    }
    function returnLengthSloppy() {
        return arguments?.length;
    }
    const v115 = [];
    try { Reflect.apply(returnLengthStrict, this, v115); } catch (e) {}
    const v120 = [];
    try { Reflect.apply(returnLengthSloppy, this, v120); } catch (e) {}
    const v124 = {};
    try { Reflect.apply(returnLengthStrict, this, v124); } catch (e) {}
    const v128 = {};
    try { Reflect.apply(returnLengthSloppy, this, v128); } catch (e) {}
    for (let i131 = 0; i131 < 256; ++i131) {
        let v139;
        try { v139 = new Array(i131); } catch (e) {}
        try { Reflect.apply(returnLengthStrict, this, v139); } catch (e) {}
        let v142;
        try { v142 = new Array(i131); } catch (e) {}
        try { Reflect.apply(returnLengthSloppy, this, v142); } catch (e) {}
        const v145 = { length: i131 };
        try { Reflect.apply(returnLengthStrict, this, v145); } catch (e) {}
        const v148 = { length: i131 };
        try { Reflect.apply(returnLengthSloppy, this, v148); } catch (e) {}
    }
}
try { testAppliedArgumentsLength(); } catch (e) {}
function testAppliedArgumentsLengthThrows() {
    function noopStrict() {
        'use strict';
    }
    function noopSloppy() {
    }
    function MyError() {
    }
    var argsList = {};
    function f158() {
        let v159;
        try { v159 = new MyError(); } catch (e) {}
        throw v159;
    }
    const v160 = { get: f158 };
    try { Object.defineProperty(argsList, "length", v160); } catch (e) {}
    function f163() {
        try { Reflect.apply(noopStrict, this, argsList); } catch (e) {}
    }
    try { f163(); } catch (e) {}
    try { MyError(); } catch (e) {}
    function f169() {
        try { Reflect.apply(noopSloppy, this, argsList); } catch (e) {}
    }
    try { f169(); } catch (e) {}
    try { MyError(); } catch (e) {}
}
try { testAppliedArgumentsLengthThrows(); } catch (e) {}
function testAppliedArgumentsElementThrows() {
    function noopStrict() {
        'use strict';
    }
    function noopSloppy() {
    }
    function MyError() {
    }
    var argsList = { length: 1 };
    function f184() {
        let v185;
        try { v185 = new MyError(); } catch (e) {}
        throw v185;
    }
    const v186 = { get: f184 };
    try { Object.defineProperty(argsList, "0", v186); } catch (e) {}
    function f189() {
        try { Reflect.apply(noopStrict, this, argsList); } catch (e) {}
    }
    try { f189(); } catch (e) {}
    try { MyError(); } catch (e) {}
    function f195() {
        try { Reflect.apply(noopSloppy, this, argsList); } catch (e) {}
    }
    try { f195(); } catch (e) {}
    try { MyError(); } catch (e) {}
}
try { testAppliedArgumentsElementThrows(); } catch (e) {}
function testAppliedNonFunctionStrict() {
    'use strict';
    function f203() {
        const v205 = void 0;
        try { Reflect.apply(v205); } catch (e) {}
    }
    try { f203(); } catch (e) {}
    function f210() {
        try { Reflect.apply(null); } catch (e) {}
    }
    try { f210(); } catch (e) {}
    function f215() {
        try { Reflect.apply(123); } catch (e) {}
    }
    try { f215(); } catch (e) {}
    function f220() {
        try { Reflect.apply("str"); } catch (e) {}
    }
    try { f220(); } catch (e) {}
    function f225() {
        let v228;
        try { v228 = Symbol("x"); } catch (e) {}
        try { Reflect.apply(v228); } catch (e) {}
    }
    try { f225(); } catch (e) {}
    function f232() {
        const v233 = /123/;
        try { Reflect.apply(v233); } catch (e) {}
    }
    try { f232(); } catch (e) {}
    function f237() {
        try { Reflect.apply(NaN); } catch (e) {}
    }
    try { f237(); } catch (e) {}
    function f242() {
        const v243 = {};
        try { Reflect.apply(v243); } catch (e) {}
    }
    try { f242(); } catch (e) {}
    function f247() {
        const v248 = [];
        try { Reflect.apply(v248); } catch (e) {}
    }
    try { f247(); } catch (e) {}
}
try { testAppliedNonFunctionStrict(); } catch (e) {}
function testAppliedNonFunctionSloppy() {
    function f254() {
        const v256 = void 0;
        try { Reflect.apply(v256); } catch (e) {}
    }
    try { f254(); } catch (e) {}
    function f261() {
        try { Reflect.apply(null); } catch (e) {}
    }
    try { f261(); } catch (e) {}
    function f266() {
        try { Reflect.apply(123); } catch (e) {}
    }
    try { f266(); } catch (e) {}
    function f271() {
        try { Reflect.apply("str"); } catch (e) {}
    }
    try { f271(); } catch (e) {}
    function f276() {
        let v279;
        try { v279 = Symbol("x"); } catch (e) {}
        try { Reflect.apply(v279); } catch (e) {}
    }
    try { f276(); } catch (e) {}
    function f283() {
        const v284 = /123/;
        try { Reflect.apply(v284); } catch (e) {}
    }
    try { f283(); } catch (e) {}
    function f288() {
        try { Reflect.apply(NaN); } catch (e) {}
    }
    try { f288(); } catch (e) {}
    function f293() {
        const v294 = {};
        try { Reflect.apply(v294); } catch (e) {}
    }
    try { f293(); } catch (e) {}
    function f298() {
        const v299 = [];
        try { Reflect.apply(v299); } catch (e) {}
    }
    try { f298(); } catch (e) {}
}
try { testAppliedNonFunctionSloppy(); } catch (e) {}
function testAppliedArgumentsNonList() {
    function noopStrict() {
        'use strict';
    }
    function noopSloppy() {
    }
    var R = void 0;
    function f310() {
        try { Reflect.apply(noopStrict, R, null); } catch (e) {}
    }
    try { f310(); } catch (e) {}
    function f316() {
        try { Reflect.apply(noopSloppy, R, null); } catch (e) {}
    }
    try { f316(); } catch (e) {}
    function f321() {
        try { Reflect.apply(noopStrict, R, 1); } catch (e) {}
    }
    try { f321(); } catch (e) {}
    function f326() {
        try { Reflect.apply(noopSloppy, R, 1); } catch (e) {}
    }
    try { f326(); } catch (e) {}
    function f331() {
        try { Reflect.apply(noopStrict, R, "BAD"); } catch (e) {}
    }
    try { f331(); } catch (e) {}
    function f336() {
        try { Reflect.apply(noopSloppy, R, "BAD"); } catch (e) {}
    }
    try { f336(); } catch (e) {}
    function f341() {
        try { Reflect.apply(noopStrict, R, true); } catch (e) {}
    }
    try { f341(); } catch (e) {}
    function f346() {
        try { Reflect.apply(noopSloppy, R, true); } catch (e) {}
    }
    try { f346(); } catch (e) {}
    let v353;
    try { v353 = Symbol("x"); } catch (e) {}
    var sym = v353;
    function f355() {
        try { Reflect.apply(noopStrict, R, sym); } catch (e) {}
    }
    try { f355(); } catch (e) {}
    function f359() {
        try { Reflect.apply(noopSloppy, R, sym); } catch (e) {}
    }
    try { f359(); } catch (e) {}
}
try { testAppliedArgumentsNonList(); } catch (e) {}
function testAppliedArgumentValue() {
    function returnFirstStrict(a366) {
        'use strict';
        return a366;
    }
    function returnFirstSloppy(a368) {
        return a368;
    }
    function returnLastStrict(a370) {
        'use strict';
        return arguments?.[arguments?.length - 1];
    }
    function returnLastSloppy(a378) {
        return arguments?.[arguments?.length - 1];
    }
    function returnSumStrict() {
        'use strict';
        var sum = arguments?.[0];
        for (let i390 = 1; i390 < arguments?.length; ++i390) {
            sum += arguments?.[i390];
        }
        return sum;
    }
    function returnSumSloppy() {
        var sum = arguments?.[0];
        for (let i404 = 1; i404 < arguments?.length; ++i404) {
            sum += arguments?.[i404];
        }
        return sum;
    }
    const v416 = ["OK!"];
    try { Reflect.apply(returnFirstStrict, this, v416); } catch (e) {}
    const v422 = ["OK!"];
    try { Reflect.apply(returnFirstSloppy, this, v422); } catch (e) {}
    const v428 = { 0: "OK!", length: 1 };
    try { Reflect.apply(returnFirstStrict, this, v428); } catch (e) {}
    const v434 = { 0: "OK!", length: 1 };
    try { Reflect.apply(returnFirstSloppy, this, v434); } catch (e) {}
    const v448 = [0,1,2,3,4,5,6,7,8,"OK!"];
    try { Reflect.apply(returnLastStrict, this, v448); } catch (e) {}
    const v462 = [0,1,2,3,4,5,6,7,8,"OK!"];
    try { Reflect.apply(returnLastSloppy, this, v462); } catch (e) {}
    const v468 = { 9: "OK!", length: 10 };
    try { Reflect.apply(returnLastStrict, this, v468); } catch (e) {}
    const v474 = { 9: "OK!", length: 10 };
    try { Reflect.apply(returnLastSloppy, this, v474); } catch (e) {}
    const v482 = ["T","E","S","T"];
    try { Reflect.apply(returnSumStrict, this, v482); } catch (e) {}
    const v492 = ["T","E","S","T","!","!"];
    try { Reflect.apply(returnSumStrict, this, v492); } catch (e) {}
    const v501 = {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        length: 4,
    };
    try { Reflect.apply(returnSumStrict, this, v501); } catch (e) {}
    const v509 = ["T","E","S","T"];
    try { Reflect.apply(returnSumSloppy, this, v509); } catch (e) {}
    const v519 = ["T","E","S","T","!","!"];
    try { Reflect.apply(returnSumSloppy, this, v519); } catch (e) {}
    const v528 = {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        length: 4,
    };
    try { Reflect.apply(returnSumSloppy, this, v528); } catch (e) {}
}
try { testAppliedArgumentValue(); } catch (e) {}
