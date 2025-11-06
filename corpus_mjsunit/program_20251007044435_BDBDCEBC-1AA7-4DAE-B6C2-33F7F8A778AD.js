var foo = false;
function bar() {
    return 4 % (foo = 2);
}
bar();
