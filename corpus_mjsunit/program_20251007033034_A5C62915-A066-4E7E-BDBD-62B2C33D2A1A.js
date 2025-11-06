function X() {
}
function Y() {
}
function testCallProtoMethod() {
    const v3 = new X();
    const v4 = new X();
    const v6 = new Y();
    const v7 = new Y();
    var a = [v3,v4,__proto__,v6,v7];
}
testCallProtoMethod();
function testNot() {
    var r;
    for (let i15 = 0; i15 < 10; ++i15) {
        r = [];
    }
}
testNot();
