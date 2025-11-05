function foo() {
    try {
        throw "foo error";
    } catch(e2) {
        print("Caught e=" + e2);
        {
            let e = 10;
            print("Caught e=" + e);
        }
        print("Caught e=" + e2);
    }
}
function foo2() {
    try {
        throw "foo error";
    } catch(e17) {
        print("Caught e=" + e17);
        var e = 10;
        print("Caught e=" + e);
    }
}
function foo3() {
    try {
        throw "foo error";
    } catch(e29) {
        print("Caught e=" + e29);
        var e = 10;
        {
            try {
                e = 0;
            } catch(e37) {
                print("Caught expected err=" + e37);
            }
            let e = 20;
            print("Caught e=" + e);
        }
        print("Caught e=" + e);
    }
}
function foo4() {
    try {
        throw "foo error";
    } catch(e51) {
        print("Caught e=" + e51);
        {
            let e = 20;
            print("Caught e=" + e);
        }
        print("Caught e=" + e51);
    }
}
function foo5() {
    try {
        throw "foo error";
    } catch(e66) {
        print("Caught e=" + e66);
        e66 = 10;
        {
            try {
                e66 = 0;
            } catch(e73) {
                print("Caught expected err=" + e73);
            }
            let e = 20;
            print("Caught e=" + e);
        }
        print("Caught e=" + e66);
    }
}
print("foo():");
foo();
print("");
print("foo2():");
foo2();
print("");
print("foo3():");
foo3();
print("");
print("foo4():");
foo4();
print("");
print("foo5():");
foo5();
print("");
print("PASSED");
