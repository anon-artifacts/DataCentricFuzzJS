function foo(a1, a2) {
    return (a1[1] >>> a2) | (a1[0] << (32 - a2));
}
word = [4097,0];
var expected = foo(word, 1);
foo(word, 1);
var optimized = foo(word, 1);
