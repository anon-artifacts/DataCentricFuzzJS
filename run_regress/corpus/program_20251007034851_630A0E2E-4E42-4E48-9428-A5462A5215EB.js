var scenario = "add property after it was deleted for non-extensible object";
const v5 = {
    x: 0,
    get y() {
        return 0;
    },
};
var a = v5;
delete a.x;
Object.preventExtensions(a);
try {
    a.x = 1;
    print("Return:", scenario);
} catch(e14) {
    print("Exception:", scenario);
}
