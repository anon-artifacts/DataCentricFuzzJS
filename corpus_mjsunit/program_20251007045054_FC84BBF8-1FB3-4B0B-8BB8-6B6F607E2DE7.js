var magic = 8;
var obj = {};
for (let i5 = 1; i5 <= magic; ++i5) {
    obj[i5] = "a";
}
function func() {
    var i = 1;
    while (i in obj) {
        ++i;
    }
    return i - 1;
}
func();
func();
func();
