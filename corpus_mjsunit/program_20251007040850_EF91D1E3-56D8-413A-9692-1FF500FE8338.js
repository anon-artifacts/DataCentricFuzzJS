for (let i1 = 0; i1 < 10; i1++) {
    function f7() {
        return 33;
    }
    x = { a: f7, a: 4 };
}
try {
    result = x.a();
} catch(e15) {
    result = "threw " + e15.name;
}
