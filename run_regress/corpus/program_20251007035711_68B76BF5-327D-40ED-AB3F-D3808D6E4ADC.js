function f0() {
    var forceDeopt = 0;
    function inner(a4) {
        'use strict';
        a4 = 2;
        forceDeopt + 1;
        return arguments[0];
    }
    inner(1);
    inner(1);
    inner(1);
    forceDeopt = "not a number";
    inner(1);
}
f0();
function f24() {
    var forceDeopt = 0;
    function inner(a28) {
        'use strict';
        a28 = 2;
        forceDeopt + 1;
        return arguments[0];
    }
    function outer(a35) {
        return inner(a35);
    }
    outer(1);
    outer(1);
    outer(1);
    forceDeopt = "not a number";
    outer(1);
}
f24();
function f51() {
    var forceDeopt = 0;
    function inner(a55, a56, a57) {
        'use strict';
        a55 = 3;
        forceDeopt + 1;
        return arguments[0];
    }
    function middle(a64) {
        'use strict';
        return inner(10 * (a64 = 2), 20 * a64, 30 * a64) + arguments[0];
    }
    function outer(a77) {
        return middle(a77);
    }
    outer(1);
    outer(1);
    outer(1);
    forceDeopt = "not a number";
    outer(1);
}
f51();
