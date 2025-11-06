function foo() {
    if (1 < 2) {
    }
    while (true) {
        if (1 < 2) {
            break;
        }
    }
}
for (let i9 = 0; i9 < 10000; i9++) {
    foo();
}
