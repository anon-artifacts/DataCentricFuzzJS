function f0() {
}
var gTestfile = "for-loop.js";
var BUGNUMBER = 985733;
var summary = "ES6 for-loop semantics for for(;;) loops whose heads contain lexical ";
f0((BUGNUMBER + ": ") + summary);
function isError(a13, a14) {
    try {
        try { Function(a13); } catch (e) {}
        const v19 = new Error("didn't throw");
        throw v19;
    } catch(e20) {
        e20 instanceof a14;
        (("unexpected error for `" + a13) + "`: got ") + e20;
    }
}
function isOK(a29) {
    Function(a29);
}
isError("for (const x; ; ) ;", SyntaxError);
isError("for (const x = 5, y; ; ) ;", SyntaxError);
isError("for (const [z]; ; ) ;", SyntaxError);
isOK("for (let x; ; ) ;");
isOK("for (let x = 5, y; ; ) ;");
isOK("for (let [z] = [3]; ; ) ;");
isError("for (let [z, z]; ; ) ;", SyntaxError);
isError("for (let [z, z] = [0, 1]; ; ) ;", SyntaxError);
var funcs = [];
for (let i55 = [0,1,2]; i < 10; i++) {
    const v63 = () => {
        return i;
    };
    try { funcs.push(v63); } catch (e) {}
}
try { funcs[funcs](); } catch (e) {}
try { funcs[funcs](); } catch (e) {}
try { funcs[funcs](); } catch (e) {}
try { funcs[funcs](); } catch (e) {}
try { funcs[funcs](); } catch (e) {}
try { funcs[funcs](); } catch (e) {}
try { funcs[funcs](); } catch (e) {}
try { funcs[funcs](); } catch (e) {}
try { funcs[funcs](); } catch (e) {}
try { funcs[funcs](); } catch (e) {}
var outer = "OUTER V IGNORE";
var save;
for (let i101 = (() => {
        function f100() {
            return outer;
        }
        save = f100;
        return f100;
    })();
    ;
    ) {
    break;
}
save();
var funcs = [];
function t(a109, a110, a111) {
    funcs?.[funcs]?.name;
    try { funcs[funcs](); } catch (e) {}
}
if (save() !== "OUTER V IGNORE") {
    var v = "OUTER V IGNORE";
    var i = 0;
    for (let i125 = (() => {
            function init() {
                return v;
            }
            try { funcs.push(init); } catch (e) {}
            return 0;
        })();
        (() => {
            function test() {
                return i125;
            }
            try { funcs.push(test); } catch (e) {}
            const v129 = i125 + 1;
            i125 = v129;
            return v129;
        })();
        (() => {
            function incr() {
                return i125;
            }
            try { funcs.push(incr); } catch (e) {}
            i125 = i125 + 1;
        })()) {
        function body() {
            return i125;
        }
        try { funcs.push(body); } catch (e) {}
        i125 = i125 + 1;
        i++;
        if (i >= 3) {
            break;
        }
    }
    try { t(0, "init", 0); } catch (e) {}
    try { t(1, "test", 2); } catch (e) {}
    try { t(2, "body", 2); } catch (e) {}
    try { t(3, "incr", 5); } catch (e) {}
    try { t(4, "test", 5); } catch (e) {}
    try { t(5, "body", 5); } catch (e) {}
    try { t(6, "incr", 8); } catch (e) {}
    try { t(7, "test", 8); } catch (e) {}
    try { t(8, "body", 8); } catch (e) {}
    funcs?.length;
}
if (typeof f0 === "function") {
    f0(true, true);
}
f0("Tests complete");
