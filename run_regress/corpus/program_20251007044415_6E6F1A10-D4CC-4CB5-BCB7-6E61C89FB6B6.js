function f(a1) {
    var s = ("We turn {" + a1) + "} into a ConsString now";
    return s.length;
}
f("a");
f("b");
f("c");
function g(a18) {
    var s = ("We also try to materalize {" + a18) + "} when deopting";
    return s.length;
}
g("a");
g("b");
g("c");
