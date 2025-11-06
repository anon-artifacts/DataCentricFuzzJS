function write(a1) {
    print(a1 + "");
}
function exceptToString(a7) {
    if (a7 instanceof TypeError) {
        return "TypeError";
    }
    if (a7 instanceof ReferenceError) {
        return "ReferenceError";
    }
    if (a7 instanceof EvalError) {
        return "EvalError";
    }
    if (a7 instanceof SyntaxError) {
        return "SyntaxError";
    }
    return "Unknown Error";
}
function Test1() {
    var str = "Same name property";
    try {
        var o = { x: 10, x: 20 };
        write("o.x : " + o.x);
    } catch(e32) {
        write((("Exception: " + str) + " ") + exceptToString(e32));
        return;
    }
    write("Return: " + str);
}
Test1();
function Test2() {
    var str = "Same name getter";
    try {
        const v51 = {
            get x() {
                return "first";
            },
            get x() {
                return "second";
            },
        };
        var o = v51;
        write("o.x : " + o.x);
    } catch(e57) {
        write((("Exception: " + str) + " ") + exceptToString(e57));
        return;
    }
    write("Return: " + str);
}
Test2();
