function f0() {
}
var BUGNUMBER = 381303;
var summary = "object toSource when a property has both a getter and a setter";
var actual = "";
var expect = "";
try { test(); } catch (e) {}
function test() {
    f0(BUGNUMBER);
    f0(summary);
    const v18 = {
        set inn(a15) {
            this.for = a15;
        },
        get inn() {
            return this?.for;
        },
    };
    var obj = v18;
    expect = ((("({" + "get inn() {return this.for;}") + ", ") + "set inn(value) {this.for = value;}") + "})";
    let v29;
    try { v29 = obj.toSource(); } catch (e) {}
    actual = v29;
    try { compareSource(expect, actual, summary); } catch (e) {}
}
