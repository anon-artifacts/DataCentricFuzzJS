var global_counter = 0;
function thrower() {
    var x = global_counter++;
    if (x == 10) {
        throw "terminate";
    }
}
function test(a9) {
    for (let i11 = 0; i11 < 3; i11++) {
        global_counter = 0;
    }
}
function n1() {
    while (true) {
        thrower();
    }
}
function n2() {
    while (true) {
        while (true) {
            thrower();
        }
    }
}
function n3() {
    while (true) {
        while (true) {
            while (true) {
                thrower();
            }
        }
    }
}
function n4() {
    while (true) {
        while (true) {
            while (true) {
                while (true) {
                    thrower();
                }
            }
        }
    }
}
function b1(a37) {
    while (true) {
        thrower();
        if (a37) {
            break;
        }
    }
}
function b2(a41) {
    while (true) {
        while (true) {
            thrower();
            if (a41) {
                break;
            }
        }
    }
}
function b3(a46) {
    while (true) {
        while (true) {
            while (true) {
                thrower();
                if (a46) {
                    break;
                }
            }
            if (a46) {
                break;
            }
        }
    }
}
test(n1);
test(n2);
test(n3);
test(n4);
test(b1);
test(b2);
test(b3);
