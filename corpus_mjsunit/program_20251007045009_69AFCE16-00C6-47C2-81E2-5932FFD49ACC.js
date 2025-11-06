function dateL() {
    const v2 = new Date();
    var date = v2;
    return (date + true) == (date.toString() + true);
}
function dateR() {
    const v12 = new Date();
    var date = v12;
    return (true + date) == (true + date.toString());
}
function strL() {
    const v23 = new String(1);
    return (v23 + true) == "1true";
}
function strR() {
    const v32 = new String(1);
    return (true + v32) == "true1";
}
dateL();
dateR();
strL();
strR();
