function bar(a1) {
    if (a1 >= 40) {
        return;
    }
    if (("aaa,bbb,ccc").split(",")[0].length != 3) {
        throw "???";
    }
    bar(a1 + 1);
}
bar(0);
