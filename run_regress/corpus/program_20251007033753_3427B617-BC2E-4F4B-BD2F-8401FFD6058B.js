console.log("Tests for scoping of variables in ES6 class syntax");
var local = "FAIL";
function test() {
    var local = "PASS";
    class C8 {
        getLocal(a10) {
            return local;
        }
    }
    const v11 = new C8();
    return v11.getLocal();
}
test();
var successfullyParsed = true;
