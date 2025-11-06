function testPushConvert() {
    var x = [];
    for (let i4 = 0; i4 < 10; i4++) {
        x.push(i4 + 0.5);
    }
    for (let i14 = 0; i14 < 5; i14++) {
        x.push(i14);
    }
    var res = 0;
    for (let i24 = 0; i24 < x.length; i24++) {
        res += x[i24];
    }
}
testPushConvert();
function testArrayInitializer() {
    var x = [0.5,1.5,2.5,3];
    var res = 0;
    for (let i43 = 0; i43 < x.length; i43++) {
        res += x[i43];
    }
}
for (let i52 = 0; i52 < 5; i52++) {
    testArrayInitializer();
}
function testArrayConstructor() {
    var x = Array(0.5, 1.5, 2.5, 3);
    var res = 0;
    for (let i70 = 0; i70 < x.length; i70++) {
        res += x[i70];
    }
}
for (let i79 = 0; i79 < 5; i79++) {
    testArrayConstructor();
}
function addInt(a87) {
    try {
        a87[0] = 10;
    } catch(e89) {
    }
}
function testBaseline() {
    var x = Array(0.5, 1.5, 2.5, 3);
    addInt(x);
    var res = 0;
    for (let i102 = 0; i102 < x.length; i102++) {
        res += x[i102];
    }
}
for (let i111 = 0; i111 < 5; i111++) {
    testBaseline();
}
