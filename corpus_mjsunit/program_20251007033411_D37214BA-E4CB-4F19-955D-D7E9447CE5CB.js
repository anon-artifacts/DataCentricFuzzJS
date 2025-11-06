function foo(a1) {
    var x = a1 + 3000000000;
    var y = x + x;
    var z = x >> 1;
    var w = y + x;
    return [x,y,z,w];
}
for (let i14 = 0; i14 < 200; i14++) {
    foo(1000000000);
}
foo(1000000000);
