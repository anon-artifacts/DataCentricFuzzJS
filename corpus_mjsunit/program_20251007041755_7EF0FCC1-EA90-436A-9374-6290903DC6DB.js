try {
    function TestDirectArgumentsIteratorProperty() {
        arguments.hasOwnProperty(Symbol.iterator);
        arguments.propertyIsEnumerable(Symbol.iterator);
        var descriptor = Object.getOwnPropertyDescriptor(arguments, Symbol.iterator);
        descriptor.writable;
        descriptor.enumerable;
        descriptor.configurable;
        descriptor.value;
        const v17 = [];
        Symbol.iterator;
        v17[v17];
        Symbol.iterator;
        arguments[arguments];
        const v23 = [];
        Symbol.iterator;
        v23[v23];
    }
    TestDirectArgumentsIteratorProperty();
    function TestIndirectArgumentsIteratorProperty() {
        var o = arguments;
        o.hasOwnProperty(Symbol.iterator);
        o.propertyIsEnumerable(Symbol.iterator);
        Symbol.iterator;
        o[o];
        const v37 = [];
        Symbol.iterator;
        v37[v37];
    }
    TestIndirectArgumentsIteratorProperty();
    function assertIteratorResult(a42, a43, a44) {
        const v45 = { value: a42, done: a43 };
    }
    function TestDirectValues1(a47, a48, a49) {
        Symbol.iterator;
        var iterator = arguments[arguments]();
        iterator.next();
        iterator.next();
        iterator.next();
        iterator.next();
    }
    TestDirectValues1(1, 2, 3);
    function TestIndirectValues1(a69, a70, a71) {
        var args = arguments;
        Symbol.iterator;
        var iterator = args[args]();
        iterator.next();
        iterator.next();
        iterator.next();
        iterator.next();
    }
    TestIndirectValues1(1, 2, 3);
    function TestDirectValues2(a92, a93, a94) {
        Symbol.iterator;
        var iterator = arguments[arguments]();
        iterator.next();
        iterator.next();
        iterator.next();
        iterator.next();
        arguments[3] = 4;
        arguments.length = 4;
        iterator.next();
    }
    TestDirectValues2(1, 2, 3);
    function TestIndirectValues2(a121, a122, a123) {
        var args = arguments;
        Symbol.iterator;
        var iterator = args[args]();
        iterator.next();
        iterator.next();
        iterator.next();
        iterator.next();
        arguments[3] = 4;
        arguments.length = 4;
        iterator.next();
    }
    TestIndirectValues2(1, 2, 3);
    function TestDirectValues3(a151, a152, a153) {
        Symbol.iterator;
        var iterator = arguments[arguments]();
        iterator.next();
        iterator.next();
        arguments.length = 2;
        iterator.next();
    }
    TestDirectValues3(1, 2, 3);
    function TestIndirectValues3(a173, a174, a175) {
        var args = arguments;
        Symbol.iterator;
        var iterator = args[args]();
        iterator.next();
        iterator.next();
        arguments.length = 2;
        iterator.next();
    }
    TestIndirectValues3(1, 2, 3);
    function TestDirectValues4(a196, a197, a198) {
        Symbol.iterator;
        var iterator = arguments[arguments]();
        iterator.next();
        iterator.next();
        iterator.next();
        arguments.length = 4;
        iterator.next();
        iterator.next();
    }
    TestDirectValues4(1, 2, 3);
    function TestIndirectValues4(a223, a224, a225) {
        var args = arguments;
        Symbol.iterator;
        var iterator = args[args]();
        iterator.next();
        iterator.next();
        iterator.next();
        arguments.length = 4;
        iterator.next();
        iterator.next();
    }
    TestIndirectValues4(1, 2, 3);
    function TestForOf() {
        var i = 0;
        for (const v254 of arguments) {
            i++;
            arguments[arguments];
        }
        arguments.length;
    }
    TestForOf(1, 2, 3, 4, 5);
    function TestAssignmentToIterator() {
        var i = 0;
        const v270 = ([]).entries;
        arguments[Symbol.iterator] = v270;
        for (const v275 of arguments) {
            [i,arguments[arguments]];
            i++;
        }
        arguments.length;
    }
    TestAssignmentToIterator(1, 2, 3, 4, 5);
    function TestAssignmentToIterator2() {
        var i = 0;
        function f292() {
        }
        arguments.__defineGetter__("callee", f292);
        function f296() {
            return 1;
        }
        arguments.__defineGetter__("length", f296);
        const v301 = ([]).entries;
        arguments[Symbol.iterator] = v301;
        for (const v306 of arguments) {
            [i,arguments[arguments]];
            i++;
        }
        arguments.length;
    }
    TestAssignmentToIterator2(1, 2, 3, 4, 5);
    function TestArgumentsMutation() {
        var i = 0;
        for (const v323 of arguments) {
            arguments[arguments];
            arguments[i + 1] *= 2;
            i++;
        }
        arguments.length;
    }
    TestArgumentsMutation(1, 2, 3, 4, 5);
    function TestSloppyArgumentsAliasing(a340, a341, a342, a343, a344) {
        var i = 0;
        for (const v348 of arguments) {
            arguments[arguments];
            a340 = a341;
            a341 = a342;
            a343 = a344;
            i++;
        }
        arguments.length;
    }
    TestSloppyArgumentsAliasing(1, 2, 3, 4, 5);
    function TestStrictArgumentsAliasing(a361, a362, a363, a364, a365) {
        'use strict';
        var i = 0;
        for (const v369 of arguments) {
            a361 = a362;
            a362 = a363;
            a364 = a365;
            arguments[arguments];
            i++;
        }
        arguments.length;
    }
    TestStrictArgumentsAliasing(1, 2, 3, 4, 5);
    function TestArgumentsAsProto() {
        'use strict';
        var o = { __proto__: arguments };
        const v385 = [];
        Symbol.iterator;
        v385[v385];
        Symbol.iterator;
        o[o];
        o.hasOwnProperty(Symbol.iterator);
        const v393 = [];
        Symbol.iterator;
        v393[v393];
        Symbol.iterator;
        o[o];
        o[Symbol.iterator] = 10;
        o.hasOwnProperty(Symbol.iterator);
        Symbol.iterator;
        o[o];
        const v405 = [];
        Symbol.iterator;
        v405[v405];
        Symbol.iterator;
        arguments[arguments];
        o = Object.freeze({ __proto__: arguments });
        const v415 = [];
        Symbol.iterator;
        v415[v415];
        Symbol.iterator;
        o[o];
        o.hasOwnProperty(Symbol.iterator);
        const v422 = [];
        Symbol.iterator;
        v422[v422];
        Symbol.iterator;
        o[o];
        function f427() {
            o[Symbol.iterator] = 10;
        }
        try { f427(); } catch (e) {}
        o.hasOwnProperty(Symbol.iterator);
        const v433 = [];
        Symbol.iterator;
        v433[v433];
        Symbol.iterator;
        o[o];
        const v438 = [];
        Symbol.iterator;
        v438[v438];
        Symbol.iterator;
        arguments[arguments];
    }
    TestArgumentsAsProto();
} catch(e445) {
}
