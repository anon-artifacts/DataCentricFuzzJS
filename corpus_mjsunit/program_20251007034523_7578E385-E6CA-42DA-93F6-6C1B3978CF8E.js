actual = "";
expected = "666,";
function h() {
    var ans = 0;
    for (let i8 = 0; i8 < arguments?.length; ++i8) {
        ans += arguments?.[i8];
    }
    return ans;
}
let v20;
try { v20 = h(600, 60, 6); } catch (e) {}
var q = v20;
try { appendToActual(q); } catch (e) {}
