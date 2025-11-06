function guarded_call(a1) {
    try {
        a1();
    } catch(e3) {
        print((e3.name + " : ") + e3.message);
    }
}
function dump_array(a12) {
    print("length: " + a12.length);
    for (const v18 in a12) {
        print((("  " + v18) + ": ") + a12[v18]);
    }
}
function test_concat(a27) {
    function f28() {
        const v30 = new Array(a27);
        var arr = v30;
        arr[a27 - 1] = 100;
        print("- concat 101, 102, 103, 104, 105");
        arr = arr.concat(101, 102, 103, 104, 105);
        dump_array(arr);
        print("- arr.concat(arr)");
        arr = arr.concat(arr);
        dump_array(arr);
    }
    guarded_call(f28);
}
print("-------concat Small-------------");
test_concat(2147483642);
print("-------test prototype lookup-------------");
for (let i58 = 0; i58 < 10; i58++) {
    const v65 = 100 + i58;
    const t32 = Array.prototype;
    t32[i58] = v65;
}
const t35 = Array.prototype;
delete t35[3];
var a = [200,201,202,203,204];
delete a[1];
a[7] = 207;
print("a: " + a);
var r = a.concat(300, 301, 302, 303, 304);
print("r: " + r);
delete r[8];
print("r: " + r);
for (let i101 = 0; i101 < 10; i101++) {
    const t46 = Array.prototype;
    delete t46[i101];
}
print("r: " + r);
