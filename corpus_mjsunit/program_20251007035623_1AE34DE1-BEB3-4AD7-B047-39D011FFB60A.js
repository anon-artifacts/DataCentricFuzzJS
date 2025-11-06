var x = 1;
function foo(a3) {
    with (a3) {
    }
    return 100;
}
foo("str");
