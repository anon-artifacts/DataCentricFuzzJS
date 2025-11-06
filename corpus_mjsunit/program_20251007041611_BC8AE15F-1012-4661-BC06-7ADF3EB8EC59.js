try { console.log("Checks that trying to arrayify a string doesn't crash."); } catch (e) {}
function foo(a4) {
    var result = 0;
    for (let i8 = 0; i8 < a4?.length; ++i8) {
        result += a4?.[i8];
    }
    return result;
}
try { noInline(foo); } catch (e) {}
var array = [1,2,3];
for (let i23 = 0; i23 < 200; i23++) {
    try { foo(array); } catch (e) {}
}
array = [1,false,3];
for (let i35 = 0; i35 < 200; i35++) {
    try { foo(array); } catch (e) {}
}
try { foo("hello"); } catch (e) {}
