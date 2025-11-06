function foo(a1) {
    return a1[0];
}
var a = [1,2,,4];
var b = ["abcd",0];
foo(b);
foo(a);
var c = [,0];
foo(c);
