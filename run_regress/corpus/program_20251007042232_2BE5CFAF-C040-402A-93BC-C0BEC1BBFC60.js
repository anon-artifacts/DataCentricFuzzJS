function test(a1, a2, a3, a4, a5, a6, a7, a8) {
    if (a1 == a2) {
        print("fail");
    } else {
        print("pass");
    }
    if (a1 === a2) {
        print("fail");
    } else {
        print("pass");
    }
    if (a1 != a2) {
        print("pass");
    } else {
        print("fail");
    }
    if (a1 !== a2) {
        print("pass");
    } else {
        print("fail");
    }
    if (a1 == a3) {
        print("pass");
    } else {
        print("fail");
    }
    if (a1 === a3) {
        print("pass");
    } else {
        print("fail");
    }
    if (a1 != a3) {
        print("fail");
    } else {
        print("pass");
    }
    if (a1 !== a3) {
        print("fail");
    } else {
        print("pass");
    }
    if (a1.charAt(0) == a4) {
        print("pass");
    } else {
        print("fail");
    }
    if (a1.charAt(0) === a4) {
        print("pass");
    } else {
        print("fail");
    }
    if (a1.charAt(0) != a4) {
        print("fail");
    } else {
        print("pass");
    }
    if (a1.charAt(0) !== a4) {
        print("fail");
    } else {
        print("pass");
    }
    if (a1.charAt(0) == a5) {
        print("fail");
    } else {
        print("pass");
    }
    if (a1.charAt(0) === a5) {
        print("fail");
    } else {
        print("pass");
    }
    if (a1.charAt(0) != a5) {
        print("pass");
    } else {
        print("fail");
    }
    if (a1.charAt(0) !== a5) {
        print("pass");
    } else {
        print("fail");
    }
    if (a1 == a6) {
        print("fail");
    } else {
        print("pass");
    }
    if (a1 === a6) {
        print("fail");
    } else {
        print("pass");
    }
    if (a1 != a6) {
        print("pass");
    } else {
        print("fail");
    }
    if (a1 !== a6) {
        print("pass");
    } else {
        print("fail");
    }
    if (a7 == a1) {
        print("fail");
    } else {
        print("pass");
    }
    if (a7 === a1) {
        print("fail");
    } else {
        print("pass");
    }
    if (a7 != a1) {
        print("pass");
    } else {
        print("fail");
    }
    if (a7 !== a1) {
        print("pass");
    } else {
        print("fail");
    }
    if (a7 == a8) {
        print("pass");
    } else {
        print("fail");
    }
    if (a7 === a8) {
        print("pass");
    } else {
        print("fail");
    }
    if (a7 != a8) {
        print("fail");
    } else {
        print("pass");
    }
    if (a7 !== a8) {
        print("fail");
    } else {
        print("pass");
    }
}
var s1 = "This is a string";
var s2 = "This is another string";
var s3 = "This is a string";
var s4 = "T";
var s5 = "X";
var s6 = {};
var s7 = s1.slice(-1, 0);
var s8 = "";
test(s1, s2, s3, s4, s5, s6, s7, s8);
