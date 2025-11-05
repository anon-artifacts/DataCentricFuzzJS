var g = 1;
function test() {
    throw g;
}
try {
    test();
} catch(e4) {
    print(e4);
}
print(g);
