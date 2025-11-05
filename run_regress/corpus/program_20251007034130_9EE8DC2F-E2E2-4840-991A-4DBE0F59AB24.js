function g() {
}
function f1() {
}
let a = { g: f1 };
function check(a5) {
    Function(a5);
}
function checkDestructuring(a10) {
    const v11 = () => {
        let v13;
        try { v13 = Function(a10); } catch (e) {}
        return v13;
    };
    v11();
}
check("g(...[]) = 1");
check("a.g(...[]) = 1");
check("eval(...['1']) = 1");
check("g(...[]) ++");
check("a.g(...[]) ++");
check("eval(...['1']) ++");
checkDestructuring("[g(...[])] = []");
checkDestructuring("[a.g(...[])] = []");
checkDestructuring("[eval(...['1'])] = []");
checkDestructuring("({y: g(...[])} = 1)");
checkDestructuring("({y: a.g(...[])} = 1)");
checkDestructuring("({y: eval(...['1'])} = 1)");
