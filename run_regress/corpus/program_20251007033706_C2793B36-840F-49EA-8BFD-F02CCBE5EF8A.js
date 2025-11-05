function oos() {
    oos();
}
try {
    try {
        oos();
    } finally {
        try {
            oos();
        } catch(e4) {
        } finally {
        }
    }
} catch(e5) {
    if (e5) {
        print("pass");
    }
}
