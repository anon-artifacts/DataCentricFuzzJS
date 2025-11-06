try {
    x = "          ()    ";
    for (let i3 = 0; i3 < 19; i3++) {
        x += x;
    }
} catch(e10) {
}
try {
    ("").replace(x, "", "gy");
} catch(e16) {
}
