function f() {
    with ({ value: "foo" }) {
        return value;
    }
}
f();
f();
