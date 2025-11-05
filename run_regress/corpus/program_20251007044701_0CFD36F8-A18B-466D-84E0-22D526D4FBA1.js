function foo(a1, a2) {
    var s = "foo";
    for (let i6 = 0; i6 < 5; i6++) {
        s += a1[a2[i6]];
    }
    return s;
}
const v19 = {
    a: "zero",
    b: "one",
    c: "two",
    d: "three",
    e: "four",
};
var a = v19;
var b = ["a","b","c","d","e"];
for (let i29 = 0; i29 < 9; i29++) {
    foo(a, b);
}
a.e = 4;
foo(a, b);
