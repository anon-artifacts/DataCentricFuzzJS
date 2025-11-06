function baz(a1) {
    a1();
}
function goo() {
}
baz(goo);
baz(goo);
function bar(a7) {
    if (a7 == 0) {
        baz(1);
    }
}
bar(1);
bar(1);
bar(1);
