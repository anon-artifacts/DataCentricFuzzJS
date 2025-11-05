var a = Array(10).fill();
function foo() {
    for (let i7 = 0; i7 < a.length; ++i7) {
        if (i7 == 0) {
            i7 += 1;
        }
        a[i7];
    }
}
foo();
print("passed");
