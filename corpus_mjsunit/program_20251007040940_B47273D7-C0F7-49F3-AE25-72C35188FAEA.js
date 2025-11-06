function foo(a1, a2) {
    var passed = a1.length == a2.length;
    for (let i8 = 0; i8 < a1.length; i8++) {
        if (passed) {
            passed = a1[i8] == a2[i8];
        }
    }
    print("a");
    print(passed);
    print("b");
    print(passed);
    return passed;
}
foo([0,1], [0,1]);
foo([0,2], [0,2]);
foo([0,2.25], [0,2.75]);
foo([0,1], [0,1]);
foo([0,2], [0,2]);
foo([0,2.25], [0,2.75]);
