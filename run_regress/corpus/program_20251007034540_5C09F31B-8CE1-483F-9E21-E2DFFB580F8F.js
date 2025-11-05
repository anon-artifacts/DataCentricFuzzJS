function f() {
    try {
        return 42;
    } finally {
        var executed = false;
        while (!executed) {
            try {
                break;
            } finally {
                executed = true;
            }
        }
    }
    return 87;
}
f();
