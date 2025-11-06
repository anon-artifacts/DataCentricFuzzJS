var v = [1,2,3,4];
Object.preventExtensions(v);
function foo() {
    var re = /2147483647/;
    for (let i12 = 0; i12 < 10000; i12++) {
        var ok = false;
        try {
            var j = 1;
            for (let i23 = 0; i23 < (i12 % 93); i23++) {
                i23 *= 1.123567;
            }
            v[2147483647] = 0;
            return j;
        } catch(e33) {
            ok = true;
            re.test(e33);
            "e: " + e33;
        }
    }
}
foo();
