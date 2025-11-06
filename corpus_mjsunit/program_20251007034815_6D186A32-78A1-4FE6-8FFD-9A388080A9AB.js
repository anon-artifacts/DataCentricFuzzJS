var Count = 0;
var Failed = 0;
function Check(a5, a6, a7) {
    if (a6 != a7) {
        print((((("Test #" + Count) + " failed. <") + a5) + "> Expected ") + a7);
        Failed++;
    }
}
function test() {
    var x = NaN + 0.5;
    var r = false;
    Count++;
    r = false;
    if (x == x) {
        r = true;
    }
    Check("x == x", r, false);
    Count++;
    r = false;
    if (x != x) {
        r = true;
    }
    Check("x != x", r, true);
    Count++;
    r = false;
    if (x <= x) {
        r = true;
    }
    Check("x <= x", r, false);
    Count++;
    r = false;
    if (x < x) {
        r = true;
    }
    Check("x < x", r, false);
    Count++;
    r = false;
    if (x >= x) {
        r = true;
    }
    Check("x >= x", r, false);
    Count++;
    r = false;
    if (x > x) {
        r = true;
    }
    Check("x > x", r, false);
    Count++;
    Check("x == x", x == x, false);
    Count++;
    Check("x != x", x != x, true);
    Count++;
    Check("x <= x", x <= x, false);
    Count++;
    Check("x < x", x < x, false);
    Count++;
    Check("x >= x", x >= x, false);
    Count++;
    Check("x > x", x > x, false);
    Count++;
    r = false;
    if (x === x) {
        r = true;
    }
    Check("x === x", r, false);
    Count++;
    r = false;
    if (x !== x) {
        r = true;
    }
    Check("x !== x", r, true);
    if (!Failed) {
        print("Passed");
    }
}
test();
