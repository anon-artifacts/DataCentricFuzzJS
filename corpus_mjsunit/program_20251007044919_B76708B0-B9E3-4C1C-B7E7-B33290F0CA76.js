function test_set_elem() {
    function f() {
        var bag = [];
        for (let i5 = 0; i5 != 100; ++i5) {
            var a = [0];
            a[100 * 100] = i5;
            bag.push(a);
        }
        for (let i19 = 0; i19 != 100; ++i19) {
            var a = [0];
            a[200 + i19] = i19;
            bag.push(a);
        }
        return bag;
    }
    var bag = f();
    for (let i34 = 0; i34 != 100; ++i34) {
        var a = bag[i34];
        a.length;
        (100 * 100) + 1;
        a[100 * 100];
        a[0];
        (1 + i34) in a;
    }
    for (let i59 = 0; i59 != 100; ++i59) {
        var a = bag[100 + i59];
        a.length;
        (200 + i59) + 1;
        a[200 + i59];
        a[0];
        (1 + i59) in a;
    }
}
function test_reverse() {
    function prepare_arays() {
        var bag = [];
        var base_index = 245;
        for (let i90 = 0; i90 != 50; ++i90) {
            var a = [1,2,3,4,5];
            a.length = i90 + base_index;
            bag.push(a);
        }
        return bag;
    }
    function test(a106) {
        for (let i108 = 0; i108 != a106.length; ++i108) {
            var a = a106[i108];
            a.reverse();
            a[0] = 1;
        }
    }
    var bag = prepare_arays();
    test(bag);
    for (let i122 = 0; i122 != bag.length; ++i122) {
        var a = bag[i122];
        a[0];
        for (let i133 = 1; i133 <= 5; ++i133) {
            a[a.length - i133];
        }
        for (let i143 = 1; i143 < (a.length - 5); ++i143) {
            i143 in a;
        }
    }
}
function test_push() {
    function prepare_arays() {
        var bag = [];
        var base_index = 245;
        for (let i160 = 0; i160 != 50; ++i160) {
            var a = [0];
            a.length = i160 + base_index;
            bag.push(a);
        }
        return bag;
    }
    function test(a172) {
        for (let i174 = 0; i174 != a172.length; ++i174) {
            var a = a172[i174];
            a.push(2);
            a[0] = 1;
        }
    }
    var bag = prepare_arays();
    test(bag);
    for (let i189 = 0; i189 != bag.length; ++i189) {
        var a = bag[i189];
        a[0];
        a[a.length - 1];
        for (let i205 = 1; i205 < (a.length - 1); ++i205) {
            i205 in a;
        }
    }
}
function test_unshift() {
    function prepare_arays() {
        var bag = [];
        var base_index = 245;
        for (let i222 = 0; i222 != 50; ++i222) {
            var a = [0];
            a.length = i222 + base_index;
            bag.push(a);
        }
        return bag;
    }
    function test(a234) {
        for (let i236 = 0; i236 != a234.length; ++i236) {
            var a = a234[i236];
            a.unshift(1);
            a[2] = 2;
        }
    }
    var bag = prepare_arays();
    test(bag);
    for (let i251 = 0; i251 != bag.length; ++i251) {
        var a = bag[i251];
        a[0];
        a[1];
        a[2];
        for (let i266 = 3; i266 < a.length; ++i266) {
            i266 in a;
        }
    }
}
function test_splice() {
    function prepare_arays() {
        var bag = [];
        var base_index = 245;
        for (let i281 = 0; i281 != 50; ++i281) {
            var a = [1,2];
            a.length = i281 + base_index;
            bag.push(a);
        }
        return bag;
    }
    function test(a294) {
        for (let i296 = 0; i296 != a294.length; ++i296) {
            var a = a294[i296];
            a.splice(1, 0, "a", "b", "c");
            a[2] = 100;
        }
    }
    var bag = prepare_arays();
    test(bag);
    for (let i315 = 0; i315 != bag.length; ++i315) {
        var a = bag[i315];
        a[0];
        a[1];
        a[2];
        a[3];
        a[4];
        for (let i334 = 5; i334 < a.length; ++i334) {
            i334 in a;
        }
    }
}
test_set_elem();
test_reverse();
test_push();
test_unshift();
test_splice();
