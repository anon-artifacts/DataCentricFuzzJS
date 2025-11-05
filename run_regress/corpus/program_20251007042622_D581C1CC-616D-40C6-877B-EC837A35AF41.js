function test0() {
    function func80() {
    }
    let v2;
    try { v2 = new func80(); } catch (e) {}
    var uniqobj22 = v2;
    try {
        function f4() {
            try {
                try {
                } catch(e5) {
                }
                function func104() {
                    uniqobj22 >>>= 1;
                }
                try { func104(); } catch (e) {}
            } catch(e9) {
                try { WScript.Echo("FAILED"); } catch (e) {}
            } finally {
                try { protoObj0(); } catch (e) {}
            }
        }
        try { f4(); } catch (e) {}
    } catch(e16) {
    }
}
try { test0(); } catch (e) {}
try { test0(); } catch (e) {}
function test1() {
    var obj1 = {};
    function f22() {
        try {
        } catch(e23) {
        }
    }
    var func2 = f22;
    obj1.method1 = func2;
    let v26;
    try { v26 = new Array(); } catch (e) {}
    var IntArr0 = v26;
    function v0() {
        function v2() {
            try {
                try { obj1.method1(); } catch (e) {}
                function func7() {
                    IntArr0?.[1];
                }
                try { func7(); } catch (e) {}
            } catch(e34) {
                try { WScript.Echo("FAILED"); } catch (e) {}
            }
            var v3 = runtime_error;
        }
        try {
            try { v2(); } catch (e) {}
        } catch(e41) {
        }
    }
    try { v0(); } catch (e) {}
}
try { test1(); } catch (e) {}
try { test1(); } catch (e) {}
try { test1(); } catch (e) {}
function test2() {
    function makeArrayLength(a48) {
        if (a48 < 1) {
        }
    }
    function f51() {
        try {
        } finally {
            const v54 = 393266900 * 1957286472;
            try { makeArrayLength(v54); } catch (e) {}
        }
    }
    var func2 = f51;
    try { func2(); } catch (e) {}
    try {
        try { func2(); } catch (e) {}
    } finally {
    }
}
try { test2(); } catch (e) {}
try { test2(); } catch (e) {}
try { test2(); } catch (e) {}
try { WScript.Echo("Passed"); } catch (e) {}
