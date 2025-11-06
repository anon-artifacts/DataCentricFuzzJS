function f0() {
    function foo(a2, a3) {
        if ((a2 * a3) === 0) {
            return 0;
        }
        return 1;
    }
    foo(0, 1);
    foo(1, 1);
    foo(1, 2);
    foo(0, 1);
    foo(1, 1);
    foo(1, 2);
    foo();
    foo(-3, 0);
    foo(0, -3);
    foo();
}
f0();
function f46() {
    function bar(a48, a49) {
        return a48 === a49;
    }
    bar(0.1, 0.5);
    bar(-0, 100);
    function foo(a59, a60) {
        if (bar(a59 * a60, 0)) {
            return 0;
        }
        return 1;
    }
    foo(0, 1);
    foo(1, 1);
    foo(1, 2);
    foo(0, 1);
    foo(1, 1);
    foo(1, 2);
    foo();
    foo(-3, 0);
    foo(0, -3);
    foo();
}
f46();
function f103() {
    function foo(a105, a106) {
        if ((a105 * a106) < 0) {
            return 0;
        }
        return 1;
    }
    foo(1, -1);
    foo(1, 1);
    foo(1, 2);
    foo(1, -1);
    foo(1, 1);
    foo(1, 2);
    foo();
    foo(-3, 0);
    foo(0, -3);
    foo();
}
f103();
function f151() {
    function bar(a153, a154) {
        return a153 < a154;
    }
    bar(0.1, 0.5);
    bar(-0, 100);
    function foo(a164, a165) {
        if (bar(a164 * a165, 0)) {
            return 0;
        }
        return 1;
    }
    foo(1, -1);
    foo(1, 1);
    foo(1, 2);
    foo(1, -1);
    foo(1, 1);
    foo(1, 2);
    foo();
    foo(-3, 0);
    foo(0, -3);
    foo();
}
f151();
function f210() {
    function foo(a212, a213) {
        if ((a212 * a213) <= 0) {
            return 0;
        }
        return 1;
    }
    foo(0, 1);
    foo(1, 1);
    foo(1, 2);
    foo(0, 1);
    foo(1, 1);
    foo(1, 2);
    foo();
    foo(-3, 0);
    foo(0, -3);
    foo();
}
f210();
function f256() {
    function bar(a258, a259) {
        return a258 <= a259;
    }
    bar(0.1, 0.5);
    bar(-0, 100);
    function foo(a269, a270) {
        if (bar(a269 * a270, 0)) {
            return 0;
        }
        return 1;
    }
    foo(0, 1);
    foo(1, 1);
    foo(1, 2);
    foo(0, 1);
    foo(1, 1);
    foo(1, 2);
    foo();
    foo(-3, 0);
    foo(0, -3);
    foo();
}
f256();
