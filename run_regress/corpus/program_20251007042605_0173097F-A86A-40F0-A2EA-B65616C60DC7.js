var a = 0;
function func() {
    return 3;
}
for (let i5 = 0; i5 < 10; i5++) {
    a += func();
}
print(a);
