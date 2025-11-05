var o = { foo: true };
with (o) {
    foo = 10;
}
o.foo;
