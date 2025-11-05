try { console.log("This test checks String.prototype.toLocaleLowerCase()."); } catch (e) {}
String?.prototype?.toLocaleLowerCase?.length;
try { ("").toLocaleLowerCase(); } catch (e) {}
const v11 = {
    toString() {
        return "A";
    },
};
const v13 = String?.prototype?.toLocaleLowerCase;
try { v13.call(v11); } catch (e) {}
try {
    const v19 = {
        toString() {
            let v18;
            try { v18 = Error("1"); } catch (e) {}
            throw v18;
        },
    };
    const v21 = String?.prototype?.toLocaleLowerCase;
    try { v21.call(v19); } catch (e) {}
} catch(e23) {
}
try {
    const v26 = String?.prototype?.toLocaleLowerCase;
    try { v26.call(null); } catch (e) {}
} catch(e28) {
}
try {
    const v31 = String?.prototype?.toLocaleLowerCase;
    try { v31.call(undefined); } catch (e) {}
} catch(e33) {
}
try { ("A").toLocaleLowerCase(9); } catch (e) {}
const v40 = { length: 4, 1: "az", 3: "en" };
try { ("İ").toLocaleLowerCase(v40); } catch (e) {}
try { ("A").toLocaleLowerCase("x-some-thing"); } catch (e) {}
try {
    const v51 = {
        get() {
            let v50;
            try { v50 = Error("a"); } catch (e) {}
            throw v50;
        },
    };
    const v52 = { length: v51 };
    let v54;
    try { v54 = Object.create(null, v52); } catch (e) {}
    try { ("A").toLocaleLowerCase(v54); } catch (e) {}
} catch(e57) {
}
try {
    const v60 = { value: 1 };
    const v65 = {
        get() {
            let v64;
            try { v64 = Error("b"); } catch (e) {}
            throw v64;
        },
    };
    const v66 = { length: v60, 0: v65 };
    let v68;
    try { v68 = Object.create(null, v66); } catch (e) {}
    try { ("A").toLocaleLowerCase(v68); } catch (e) {}
} catch(e71) {
}
try {
    const v76 = {
        toString() {
            let v75;
            try { v75 = Error("c"); } catch (e) {}
            throw v75;
        },
    };
    const v77 = [v76];
    try { ("A").toLocaleLowerCase(v77); } catch (e) {}
} catch(e80) {
}
try {
    const v82 = [5];
    try { ("A").toLocaleLowerCase(v82); } catch (e) {}
} catch(e85) {
}
try {
    try { ("A").toLocaleLowerCase(""); } catch (e) {}
} catch(e89) {
}
try {
    try { ("A").toLocaleLowerCase("a"); } catch (e) {}
} catch(e93) {
}
try {
    try { ("A").toLocaleLowerCase("abcdefghij"); } catch (e) {}
} catch(e97) {
}
try {
    try { ("A").toLocaleLowerCase("#$"); } catch (e) {}
} catch(e101) {
}
try {
    try { ("A").toLocaleLowerCase("en-@-abc"); } catch (e) {}
} catch(e105) {
}
try {
    try { ("A").toLocaleLowerCase("en-u"); } catch (e) {}
} catch(e109) {
}
try {
    try { ("A").toLocaleLowerCase("en-u-kn-true-u-ko-true"); } catch (e) {}
} catch(e113) {
}
try {
    try { ("A").toLocaleLowerCase("en-x"); } catch (e) {}
} catch(e117) {
}
try {
    try { ("A").toLocaleLowerCase("en-*"); } catch (e) {}
} catch(e121) {
}
try {
    try { ("A").toLocaleLowerCase("en-"); } catch (e) {}
} catch(e125) {
}
try {
    try { ("A").toLocaleLowerCase("en--US"); } catch (e) {}
} catch(e129) {
}
try { ("AbCdEfGhIjKlMnOpQRStuvWXyZ0123456789").toLocaleLowerCase(); } catch (e) {}
try { ("ÀÉÎÖŒØŪÑ").toLocaleLowerCase(); } catch (e) {}
try { ("İ").toLocaleLowerCase("und"); } catch (e) {}
try { ("İ").toLocaleLowerCase("az"); } catch (e) {}
try { ("İ").toLocaleLowerCase("az"); } catch (e) {}
try { ("Ị̇").toLocaleLowerCase("az"); } catch (e) {}
try { ("İ𐇽").toLocaleLowerCase("az"); } catch (e) {}
try { ("IȦ").toLocaleLowerCase("az"); } catch (e) {}
try { ("Ì̇").toLocaleLowerCase("az"); } catch (e) {}
try { ("I𝆅̇").toLocaleLowerCase("az"); } catch (e) {}
try { ("I").toLocaleLowerCase("az"); } catch (e) {}
try { ("i").toLocaleLowerCase("az"); } catch (e) {}
try { ("ı").toLocaleLowerCase("az"); } catch (e) {}
try { ("Ì").toLocaleLowerCase("lt"); } catch (e) {}
try { ("J̀").toLocaleLowerCase("lt"); } catch (e) {}
try { ("Į̀").toLocaleLowerCase("lt"); } catch (e) {}
try { ("I𝆅").toLocaleLowerCase("lt"); } catch (e) {}
try { ("J𝆅").toLocaleLowerCase("lt"); } catch (e) {}
try { ("Į𝆅").toLocaleLowerCase("lt"); } catch (e) {}
try { ("Ì̥").toLocaleLowerCase("lt"); } catch (e) {}
try { ("J̥̀").toLocaleLowerCase("lt"); } catch (e) {}
try { ("Į̥̀").toLocaleLowerCase("lt"); } catch (e) {}
try { ("Ì𐇽").toLocaleLowerCase("lt"); } catch (e) {}
try { ("J𐇽̀").toLocaleLowerCase("lt"); } catch (e) {}
try { ("Į𐇽̀").toLocaleLowerCase("lt"); } catch (e) {}
try { ("I̥𝆅").toLocaleLowerCase("lt"); } catch (e) {}
try { ("J̥𝆅").toLocaleLowerCase("lt"); } catch (e) {}
try { ("Į̥𝆅").toLocaleLowerCase("lt"); } catch (e) {}
try { ("I𐇽𝆅").toLocaleLowerCase("lt"); } catch (e) {}
try { ("J𐇽𝆅").toLocaleLowerCase("lt"); } catch (e) {}
try { ("Į𐇽𝆅").toLocaleLowerCase("lt"); } catch (e) {}
try { ("IÀ").toLocaleLowerCase("lt"); } catch (e) {}
try { ("JÀ").toLocaleLowerCase("lt"); } catch (e) {}
try { ("ĮÀ").toLocaleLowerCase("lt"); } catch (e) {}
try { ("IA𝆅").toLocaleLowerCase("lt"); } catch (e) {}
try { ("JA𝆅").toLocaleLowerCase("lt"); } catch (e) {}
try { ("ĮA𝆅").toLocaleLowerCase("lt"); } catch (e) {}
try { ("Ì").toLocaleLowerCase("lt"); } catch (e) {}
try { ("Í").toLocaleLowerCase("lt"); } catch (e) {}
try { ("Ĩ").toLocaleLowerCase("lt"); } catch (e) {}
try { ("İ").toLocaleLowerCase("tr"); } catch (e) {}
try { ("İ").toLocaleLowerCase("tr"); } catch (e) {}
try { ("Ị̇").toLocaleLowerCase("tr"); } catch (e) {}
try { ("İ𐇽").toLocaleLowerCase("tr"); } catch (e) {}
try { ("IȦ").toLocaleLowerCase("tr"); } catch (e) {}
try { ("Ì̇").toLocaleLowerCase("tr"); } catch (e) {}
try { ("I𝆅̇").toLocaleLowerCase("tr"); } catch (e) {}
try { ("I").toLocaleLowerCase("tr"); } catch (e) {}
try { ("i").toLocaleLowerCase("tr"); } catch (e) {}
try { ("ı").toLocaleLowerCase("tr"); } catch (e) {}
