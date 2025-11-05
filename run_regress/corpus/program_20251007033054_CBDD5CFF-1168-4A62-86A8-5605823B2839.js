function fooMaker(a1) {
    var a = a1;
    function f3(a4) {
        var b = a4;
        function f6(a7) {
            var c = a7;
            function f9(a10) {
                var d = a10;
                function f12(a13) {
                    var e = a13;
                    function f15(a16) {
                        var f = ((((a + b) + c) + d) + e) + a16;
                        for (let i24 = 0; i24 < 1000; ++i24) {
                            f += a;
                        }
                        return f;
                    }
                    return f15;
                }
                return f12;
            }
            return f9;
        }
        return f6;
    }
    return f3;
}
let v35;
try { v35 = fooMaker(42); } catch (e) {}
let v36;
try { v36 = v35(1); } catch (e) {}
let v37;
try { v37 = v36(2); } catch (e) {}
let v38;
try { v38 = v37(3); } catch (e) {}
let v39;
try { v39 = v38(4); } catch (e) {}
var foo = v39;
try { noInline(foo); } catch (e) {}
for (let i44 = 0; i44 < 20000; ++i44) {
    let v51;
    try { v51 = foo(5); } catch (e) {}
    var result = v51;
    if (result != 42057) {
        throw "Error: bad result: " + result;
    }
}
let v63;
try { v63 = fooMaker(23); } catch (e) {}
let v64;
try { v64 = v63(2); } catch (e) {}
let v65;
try { v65 = v64(3); } catch (e) {}
let v66;
try { v66 = v65(4); } catch (e) {}
let v67;
try { v67 = v66(5); } catch (e) {}
let v68;
try { v68 = v67(5); } catch (e) {}
var result = v68;
if (result != 23042) {
    throw "Error: bad result: " + result;
}
