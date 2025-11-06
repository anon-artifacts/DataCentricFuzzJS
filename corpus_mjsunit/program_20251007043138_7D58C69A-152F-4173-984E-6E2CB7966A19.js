function write(a1) {
    print(a1 + "");
}
var x = 10;
try {
    x();
    write("no exception");
} catch(e11) {
    write(e11.message);
}
