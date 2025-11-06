test();
function test() {
    try {
        instances = [];
        for (let i6 = 0; i6 != 2; ++i6) {
            instances[i6] = constructor;
        }
        var i = 0;
        var instance = instances[i];
        var name = instance.name;
        for (let i22 = 1; i22 != instances; ++i22) {
            if ((i != i22) && (instance instanceof name[i22].constructor)) {
            }
        }
    } catch(e32) {
    }
}
test();
