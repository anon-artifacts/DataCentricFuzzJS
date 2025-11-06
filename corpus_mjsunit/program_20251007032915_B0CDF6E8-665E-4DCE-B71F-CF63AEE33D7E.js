function testInFunctionDeclaration() {
    var calls = 0;
    function f() {
        const v4 = () => {
            calls++;
            arguments.length;
            arguments[0];
            arguments[1];
        };
        v4();
    }
    f("a", "b");
    calls = 0;
    new f("a", "b");
}
testInFunctionDeclaration();
function testInFunctionExpression() {
    var calls = 0;
    function f29() {
        const v30 = () => {
            calls++;
            arguments.length;
            arguments[0];
            arguments[1];
        };
        v30();
    }
    var f = f29;
    f("a", "b");
}
testInFunctionExpression();
function testInConstructor() {
    'use strict';
    var calls = 0;
    class C51 {
        constructor() {
            const v53 = () => {
                calls++;
                arguments.length;
                arguments[0];
                arguments[1];
            };
            v53();
        }
    }
    new C51("a", "b");
}
testInConstructor();
function testInSetter() {
    'use strict';
    var calls = 0;
    const v84 = {
        set x(a74) {
            const v75 = () => {
                calls++;
                arguments.length;
                arguments[0];
            };
            v75();
        },
    };
    var o = v84;
    o.x = "a";
}
testInSetter();
function testMappedArguments() {
    var calls = 0;
    function f(a93) {
        a93 = "c";
        const v95 = () => {
            calls++;
            arguments.length;
            arguments[0];
            a93 = "a";
            arguments[0];
            arguments[1];
        };
        v95();
    }
    f("a", "b");
}
testMappedArguments();
function testUnMappedArguments() {
    'use strict';
    var calls = 0;
    function f(a120) {
        a120 = "c";
        const v122 = () => {
            calls++;
            arguments.length;
            arguments[0];
            arguments[1];
        };
        v122();
    }
    f("a", "b");
}
testUnMappedArguments();
function testClosure() {
    var calls = 0;
    function f(a143) {
        const v144 = () => {
            calls++;
            arguments.length;
            arguments[0];
            arguments[1];
        };
        return v144;
    }
    const t109 = f("a", "b");
    t109();
}
testClosure();
function testClosureMappedArguments() {
    var calls = 0;
    function f(a165) {
        a165 = "c";
        const v167 = () => {
            calls++;
            arguments.length;
            arguments[0];
            a165 = "a";
            arguments[0];
            arguments[1];
        };
        return v167;
    }
    const t127 = f("a", "b");
    t127();
}
testClosureMappedArguments();
function testParamNamedArguments() {
    var calls = 0;
    function f(a192) {
        const v193 = () => {
            calls++;
        };
        v193();
    }
    f("a");
}
testParamNamedArguments();
