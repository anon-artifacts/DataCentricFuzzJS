function test1() {
    var src = "var a = 0;\n" + "switch(x) {\n";
    for (let i7 = -1; i7 < 4; i7++) {
        src += i7 >= 0 ? ("case " + i7) + ":\n" : "default:\n";
        for (let i22 = 0; i22 < 1500; i22++) {
            src += ("a = " + i7) + ";";
        }
        src += "break;\n";
    }
    src += "}\n";
    src += "return a;";
    const v37 = new Function("x", src);
    var f = v37;
    f(0);
    f(4);
    -1;
    f();
    -1;
    f(1.1);
    -1;
    f(3);
}
test1();
