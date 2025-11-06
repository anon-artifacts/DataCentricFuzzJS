function foo(a1, a2) {
    const c = a1 + 1;
    const d = a2 + 1;
    a1 = (d + (c << 0)) | 0;
    a1 += (d + (c << 1)) | 0;
    a1 += (d + (c << 2)) | 0;
    a1 += (d + (c << 3)) | 0;
    a1 += (d + (c << 4)) | 0;
    return a1;
}
print(foo(2, 3));
print(foo(2, 3));
print(foo(-12346578, 3));
print(foo(2, 12346578));
