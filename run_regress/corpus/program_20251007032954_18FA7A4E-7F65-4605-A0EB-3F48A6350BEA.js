function f() {
    f();
}
var finally_ = 0;
try {
    try {
        try {
            f();
        } finally {
            finally_++;
            try {
                f();
            } finally {
                finally_++;
            }
        }
    } catch(e8) {
        try {
            f();
        } finally {
            finally_++;
            try {
                f();
            } finally {
                finally_++;
            }
        }
    }
} catch(e13) {
    print(finally_ == 4 ? "PASS" : "FAIL");
}
