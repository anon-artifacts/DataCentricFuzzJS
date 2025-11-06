var array = ["a","b","c","d"];
function foo(a7, a8) {
    for (let i10 = 0; i10 < a7?.length; ++i10) {
        if (a7?.[i10] == a8) {
            return true;
        }
    }
    return false;
}
try { noInline(foo); } catch (e) {}
var result = 0;
for (let i25 = 0; i25 < 100000; ++i25) {
    let v32;
    try { v32 = foo(array, "d"); } catch (e) {}
    result += v32;
}
if (result != 100000) {
    throw "Bad result: " + result;
}
