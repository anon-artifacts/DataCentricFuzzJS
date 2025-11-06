var str1 = String.fromCharCode(136, 115, 29, 20, 15, 155, 81);
let v12;
try { v12 = str1.padEnd(2147483644, "123"); } catch (e) {}
str3 = v12;
var exception;
try {
    JSON.stringify(str3);
} catch(e19) {
    exception = e19;
}
