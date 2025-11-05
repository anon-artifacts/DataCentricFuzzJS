var y = 7;
function f3() {
    with ({}) {
        return y;
    }
}
switch (f3()) {
    case 7:
        let y;
        break;
    default:
        throw "FAIL";
}
