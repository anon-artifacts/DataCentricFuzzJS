function f0(a1, a2, a3, a4) {
    var ch = "a";
    var ptr = "<aaaaaaa>";
    var s = "";
    while (true) {
        s += "";
        for (let i14 = 0; i14 < a1; ++i14) {
            s += ch;
        }
        for (let i20 = 0; i20 < a2; ++i20) {
            s += ptr;
        }
        if (a3 === 0) {
            break;
        }
        var s2 = s + ch;
        a4.push(s);
        s = s2;
        --a3;
        a1 >>= 2;
        a2 >>= 2;
    }
    a4.push(s);
}
function f34() {
    var strings = [];
    for (let i38 = 0; i38 <= 128; i38 = i38 === 0 ? 1 : i38 << 2) {
        for (let i50 = 0; i50 <= 1024; i50 = i50 === 0 ? 1 : i50 << 2) {
            for (let i62 = 0; i62 <= 8; i62 = i62 === 0 ? 1 : i62 << 2) {
                this.create(i50, i38, i62, strings);
                if (i50 !== 0) {
                    this.create(i50 + 1, i38, i62, strings);
                }
                if (i38 !== 0) {
                    this.create(i50 + 1, i38, i62, strings);
                }
            }
        }
    }
    var ch = "a";
    var ptr = "<aaaaaaa>";
    var replaceCh = "_";
    var replaceRegex = /_/;
    strings.push(((ch + replaceCh) + ch).replace(replaceRegex, ch));
    strings.push(((ptr + replaceCh) + ptr).replace(replaceRegex, ch));
    strings.push(((ch + replaceCh) + ch).replace(replaceRegex, ptr));
    strings.push(((ptr + replaceCh) + ptr).replace(replaceRegex, ptr));
    var bigString = "b";
    for (let i114 = 0; i114 < 16; ++i114) {
        bigString += bigString;
    }
    bigString += replaceCh;
    if (bigString.length !== 65537) {
        const v125 = new Error("Big string length is invalid");
        throw v125;
    }
    strings.push(bigString.replace(replaceRegex, ch));
    var nestedCompoundString = "c";
    nestedCompoundString += "c";
    nestedCompoundString += "c";
    for (let i133 = 0; i133 < 100000; ++i133) {
        var s = "c";
        s += "c";
        s += "c";
        s += nestedCompoundString;
        nestedCompoundString = s;
    }
    strings.push(nestedCompoundString);
    var nestedConcatString = "d";
    for (let i147 = 0; i147 < 100000; ++i147) {
        nestedConcatString = "d" + nestedConcatString;
    }
    strings.push(nestedConcatString);
    var nestedConcatCompoundString = "";
    for (let i159 = 0; i159 < 100000; ++i159) {
        var s = "e";
        s += "e";
        s += "e";
        s += nestedConcatCompoundString;
        nestedConcatCompoundString = "e" + s;
    }
    strings.push(nestedConcatCompoundString);
    return strings;
}
var CompoundString = { create: f0, createTestStrings: f34 };
