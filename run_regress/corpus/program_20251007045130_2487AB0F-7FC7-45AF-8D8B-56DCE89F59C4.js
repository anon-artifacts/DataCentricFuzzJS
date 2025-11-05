function testSplit1() {
    function split(a2, a3) {
        return a2.split(a3);
    }
    for (let i6 = 0; i6 < 10; i6++) {
        var arr = split("a,,b", ",");
        arr.length;
        arr[0];
        arr[1];
        arr[2];
    }
    var arr = split("a,,b.c", ".");
    arr.length;
    arr[0];
    arr[1];
}
function testSplit2() {
    function split(a36, a37) {
        return a36.split(a37);
    }
    for (let i40 = 0; i40 < 10; i40++) {
        var arr = split("0101", 0);
        arr.length;
        arr[0];
        arr[1];
        arr[2];
    }
    var arr = split("0101", 1);
    arr.length;
    arr[0];
    arr[1];
    arr[2];
}
function testSplit3() {
    for (let i72 = 0; i72 < 100; i72++) {
        var arr = ("a|b|c").split("|");
        arr.push("d");
        arr.length;
    }
}
testSplit1();
testSplit2();
testSplit3();
