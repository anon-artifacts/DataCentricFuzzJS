function f0() {
    try { f(); } catch (e) {}
    if (true) {
        f();
        function f() {
            return 1;
        }
        f();
        function f() {
            return 2;
        }
        f();
    }
    f();
}
f0();
`\n  (function() {\n    "use strict";\n    if (true) {\n      function f() { return 1 }\n      function f() { return 2 }\n    }\n  })();\n`;
`\n  (function() {\n    if (true) {\n      let f;\n      function f() { return 2 }\n    }\n  })();\n`;
`\n  (function() {\n    if (true) {\n      function f() { return 2 }\n      let f;\n    }\n  })();\n`;
`\n  (function() {\n    if (true) {\n      const f;\n      function f() { return 2 }\n    }\n  })();\n`;
`\n  (function() {\n    if (true) {\n      function f() { return 2 }\n      const f;\n    }\n  })();\n`;
function f24() {
    try { f(); } catch (e) {}
    if (true) {
        try { f(); } catch (e) {}
        {
            function f() {
                return 1;
            }
        }
        f();
        {
            function f() {
                return 2;
            }
        }
        f();
    }
    f();
}
f24();
