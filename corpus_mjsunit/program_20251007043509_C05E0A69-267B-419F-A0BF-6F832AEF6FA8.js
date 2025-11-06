function f0() {
    with ({}) {
        try {
            arguments["z"] = w;
        } catch(e5) {
        }
    }
}
f0();
print("passed");
