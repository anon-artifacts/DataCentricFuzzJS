function foo() {
    var s = ("concat " + " string") + " test";
    for (let i8 = 0; i8 < 5; i8++) {
        s = (s + "dst same") + " as source";
    }
    s.charCodeAt(0);
}
foo();
foo();
foo();
print("Passed");
