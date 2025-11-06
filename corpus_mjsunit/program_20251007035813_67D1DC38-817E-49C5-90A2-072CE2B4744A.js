function positive_increment() {
    for (let i2 = 5; i2 < 10; i2++) {
        if (i2 < 0) {
            return false;
        }
        if (i2 > 20) {
            return false;
        }
        if (i2 === 7) {
            return true;
        }
    }
    return false;
}
function positive_increment_strict() {
    for (let i20 = 5; i20 < 10; i20++) {
        if (i20 < 0) {
            return false;
        }
        if (i20 === 10) {
            return false;
        }
    }
    return true;
}
function positive_increment_non_strict() {
    for (let i35 = 5; i35 <= 10; i35++) {
        if (i35 < 0) {
            return false;
        }
        if (i35 === 10) {
            return true;
        }
    }
    return false;
}
function negative_increment() {
    for (let i50 = 10; i50 > 5;) {
        if (i50 < 0) {
            return false;
        }
        if (i50 > 20) {
            return false;
        }
        if (i50 === 7) {
            return true;
        }
        i50 -= 1;
    }
    return false;
}
function positive_decrement() {
    for (let i68 = 10; i68 > 5; i68--) {
        if (i68 < 0) {
            return false;
        }
        if (i68 === 7) {
            return true;
        }
    }
    return false;
}
function positive_decrement_strict() {
    for (let i83 = 10; i83 > 5; i83--) {
        if (i83 < 0) {
            return false;
        }
        if (i83 === 5) {
            return false;
        }
    }
    return true;
}
function positive_decrement_non_strict() {
    for (let i98 = 10; i98 >= 5; i98--) {
        if (i98 < 0) {
            return false;
        }
        if (i98 === 5) {
            return true;
        }
    }
    return false;
}
function negative_decrement() {
    for (let i113 = 5; i113 < 10;) {
        if (i113 < 0) {
            return false;
        }
        if (i113 === 7) {
            return true;
        }
        i113 -= -1;
    }
    return false;
}
function variable_bound() {
    for (let i129 = 5; i129 < 10; i129++) {
        for (let i136 = 5; i136 < i129; i136++) {
            if (i136 < 0) {
                return false;
            }
            if (i136 === 7) {
                return true;
            }
        }
    }
    return false;
}
function test(a149) {
    a149();
    a149();
    a149();
}
test(positive_increment);
test(positive_increment_strict);
test(positive_increment_non_strict);
test(negative_increment);
test(positive_decrement);
test(positive_decrement_strict);
test(positive_decrement_non_strict);
test(negative_decrement);
test(variable_bound);
