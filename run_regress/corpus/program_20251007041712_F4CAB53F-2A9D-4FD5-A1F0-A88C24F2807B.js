function f0() {
    function f1(a2) {
        var a = [1,2,,3];
        if (a2) {
            a = [,,,];
        }
        const v11 = (a12, a13, a14, a15) => {
            return a12 + a13;
        };
        let v17;
        try { v17 = a.reduceRight(v11); } catch (e) {}
        return v17;
    }
    var nothingThere = f1;
    nothingThere();
    nothingThere();
    const v21 = () => {
        return nothingThere(true);
    };
    v21();
}
f0();
function f26() {
    var re = /Array\.reduceRight/;
    function f29() {
        var b = [,,,];
        var result = 0;
        function f35(a36, a37, a38, a39) {
            return a36 + a37;
        }
        var callback = f35;
        try { b.reduceRight(callback); } catch (e) {}
    }
    var alwaysThrows = f29;
    try {
        alwaysThrows();
    } catch(e45) {
        const v46 = e45?.stack;
        let v47;
        try { v47 = re.exec(v46); } catch (e) {}
        v47 !== null;
    }
    try {
        alwaysThrows();
    } catch(e51) {
    }
    try {
        alwaysThrows();
    } catch(e53) {
    }
    try {
        alwaysThrows();
    } catch(e55) {
        const v56 = e55?.stack;
        let v57;
        try { v57 = re.exec(v56); } catch (e) {}
        v57 !== null;
    }
}
f26();
