function f1() {
}
var go = { foo: 1, print: f1 };
function test1() {
    for (let i6 = 0; i6 < 2; ++i6) {
        if ((i6 % 2) == 1) {
            go.print();
            x = go.foo;
        } else {
            arguments = 1;
        }
    }
    print(arguments);
}
test1();
go.bar = 1;
test1();
