function f() {
    return (42 + Math.abs(1e+60)) | 0;
}
f();
f();
