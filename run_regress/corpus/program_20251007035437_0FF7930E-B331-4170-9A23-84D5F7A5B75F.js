const v0 = /a/g;
function f1() {
    return "c";
}
("a").replace(v0, f1);
function test() {
    try {
        test();
    } catch(e7) {
        const v8 = /(b)/g;
        function f9() {
            return "c";
        }
        ("b").replace(v8, f9);
    }
}
test();
