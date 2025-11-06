try {
    Object.defineProperty({}, "x", null);
} catch(e5) {
    if (e5 instanceof TypeError) {
        if (e5.message !== "Invalid descriptor for property 'x'") {
            print("FAIL");
        } else {
            print("PASS");
        }
    } else {
        print("FAIL");
    }
}
