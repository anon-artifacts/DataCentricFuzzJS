var x = "x";
var y = "y";
var a = "a";
var b = "b";
var c = "c";
var d = "d";
var e = "e";
var f = "f";
var g = "g";
var h = "h";
var i = "i";
function foo(a23) {
    a23[x] = 1;
    a23[y] = 2;
    a23[a] = 3;
    a23[b] = 4;
    a23[c] = 5;
    a23[d] = 6;
    a23[e] = 7;
    a23[f] = 8;
    a23[g] = 9;
    a23[h] = 10;
    a23[i] = 11;
}
function Foo() {
    foo(this);
}
var result = 0;
for (let i41 = 0; i41 < 100000; ++i41) {
    foo({ [f]: 42 });
    const v50 = new Foo();
    result += v50[x];
}
if (result != 100000) {
    throw "Bad result: " + result;
}
