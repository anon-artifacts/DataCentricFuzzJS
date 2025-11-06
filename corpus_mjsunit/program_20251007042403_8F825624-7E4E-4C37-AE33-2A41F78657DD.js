function F() {
    var T = {};
    try {
        throw 12;
    } catch(e4) {
        T.x = 5;
        return T;
    }
}
const v6 = new F();
v6.x;
