var pattern = /abc/;
var string = "aaaaaaaa";
function test() {
    pattern.lastIndex = 3;
    var result = pattern.exec(string);
    pattern.lastIndex;
}
for (let i12 = 0; i12 < 10; i12++) {
    test();
}
function test2() {
    pattern.lastIndex = 3;
    var result = pattern.test(string);
    pattern.lastIndex;
}
for (let i27 = 0; i27 < 10; i27++) {
    test2();
}
