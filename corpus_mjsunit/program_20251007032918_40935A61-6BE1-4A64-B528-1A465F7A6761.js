function write(a1) {
    print(a1 + "");
}
function PrintDescriptor(a7, a8) {
    write((a7 + ":configurable : ") + a8.configurable);
    write((a7 + ":enumerable   : ") + a8.enumerable);
    write((a7 + ":writable     : ") + a8.writable);
    write((a7 + ":getter       : ") + a8.get);
    write((a7 + ":setter       : ") + a8.set);
    write((a7 + ":value        : ") + a8.value);
}
function exceptToString(a40) {
    if (a40 instanceof TypeError) {
        return "TypeError";
    }
    if (a40 instanceof ReferenceError) {
        return "ReferenceError";
    }
    if (a40 instanceof EvalError) {
        return "EvalError";
    }
    if (a40 instanceof SyntaxError) {
        return "SyntaxError";
    }
    return "Unknown Error";
}
function Test1() {
    var str = "function.caller get";
    try {
        Test1.caller;
    } catch(e59) {
        write((("Exception: " + str) + " ") + exceptToString(e59));
        return;
    }
    write("Return: " + str);
}
Test1();
function Test2() {
    var str = "function.caller set";
    try {
        Test2.caller = 10;
    } catch(e76) {
        write((("Exception: " + str) + " ") + exceptToString(e76));
        return;
    }
    write("Return: " + str);
}
Test2();
function Test3() {
    var str = "function.arguments get";
    try {
        Test3.arguments;
    } catch(e93) {
        write((("Exception: " + str) + " ") + exceptToString(e93));
        return;
    }
    write("Return: " + str);
}
Test3();
function Test4() {
    var str = "function.arguments get";
    try {
        Test4.arguments = 10;
    } catch(e110) {
        write((("Exception: " + str) + " ") + exceptToString(e110));
        return;
    }
    write("Return: " + str);
}
Test4();
function Test5() {
    var str = "function.caller get";
    try {
        PrintDescriptor("Test5.caller", Object.getOwnPropertyDescriptor(Test5, "caller"));
    } catch(e131) {
        write((("Exception: " + str) + " ") + exceptToString(e131));
        return;
    }
    write("Return: " + str);
}
Test5();
function Test6() {
    var str = "function.arguments get";
    try {
        PrintDescriptor("Test6.arguments", Object.getOwnPropertyDescriptor(Test6, "arguments"));
    } catch(e152) {
        write((("Exception: " + str) + " ") + exceptToString(e152));
        return;
    }
    write("Return: " + str);
}
Test6();
