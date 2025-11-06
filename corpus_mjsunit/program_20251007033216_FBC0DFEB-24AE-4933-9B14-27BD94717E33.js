function f2() {
    return arguments;
}
f2(42)[0];
function f9() {
    return arguments;
}
f9(42)[0];
function f16() {
    return 42;
}
f16(37);
function f22() {
    if (arguments) {
        return 42;
    }
}
f22();
function f29() {
    return arguments || true;
}
f29(42)[0];
function f38() {
    return arguments && [true];
}
f38(42)[0];
function f47() {
    arguments = 42;
    return 42;
}
f47();
function f55() {
    return arguments[0];
}
f55(42);
function f61() {
    arguments[0];
    return 42;
}
f61();
function f69() {
    if (arguments[0]) {
        return 42;
    }
}
f69(37);
function f77() {
    return arguments[0] || "no";
}
f77(42);
function f86() {
    return arguments[0] || 42;
}
f86(0);
function f95() {
    return arguments[0] && 37;
}
f95(42);
function f104() {
    return arguments[0] && 42;
}
f104(0);
function f113() {
    arguments[0] = 42;
    return arguments[0];
}
f113(37);
function f122(a123) {
    arguments[0] = 42;
    return a123;
}
f122(37);
function f130(a131) {
    a131 = 42;
    return arguments[0];
}
f130(37);
function f140(a141, a142) {
    arguments[1] = 54;
    return a142;
}
f140(42, 37);
function f150(a151, a152) {
    a152 = 54;
    return arguments[1];
}
f150(42, 47);
function f161(a162, a163) {
    arguments[1] = 54;
    return a162;
}
f161(42, 37);
function f171(a172, a173) {
    a173 = 54;
    return arguments[0];
}
f171(42, 47);
function f182(a183, a184) {
    const v187 = a183 + arguments[0];
    function f188(a189) {
        return (a183 + a189) + arguments[0];
    }
    return v187 + f188(a184);
}
f182(7, 6);
function f200(a201) {
    arguments[0] = 42;
    function f204(a205) {
        return a201;
    }
    return f204();
}
f200(37);
function f211(a212) {
    arguments[0] = 26;
    function f215(a216) {
        return 42;
    }
    return f215();
}
f211(37);
function f223(a224) {
    arguments[0] = 26;
    function f227(a228) {
        if (a224) {
            return 42;
        }
    }
    return f227();
}
f223(37);
function f235(a236) {
    arguments[0] = 42;
    function f239(a240) {
        return a236 || "no";
    }
    return f239();
}
f235(37);
function f248(a249) {
    arguments[0] = 0;
    function f252(a253) {
        return a249 && 42;
    }
    return f252();
}
f248(37);
function f263(a264, a265) {
    const v267 = arguments[2];
    function f268() {
        function f269() {
            return a264;
        }
        return a265 + f269();
    }
    return v267 + f268();
}
f263(7, 14, 21);
function f279(a280, a281) {
    arguments[1] = 11;
    function f284() {
        return a280 = a281;
    }
    return (a280 + f284()) + a280;
}
f279(20, 37);
function f292(a293) {
    arguments[0] = 20;
    with ({ b: 22 }) {
        return a293 + b;
    }
}
f292(37);
function f304(a305) {
    with ({ b: 22 }) {
        return arguments[0] + b;
    }
}
f304(20);
function f316(a317) {
    arguments[0] = 20;
    with ({ b: 22 }) {
        function f322() {
            return a317;
        }
        return f322() + b;
    }
}
f316(37);
function f330(a331) {
    arguments[0] = 12;
    with ({ b: 22 }) {
        function f() {
            try {
                throw 8;
            } catch(e338) {
                return e338 + a331;
            }
        }
        return f() + b;
    }
}
f330(37);
function weirdargs(a346, a347, a348) {
    if (!a346) {
        return arguments;
    }
    return [a347[2],a348];
}
var args1 = weirdargs(false, null, 40);
var res = weirdargs(true, args1, 15);
res[0];
res[1];
