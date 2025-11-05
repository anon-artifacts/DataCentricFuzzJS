function f0() {
}
var BUGNUMBER = 475645;
var summary = "Do not crash @ nanojit::LIns::isop";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    const v15 = new Array();
    linkarr = v15;
    const v17 = new Array();
    picarr = v17;
    const v19 = new Array();
    textarr = v19;
    var f = 161;
    var t = 27;
    var pics = "";
    var links = "";
    var texts = "";
    var s = f + t;
    var d = "1";
    picarr[2] = "2";
    for (i = 1; i < picarr.length; i++) {
        if (pics == "") {
            pics = picarr[i];
        } else {
            if ((picarr[i].indexOf("jpg") == -1) && (picarr[i].indexOf("JPG") == -1)) {
                picarr[i] = d;
            }
        }
    }
    f0(expect, actual, summary);
}
