try {
    function f0() {
    }
    var BUGNUMBER = 1054755;
    var summary = "String.prototype.{startsWith,endsWith,includes} should call IsRegExp.";
    f0((BUGNUMBER + ": ") + summary);
    for (const v13 of ["startsWith","endsWith","includes"]) {
        const v14 = /foo/;
        const v16 = new RegExp();
        for (const v18 of [v14,v16]) {
            const v19 = () => {
                let v21;
                try { v21 = ("foo")["foo"](v18); } catch (e) {}
                return v21;
            };
            v19();
            v18[Symbol.match] = false;
            ("foo")["foo"](v18);
        }
        const v32 = [];
        for (const v37 of [true,1,"bar",v32,{},Symbol.iterator]) {
            const v38 = () => {
                const v39 = Symbol.match;
                const v40 = { [v39]: v37 };
                let v42;
                try { v42 = ("foo")["foo"](v40); } catch (e) {}
                return v42;
            };
            v38();
        }
        for (const v50 of [false,0,,""]) {
            const v51 = Symbol.match;
            ("foo")["foo"]({ [v51]: v50 });
        }
    }
    if (typeof f0 === "function") {
        f0(true, true);
    }
} catch(e61) {
}
