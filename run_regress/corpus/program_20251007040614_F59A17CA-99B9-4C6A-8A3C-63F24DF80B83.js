var s = [,0.1];
function foo(a5, a6) {
    var x = s[a5];
    s[1] = 0.1;
    return x + a6;
}
foo(1, 2);
foo(1, 2);
foo(0, "2");
