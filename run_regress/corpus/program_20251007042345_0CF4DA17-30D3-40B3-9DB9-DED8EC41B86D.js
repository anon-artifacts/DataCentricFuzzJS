function TestMutableHeapNumberLiteral() {
    var data = { a: 0, b: 0 };
    data.a += 0.1;
    data.a;
    data.b;
}
TestMutableHeapNumberLiteral();
TestMutableHeapNumberLiteral();
TestMutableHeapNumberLiteral();
TestMutableHeapNumberLiteral();
TestMutableHeapNumberLiteral();
