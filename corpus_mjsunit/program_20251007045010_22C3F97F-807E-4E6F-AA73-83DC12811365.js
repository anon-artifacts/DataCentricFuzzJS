function adler32(a1) {
    var MOD_ADLER = 65521;
    var a = 1;
    var b = 0;
    var index;
    for ((() => {
            index = 0;
        })();
        index < a1.byteLength;
        ++index) {
        b = (b + (a = (a + a1[index]) % MOD_ADLER)) % MOD_ADLER;
    }
    return (b << 16) | a;
}
const v24 = new Int8Array(1000);
var array = v24;
for (let i27 = 0; i27 < array.byteLength; ++i27) {
    array[i27] = i27;
}
var result = 0;
for (let i36 = 0; i36 < 300; ++i36) {
    result += adler32(array);
}
if (result != -63300) {
    throw "Bad result: " + result;
}
