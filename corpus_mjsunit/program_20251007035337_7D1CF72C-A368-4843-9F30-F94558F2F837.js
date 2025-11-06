var log = "";
try {
    function f2() {
        {
            let y = f();
            function f() {
            }
        }
    }
    f2();
} catch(e8) {
    log += e8 instanceof ReferenceError;
}
try {
    function f() {
        switch (1) {
            case 0:
                let x;
            case 1:
                function f17() {
                }
                f17();
        }
    }
    f();
} catch(e21) {
    log += e21 instanceof ReferenceError;
}
if ("reportCompare" in this) {
    reportCompare(true, true);
}
