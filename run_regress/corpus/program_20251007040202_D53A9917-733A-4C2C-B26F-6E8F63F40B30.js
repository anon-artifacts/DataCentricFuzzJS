const v1 = {};
const v10 = {
    get(a3, a4) {
        if (a4 === Symbol.iterator) {
            throw "fit";
        }
        return undefined;
    },
};
const v11 = new Proxy(v1, v10);
var p = v11;
function f13() {
    for (const v14 of p) {
    }
}
try { f13(); } catch (e) {}
