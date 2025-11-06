var foo = "a";
for (let i3 = 0; i3 < 12; i3++) {
    foo += foo;
}
foo = (foo + "b") + foo;
foo.replace(/b/, "a");
