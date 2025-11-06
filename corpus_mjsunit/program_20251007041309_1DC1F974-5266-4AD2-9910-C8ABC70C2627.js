function foo(a1) {
    try {
        try {
            if (!a1) {
                return;
            }
        } catch(e3) {
            if (e3.name != "TypeError") {
                throw e3;
            }
        } finally {
        }
        undefined.x;
    } catch(e9) {
        if (e9.name != "TypeError") {
            throw e9;
        }
        if (e9.name != "TypeError") {
            throw e9;
        }
    } finally {
    }
}
foo(true);
