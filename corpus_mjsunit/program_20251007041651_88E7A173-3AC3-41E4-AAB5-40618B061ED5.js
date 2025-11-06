function foo(a1) {
    return a1?.[5];
}
foo("abcdef");
foo("a");
foo("abcdef");
foo("a");
foo();
const t3 = String.prototype;
t3[5] = "5";
foo("abcdef");
foo("a");
foo("abcdef");
foo("a");
foo();
