const v0 = `\n(class extends Promise {\n    static resolve(o) {\n        return o;\n    }\n});\n`;
const v2 = { newCompartment: true };
let v4;
try { v4 = newGlobal(v2); } catch (e) {}
let v5;
try { v5 = v4.eval(v0); } catch (e) {}
var P = v5;
const v10 = {
    then(a8) {
        try { a8(); } catch (e) {}
    },
};
const v11 = [v10];
const v13 = Promise?.all;
try { v13.call(P, v11); } catch (e) {}
