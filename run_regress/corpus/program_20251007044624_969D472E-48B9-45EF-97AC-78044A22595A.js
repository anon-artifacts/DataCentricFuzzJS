function W() {
    test();
}
class C3 extends W {
}
class C4 extends C3 {
}
class C5 extends C4 {
}
function test() {
    const v9 = new Error();
    for (const v12 of v9.stack.split("\n")) {
        function lineNumber(a14) {
            return +a14.match(/(\d+):\d+$/)[1];
        }
        if (v12.startsWith("Z@")) {
            lineNumber(v12);
        }
        if (v12.startsWith("Y@")) {
            lineNumber(v12);
        }
        if (v12.startsWith("X@")) {
            lineNumber(v12);
        }
    }
}
new C5();
