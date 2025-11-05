function shouldBe(a1, a2) {
}
function shouldThrow(a4, a5) {
    var errorThrown = false;
    var error = null;
    try {
        a4();
    } catch(e11) {
        errorThrown = true;
        error = e11;
    }
}
function f13() {
    var target = {};
    function f16(a17, a18) {
        return a18 === "i";
    }
    function f21(a22, a23, a24) {
        if (a23 === "i") {
            const v29 = new Error("NG");
            throw v29;
        }
        return 42;
    }
    var handler = { has: f16, get: f21 };
    const v34 = new Proxy(target, handler);
    var proxy = v34;
    with (proxy) {
    }
}
shouldThrow(f13, `Error: NG`);
function f39() {
    var flag = false;
    var target = {};
    function f44(a45, a46) {
        return a46 === "i";
    }
    function f49(a50, a51, a52) {
        if ((a51 === "i") && flag) {
            const v58 = new Error("NG");
            throw v58;
        }
        return 42;
    }
    var handler = { has: f44, get: f49 };
    const v63 = new Proxy(target, handler);
    var proxy = v63;
    for (let i66 = 0; i66 < 10000; ++i66) {
        with (proxy) {
        }
        if (i66 === 1000) {
            flag = true;
        }
    }
}
shouldThrow(f39, `Error: NG`);
var thrown = null;
try {
    const v79 = () => {
        var flag = false;
        var target = { __proto__: null };
        function f85(a86, a87) {
            return a87 === "arguments";
        }
        function f90(a91, a92, a93) {
            if ((a92 === "arguments") && flag) {
                const v99 = new Error("NG");
                throw v99;
            }
            return 42;
        }
        var handler = { has: f85, get: f90 };
        const v104 = new Proxy(target, handler);
        var proxy = v104;
        proxy.__proto__ = null;
        const v107 = { __proto__: proxy };
        const t76 = Object.prototype;
        t76.__proto__ = v107;
        const v110 = () => {
            for (let i112 = 0; i112 < 10000; ++i112) {
                if (i112 === (10000 - 2)) {
                    flag = true;
                }
            }
        };
        v110();
    };
    v79();
} catch(e126) {
    thrown = e126;
}
const t91 = Object.prototype;
t91.__proto__ = null;
shouldBe(String(thrown), `TypeError: Cannot set prototype of immutable prototype object`);
