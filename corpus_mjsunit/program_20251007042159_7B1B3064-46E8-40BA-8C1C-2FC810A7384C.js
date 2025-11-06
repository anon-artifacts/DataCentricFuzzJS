console.log("This test checks String.prototype.toLocaleUpperCase().");
String.prototype.toLocaleUpperCase.length;
("").toLocaleUpperCase();
const v11 = {
    toString() {
        return "a";
    },
};
String.prototype.toLocaleUpperCase.call(v11);
try {
    const v19 = {
        toString() {
            throw Error("1");
        },
    };
    const v21 = String.prototype.toLocaleUpperCase;
    try { v21.call(v19); } catch (e) {}
} catch(e23) {
}
try {
    const v26 = String.prototype.toLocaleUpperCase;
    try { v26.call(null); } catch (e) {}
} catch(e28) {
}
try {
    const v31 = String.prototype.toLocaleUpperCase;
    try { v31.call(undefined); } catch (e) {}
} catch(e33) {
}
("a").toLocaleUpperCase(9);
("i").toLocaleUpperCase({ length: 4, 1: "az", 3: "en" });
try { ("a").toLocaleUpperCase("x-some-thing"); } catch (e) {}
try {
    const v51 = {
        get() {
            throw Error("a");
        },
    };
    const v54 = Object.create(null, { length: v51 });
    try { ("a").toLocaleUpperCase(v54); } catch (e) {}
} catch(e57) {
}
try {
    const v60 = { value: 1 };
    const v65 = {
        get() {
            throw Error("b");
        },
    };
    const v68 = Object.create(null, { length: v60, 0: v65 });
    try { ("a").toLocaleUpperCase(v68); } catch (e) {}
} catch(e71) {
}
try {
    const v76 = {
        toString() {
            throw Error("c");
        },
    };
    const v77 = [v76];
    try { ("a").toLocaleUpperCase(v77); } catch (e) {}
} catch(e80) {
}
try {
    const v82 = [5];
    try { ("a").toLocaleUpperCase(v82); } catch (e) {}
} catch(e85) {
}
try {
    try { ("a").toLocaleUpperCase(""); } catch (e) {}
} catch(e89) {
}
try {
    try { ("a").toLocaleUpperCase("a"); } catch (e) {}
} catch(e93) {
}
try {
    try { ("a").toLocaleUpperCase("abcdefghij"); } catch (e) {}
} catch(e97) {
}
try {
    try { ("a").toLocaleUpperCase("#$"); } catch (e) {}
} catch(e101) {
}
try {
    try { ("a").toLocaleUpperCase("en-@-abc"); } catch (e) {}
} catch(e105) {
}
try {
    try { ("a").toLocaleUpperCase("en-u"); } catch (e) {}
} catch(e109) {
}
try {
    try { ("a").toLocaleUpperCase("en-u-kn-true-u-ko-true"); } catch (e) {}
} catch(e113) {
}
try {
    try { ("a").toLocaleUpperCase("en-x"); } catch (e) {}
} catch(e117) {
}
try {
    try { ("a").toLocaleUpperCase("en-*"); } catch (e) {}
} catch(e121) {
}
try {
    try { ("a").toLocaleUpperCase("en-"); } catch (e) {}
} catch(e125) {
}
try {
    try { ("a").toLocaleUpperCase("en--US"); } catch (e) {}
} catch(e129) {
}
("AbCdEfGhIjKlMnOpQRStuvWXyZ0123456789").toLocaleUpperCase();
("àéîöœøūñ").toLocaleUpperCase();
("i").toLocaleUpperCase("und");
("İ").toLocaleUpperCase("az");
("I").toLocaleUpperCase("az");
("i").toLocaleUpperCase("az");
("ı").toLocaleUpperCase("az");
("İ").toLocaleUpperCase("lt");
("J̇").toLocaleUpperCase("lt");
var softDotted = ["\u0069","\u006A","\u012F","\u0249","\u0268","\u029D","\u02B2","\u03F3","\u0456","\u0458","\u1D62","\u1D96","\u1DA4","\u1DA8","\u1E2D","\u1ECB","\u2071","\u2148","\u2149","\u2C7C","\uD835\uDC22","\uD835\uDC23","\uD835\uDC56","\uD835\uDC57","\uD835\uDC8A","\uD835\uDC8B","\uD835\uDCBE","\uD835\uDCBF","\uD835\uDCF2","\uD835\uDCF3","\uD835\uDD26","\uD835\uDD27","\uD835\uDD5A","\uD835\uDD5B","\uD835\uDD8E","\uD835\uDD8F","\uD835\uDDC2","\uD835\uDDC3","\uD835\uDDF6","\uD835\uDDF7","\uD835\uDE2A","\uD835\uDE2B","\uD835\uDE5E","\uD835\uDE5F","\uD835\uDE92","\uD835\uDE93"];
("İ").toLocaleUpperCase("tr");
("I").toLocaleUpperCase("tr");
("i").toLocaleUpperCase("tr");
("ı").toLocaleUpperCase("tr");
