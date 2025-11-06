var e = 8;
function x() {
    throw 7;
}
function y() {
    var i;
    for ((() => {
            i = 0;
        })();
        i < 10;
        i++) {
        try {
            if ((i % 2) == 0) {
                try {
                    x();
                } catch(e16) {
                    print("Inner catch: " + e16);
                    if (i % 3) {
                        throw e16;
                    }
                    if (i % 5) {
                        return e16;
                    }
                } finally {
                    print("Finally: " + i);
                    continue;
                }
            }
        } catch(e29) {
            print("Outer catch: " + e29);
        } finally {
            print("Outer finally: " + i);
            if ((++i % 9) == 0) {
                return e;
            }
        }
    }
}
print(y());
