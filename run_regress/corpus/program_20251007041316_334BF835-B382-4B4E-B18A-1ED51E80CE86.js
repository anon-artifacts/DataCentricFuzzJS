actual = "";
expected = "true,";
function f4(a5, a6) {
    var o = a5?.[a6];
    if (!(o && o?.length)) {
        return false;
    }
    return true;
}
var isNotEmpty = f4;
function f15(a16) {
    for (let i18 = 0; i18 < arguments?.length; i18++) {
        let v26;
        try { v26 = isNotEmpty(arguments, i18); } catch (e) {}
        if (!v26) {
            return false;
        }
    }
    return true;
}
var f = f15;
const v32 = [1];
const v34 = [1];
const v36 = [1];
const v39 = [1];
let v40;
try { v40 = f(v32, v34, v36, "asdf", v39); } catch (e) {}
try { appendToActual(v40); } catch (e) {}
