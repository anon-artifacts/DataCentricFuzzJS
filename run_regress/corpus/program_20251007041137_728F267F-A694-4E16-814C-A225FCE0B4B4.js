let x;
let y = 2;
const z = 4;
class C6 {
    static foo() {
        return 1;
    }
}
{
    let y;
    let x = 3;
    const z = 5;
    class C15 {
        static foo() {
            return 2;
        }
    }
}
C6.foo();
if (true) {
    let y;
}
function TestLocalThrows(a28, a29) {
    ("(function(arg){ 'use strict'; " + a28) + "})";
}
function TestLocalDoesNotThrow(a35) {
    ("(function(arg){ 'use strict'; " + a35) + "})()";
}
TestLocalThrows("if (true) let x;", SyntaxError);
TestLocalThrows("if (true) {} else let x;", SyntaxError);
TestLocalThrows("do let x; while (false)", SyntaxError);
TestLocalThrows("while (false) let x;", SyntaxError);
TestLocalThrows("label: let x;", SyntaxError);
TestLocalThrows("for (;false;) let x;", SyntaxError);
TestLocalDoesNotThrow("switch (true) { case true: let x; }");
TestLocalDoesNotThrow("switch (true) { default: let x; }");
TestLocalThrows("if (true) const x = 1;", SyntaxError);
TestLocalThrows("if (true) {} else const x = 1;", SyntaxError);
TestLocalThrows("do const x = 1; while (false)", SyntaxError);
TestLocalThrows("while (false) const x = 1;", SyntaxError);
TestLocalThrows("label: const x = 1;", SyntaxError);
TestLocalThrows("for (;false;) const x = 1;", SyntaxError);
TestLocalDoesNotThrow("switch (true) { case true: const x = 1; }");
TestLocalDoesNotThrow("switch (true) { default: const x = 1; }");
TestLocalThrows("const x;", SyntaxError);
TestLocalThrows("const x = 1, y;", SyntaxError);
TestLocalThrows("const x, y = 1;", SyntaxError);
TestLocalThrows("if (true) const x;", SyntaxError);
TestLocalThrows("if (true) {} else const x;", SyntaxError);
TestLocalThrows("do const x; while (false)", SyntaxError);
TestLocalThrows("while (false) const x;", SyntaxError);
TestLocalThrows("label: const x;", SyntaxError);
TestLocalThrows("for (;false;) const x;", SyntaxError);
TestLocalThrows("switch (true) { case true: const x; }", SyntaxError);
TestLocalThrows("switch (true) { default: const x; }", SyntaxError);
TestLocalDoesNotThrow("if (true) var x;");
TestLocalDoesNotThrow("if (true) {} else var x;");
TestLocalDoesNotThrow("do var x; while (false)");
TestLocalDoesNotThrow("while (false) var x;");
TestLocalDoesNotThrow("label: var x;");
TestLocalDoesNotThrow("for (;false;) var x;");
TestLocalDoesNotThrow("switch (true) { case true: var x; }");
TestLocalDoesNotThrow("switch (true) { default: var x; }");
TestLocalThrows("if (true) class x { };", SyntaxError);
TestLocalThrows("if (true) {} else class x { };", SyntaxError);
TestLocalThrows("do class x { }; while (false)", SyntaxError);
TestLocalThrows("while (false) class x { };", SyntaxError);
TestLocalThrows("label: class x { };", SyntaxError);
TestLocalThrows("for (;false;) class x { };", SyntaxError);
TestLocalDoesNotThrow("switch (true) { case true: class x { }; }");
TestLocalDoesNotThrow("switch (true) { default: class x { }; }");
TestLocalThrows("{ let f; var f; }");
TestLocalThrows("{ var f; let f; }");
TestLocalThrows("{ function f() {} let f; }");
TestLocalThrows("{ let f; function f() {} }");
TestLocalThrows("{ function f() {} var f; }");
TestLocalThrows("{ var f; function f() {} }");
TestLocalThrows("{ function f() {} class f {} }");
TestLocalThrows("{ class f {}; function f() {} }");
TestLocalThrows("{ function f() {} function f() {} }");
TestLocalThrows("function f() {} let f;");
TestLocalThrows("let f; function f() {}");
TestLocalThrows("function f() {} class f {}");
TestLocalThrows("class f {}; function f() {}");
TestLocalDoesNotThrow("function arg() {}");
TestLocalDoesNotThrow("function f() {} var f;");
TestLocalDoesNotThrow("var f; function f() {}");
TestLocalDoesNotThrow("function f() {} function f() {}");
function g(a162) {
    function f() {
        return 1;
    }
    return f();
}
function f167() {
    return 2;
}
g(f167);
function f() {
    function g0() {
        'use strict';
        function h() {
        }
        {
            function h1() {
            }
        }
    }
    {
        function g1() {
        }
    }
}
f();
TestLocalThrows("function f() { if (true) function g() {} }", SyntaxError);
TestLocalThrows("function f() { if (true) {} else function g() {} }", SyntaxError);
TestLocalThrows("function f() { do function g() {} while (false) }", SyntaxError);
TestLocalThrows("function f() { while (false) function g() {} }", SyntaxError);
TestLocalThrows("function f() { label: function g() {} }", SyntaxError);
TestLocalThrows("function f() { for (;false;) function g() {} }", SyntaxError);
TestLocalDoesNotThrow("function f() { switch (true) { case true: function g() {} } }");
TestLocalDoesNotThrow("function f() { switch (true) { default: function g() {} } }");
