function test1() {
    var src = "switch(x) {\n";
    for (let i5 = -1; i5 < 4; i5++) {
        src += i5 >= 0 ? src : "default:\n";
    }
}
test1();
