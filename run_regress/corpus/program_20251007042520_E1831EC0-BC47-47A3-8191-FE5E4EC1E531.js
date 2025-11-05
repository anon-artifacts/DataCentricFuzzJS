function Constructor(a1) {
    this.x = a1;
}
Constructor.prototype = {};
let v4;
try { v4 = Constructor.bind(); } catch (e) {}
BoundConstructor = v4;
let v7;
try { v7 = new Constructor(1); } catch (e) {}
foo = v7;
let v11;
try { v11 = new BoundConstructor(1); } catch (e) {}
bar = v11;
i = 0;
function test() {
    if (!(foo instanceof BoundConstructor)) {
        let v21;
        try { v21 = new Error("foo should be an instanceof BoundConstructor"); } catch (e) {}
        throw v21;
    }
    let j = 0;
    for (; j < 1000; j++) {
    }
    return j;
}
try { noInline(test); } catch (e) {}
for (i = 0; i < 50000; i++) {
    try { test(); } catch (e) {}
}
