function f0() {
}
var BUGNUMBER = 319980;
var summary = "GC not called during non-fatal out of memory";
var actual = "";
var expect = "Normal Exit";
try { f0(BUGNUMBER); } catch (e) {}
try { f0(summary); } catch (e) {}
const v15 = ("This test should never fail explicitly. " + "You must view the memory usage during the test. ") + "This test fails if memory usage for each subtest grows";
try { f0(v15); } catch (e) {}
var timeOut = 45 * 1000;
var interval = 0.01 * 1000;
var testFuncWatcherId;
var testFuncTimerId;
var maxTests = 5;
var currTest = 0;
gDelayTestDriverEnd = true;
try { setTimeout(testFuncWatcher, 1000); } catch (e) {}
function testFuncWatcher() {
    a = null;
    try { gc(); } catch (e) {}
    try { clearTimeout(testFuncTimerId); } catch (e) {}
    testFuncTimerId = null;
    testFuncWatcherId = null;
    if (currTest >= maxTests) {
        actual = "Normal Exit";
        try { f0(expect, actual, summary); } catch (e) {}
        try { f0("Test Completed"); } catch (e) {}
        gDelayTestDriverEnd = false;
        return;
    }
    ++currTest;
    const v58 = ("Executing test " + currTest) + "\n";
    try { f0(v58); } catch (e) {}
    let v61;
    try { v61 = setTimeout("testFuncWatcher()", timeOut); } catch (e) {}
    testFuncWatcherId = v61;
    let v63;
    try { v63 = setTimeout(testFunc, interval); } catch (e) {}
    testFuncTimerId = v63;
}
var a;
function testFunc() {
    var i;
    switch (currTest) {
        case 1:
            let v76;
            try { v76 = new Array(100000); } catch (e) {}
            a = v76;
            for ((() => {
                    i = 0;
                })();
                i < 100000;
                i++) {
                a[i] = i;
            }
            break;
        case 2:
            let v83;
            try { v83 = new Array(100000); } catch (e) {}
            a = v83;
            for ((() => {
                    i = 0;
                })();
                i < 100000;
                i++) {
                let v89;
                try { v89 = new Number(); } catch (e) {}
                a[i] = v89;
                a[i] = i;
            }
            break;
        case 3:
            let v91;
            try { v91 = new String(); } catch (e) {}
            a = v91;
            let v94;
            try { v94 = new Array(100000); } catch (e) {}
            a = v94;
            for ((() => {
                    i = 0;
                })();
                i < 100000;
                i++) {
                a[i] = i;
            }
            break;
        case 4:
            let v100;
            try { v100 = new Array(); } catch (e) {}
            a = v100;
            let v102;
            try { v102 = new Array(100000); } catch (e) {}
            a[0] = v102;
            for ((() => {
                    i = 0;
                })();
                i < 100000;
                i++) {
                const t99 = a?.[0];
                t99[i] = i;
            }
            break;
        case 5:
            let v109;
            try { v109 = new Array(); } catch (e) {}
            a = v109;
            for ((() => {
                    i = 0;
                })();
                i < 100000;
                i++) {
                a[i] = i;
            }
            break;
    }
    if (testFuncTimerId) {
        let v114;
        try { v114 = setTimeout(testFunc, interval); } catch (e) {}
        testFuncTimerId = v114;
    }
}
