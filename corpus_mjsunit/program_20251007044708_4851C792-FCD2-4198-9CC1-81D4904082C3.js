var s = "s";
try {
    for (let i3 = 0; i3 < 31; ++i3) {
        s = s + s;
    }
    print("Should not have gotten here.");
    print("String length: " + s.length);
} catch(e17) {
}
