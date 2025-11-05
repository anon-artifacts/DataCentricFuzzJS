class C2 extends WeakSet {
    #f = "n";
}
new C2();
function f4() {
    let v5 = 0;
    for (let i7 = 0; i7 < 1; ++i7) {
        v5++;
    }
    return v5;
}
var result = 0;
for (let i17 = 0; i17 < 200000; ++i17) {
    result += f4();
}
