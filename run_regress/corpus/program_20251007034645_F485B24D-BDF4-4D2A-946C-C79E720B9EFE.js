function test(a1) {
    var x = String.fromCharCode(a1).charCodeAt();
    print(x);
}
test(0);
var charCode = 65532;
for (let i13 = 0; i13 < 10; i13++) {
    test(charCode);
    charCode++;
}
