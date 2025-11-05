a = ("")?.__proto__;
let v4;
try { v4 = uneval(); } catch (e) {}
b = v4?.__proto__;
for (let i8 = 0; i8 < 2; i8++) {
    function f15() {
    }
    try { a.__defineSetter__("valueOf", f15); } catch (e) {}
    a + "";
    delete b?.valueOf;
}
