var X = true;
X = false;
X = true;
X = false;
function B(a6, a7) {
    this.x = a6;
    this.y = a7;
    return this;
}
function test_load() {
    const v14 = new B(1, 2);
    var a = v14;
    var f = a.x + a.x;
    if (false) {
    }
    return (f + a.x) + a.x;
}
function test_load2() {
    const v28 = new B(1, 2);
    var a = v28;
    var f = a.x + a.x;
    if (true) {
    }
    return (f + a.x) + a.x;
}
function test_store_load() {
    const v42 = new B(1, 2);
    var a = v42;
    a.x = 4;
    var b = X ? a.x : a.x;
    return b + a.x;
}
function test_store_load2() {
    const v54 = new B(1, 2);
    var a = v54;
    var c = 6;
    if (X) {
        a.x = c;
    } else {
        a.x = c;
    }
    return a.x + a.x;
}
function test_nonaliasing_store1() {
    const v64 = new B(2, 3);
    var a = v64;
    const v68 = new B(3, 4);
    var b = v68;
    if (X) {
    }
    b.x = 4;
    if (X) {
    }
    var f = a.x;
    if (X) {
    }
    b.x = 5;
    if (X) {
    }
    var g = a.x;
    if (X) {
    }
    b.x = 6;
    if (X) {
    }
    var h = a.x;
    if (X) {
    }
    b.x = 7;
    if (X) {
    }
    return ((f + g) + h) + a.x;
}
function test_loop(a85) {
    const v88 = new B(2, 3);
    var a = v88;
    var v = a.x;
    var total = v;
    var i = 0;
    while (i++ < 10) {
        total = a.x;
        a.y = 4;
    }
    return total;
}
function test_loop2(a101) {
    const v104 = new B(2, 3);
    var a = v104;
    var v = a.x;
    var total = v;
    var i = 0;
    while (i++ < 10) {
        total = a.x;
        a.y = 4;
        var j = 0;
        while (j++ < 10) {
            total = a.x;
            a.y = 5;
        }
        total = a.x;
        a.y = 6;
        j = 0;
        while (j++ < 10) {
            total = a.x;
            a.y = 7;
        }
    }
    return total;
}
function killall() {
    try {
    } catch(e132) {
    }
}
function test_store_load_kill() {
    const v136 = new B(1, 2);
    var a = v136;
    if (X) {
    }
    a.x = 4;
    if (X) {
    }
    var f = a.x;
    if (X) {
    }
    a.x = 5;
    if (X) {
    }
    var g = a.x;
    if (X) {
    }
    killall();
    if (X) {
    }
    a.x = 6;
    if (X) {
    }
    var h = a.x;
    if (X) {
    }
    a.x = 7;
    if (X) {
    }
    return ((f + g) + h) + a.x;
}
function test_store_store() {
    const v156 = new B(6, 7);
    var a = v156;
    if (X) {
    }
    a.x = 7;
    if (X) {
    }
    a.x = 7;
    if (X) {
    }
    a.x = 7;
    if (X) {
    }
    a.x = 7;
    if (X) {
    }
    return a.x;
}
function test(a164, a165) {
    X = true;
    a165();
    a165();
    X = false;
    a165();
    a165();
    X = true;
    a165();
    a165();
    X = false;
    a165();
    a165();
}
test(4, test_load);
test(8, test_store_load);
test(12, test_store_load2);
test(8, test_nonaliasing_store1);
test(22, test_store_load_kill);
test(7, test_store_store);
test(2, test_loop);
test(2, test_loop2);
