console.log("Tests what would happen if you a throwing operation at the beginning of a finally blow that gets inlined inside a complicated catch/finally stack. The correct outcome is for this test to not crash during exception throwing.");
function foo() {
    try {
    } catch(e5) {
        try {
            try {
            } catch(e7) {
                try {
                } finally {
                    return;
                }
            }
        } catch(e8) {
        }
    } finally {
    }
}
try {
    foo();
} catch(e11) {
    console.log("It worked.");
}
