var failures = 0;
function a() {
    const v6 = new Array(-1);
    return v6;
}
for (let i8 = 0; i8 < 61; ++i8) {
    try {
        a();
        ++failures;
    } catch(e16) {
    }
}
