var success = 0;
var expected_bool = 0;
var expected_int = 0;
var expected_double = 0;
var expected_string = 0;
var expected_object = 0;
var expected_symbol = 0;
function test_type_stable_ic() {
    var a;
    var b = null;
    var c = false;
    var d = 0;
    var e = "";
    var f = Symbol();
    var g = {};
    var h = -0;
    for (let i34 = 0; i34 < 30; i34++) {
        switch (i34 % 3) {
            case 0:
                d = 0;
                e = "hi";
                expected_string++;
                c = true;
                expected_bool++;
                h = 0;
                break;
            case 1:
                d = 1;
                expected_int++;
                e = "";
                c = false;
                h = NaN;
                break;
            case 2:
                d = 2;
                expected_int++;
                h = 1.234;
                expected_double++;
                g = {};
                break;
        }
        if (a) {
            success++;
        }
        if (b) {
            success++;
        }
        if (c) {
            success++;
        }
        if (d) {
            success++;
        }
        if (e) {
            success++;
        }
        if (f) {
            success++;
        }
        expected_symbol++;
        if (g) {
            success++;
        }
        expected_object++;
        if (h) {
            success++;
        }
    }
}
test_type_stable_ic();
((((expected_bool + expected_double) + expected_int) + expected_object) + expected_string) + expected_symbol;
function helper(a78, a79, a80) {
    var r = 0;
    for (let i84 = 0; i84 < a80; i84++) {
        r = a78(a79);
    }
    return r ? 1 : 0;
}
function test_transition(a94, a95, a96, a97, a98) {
    var a = helper(a94, a95, 30);
    var x = helper(a94, a96, 5);
}
const v105 = (a106) => {
    if (a106) {
        return true;
    } else {
        return false;
    }
};
var fun1 = v105;
const v110 = (a111) => {
    if (a111) {
        return true;
    } else {
        return false;
    }
};
var fun2 = v110;
const v115 = (a116) => {
    if (a116) {
        return true;
    } else {
        return false;
    }
};
var fun3 = v115;
const v120 = (a121) => {
    if (a121) {
        return true;
    } else {
        return false;
    }
};
var fun4 = v120;
const v125 = (a126) => {
    if (a126) {
        return true;
    } else {
        return false;
    }
};
var fun5 = v125;
const v130 = (a131) => {
    if (a131) {
        return true;
    } else {
        return false;
    }
};
var fun6 = v130;
const v135 = (a136) => {
    if (a136) {
        return true;
    } else {
        return false;
    }
};
var fun7 = v135;
const v140 = (a141) => {
    if (a141) {
        return true;
    } else {
        return false;
    }
};
var fun8 = v140;
test_transition(fun1, NaN, 1, 0, 1);
test_transition(fun2, 1, NaN, 1, 0);
test_transition(fun3, NaN, {}, 0, 1);
test_transition(fun4, {}, NaN, 1, 0);
test_transition(fun5, {}, null, 1, 0);
test_transition(fun6, null, {}, 0, 1);
test_transition(fun7, Symbol("hi"), null, 1, 0);
test_transition(fun8, null, Symbol("lo"), 0, 1);
