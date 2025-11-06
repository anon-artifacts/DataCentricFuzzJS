function fillDense(a1) {
}
function testDenseUKeyUArray(a3, a4) {
    function f5() {
        return this[3];
    }
    a3.push(f5);
    function f9() {
        return this[4];
    }
    a3.push(f9);
    function f13() {
        return this[5];
    }
    a3.push(f13);
    a3.push(20);
    a3.push("hi");
    a3.push(500);
    a3[a4]();
    a3[a4 + 1]();
    a3[a4 + 2]();
}
function testDenseVKeyUArray(a34) {
    function f35() {
        return this[3];
    }
    a34.push(f35);
    function f39() {
        return this[4];
    }
    a34.push(f39);
    function f43() {
        return this[5];
    }
    a34.push(f43);
    a34.push(20);
    a34.push("hi");
    a34.push(500);
    var key = a34.length & 1;
    a34[key]();
    a34[(key + 1) & 3]();
    a34[(key + 2) & 3]();
}
function testDenseKKeyUArray(a72, a73) {
    function f74() {
        return this[3];
    }
    a72.push(f74);
    function f78() {
        return this[4];
    }
    a72.push(f78);
    function f82() {
        return this[5];
    }
    a72.push(f82);
    a72.push(20);
    a72.push("hi");
    a72.push(500);
    a72[0]();
    a72[1]();
    a72[2]();
}
function testDenseUKeyVArray(a102) {
    function f103() {
        return this[3];
    }
    function f106() {
        return this[4];
    }
    function f109() {
        return this[5];
    }
    var a = [f103,f106,f109,20,"hi",500];
    a[a102]();
    a[a102 + 1]();
    a[a102 + 2]();
}
function testDenseVKeyVArray() {
    function f128() {
        return this[3];
    }
    function f131() {
        return this[4];
    }
    function f134() {
        return this[5];
    }
    var a = [f128,f131,f134,20,"hi",500];
    var key = a.length & 1;
    a[key]();
    a[(key + 1) & 3]();
    a[(key + 2) & 3]();
}
function testDenseKKeyVArray() {
    function f161() {
        return this[3];
    }
    function f164() {
        return this[4];
    }
    function f167() {
        return this[5];
    }
    var a = [f161,f164,f167,20,"hi",500];
    a[0]();
    a[1]();
    a[2]();
}
for (let i185 = 0; i185 < 5; i185++) {
    testDenseUKeyUArray([], 0);
    testDenseVKeyUArray([]);
    testDenseKKeyUArray([]);
    testDenseUKeyVArray(0);
    testDenseVKeyVArray();
    testDenseKKeyVArray();
}
