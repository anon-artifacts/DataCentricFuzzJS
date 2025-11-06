function f(a1, a2) {
    var a = NaN;
    var b = 13;
    var c = "test";
    var d;
    var e = null;
    var f = 15.7;
    var g = Math.fround(189777.111);
    var h = "ABC";
    var i = String.fromCharCode(65, 65, 65);
    var j = {};
    var k = Math.fround(("").charCodeAt(15));
    a === a;
    a !== a;
    k === k;
    k !== k;
    a1 === a1;
    a1 !== a1;
    b === b;
    b !== b;
    c === c;
    c !== c;
    d === d;
    d !== d;
    e === e;
    e !== e;
    f === f;
    f !== f;
    g === g;
    g !== g;
    h === h;
    h !== h;
    i === i;
    i !== i;
    j === j;
    j !== j;
    a2 === a2;
    a2 !== a2;
}
function test() {
    for (let i88 = 0; i88 < 100; i88++) {
        f(("").charCodeAt(15), 42);
    }
}
test();
