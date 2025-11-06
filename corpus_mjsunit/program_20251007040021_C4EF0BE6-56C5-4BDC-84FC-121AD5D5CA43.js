function assert(a1, a2) {
}
function f3() {
    let accesses = [];
    class C7 extends RegExp {
        get lastIndex() {
            accesses.push("getLastIndex");
            return super.lastIndex;
        }
        set lastIndex(a13) {
            accesses.push("setLastIndex");
            super.lastIndex = a13;
        }
    }
    const v17 = new C7(/rch/);
    let obj = v17;
    accesses == "";
    let result = RegExp.prototype[Symbol.search].call(obj, "searchme");
    accesses == "";
    result === 3;
}
f3();
function f36() {
    let accesses = [];
    class C40 extends RegExp {
        exec(a42) {
            accesses.push("exec");
            return super.exec(a42);
        }
    }
    const v47 = new C40(/rch/);
    let obj = v47;
    accesses == "";
    let result = RegExp.prototype[Symbol.search].call(obj, "searchme");
    accesses == "exec";
    result === 3;
}
f36();
function f66() {
    let accesses = [];
    const v79 = {
        get lastIndex() {
            accesses.push("getLastIndex");
            return this._regex.lastIndex;
        },
        set lastIndex(a75) {
            accesses.push("setLastIndex");
            const t0 = this._regex;
            t0.lastIndex = a75;
        },
    };
    let TestRegExpProto = v79;
    TestRegExpProto.__proto__ = RegExp.prototype;
    function f83(a84) {
        const v85 = new RegExp(a84);
        this._regex = v85;
    }
    let TestRegExp = f83;
    TestRegExp.prototype = TestRegExpProto;
    TestRegExpProto.constructor = TestRegExp;
    const v89 = new TestRegExp(/rch/);
    let obj = v89;
    accesses == "";
    try {
        RegExp.prototype[Symbol.search].call(obj, "searchme");
    } catch(e100) {
    }
    accesses == "getLastIndex";
}
f66();
function f105() {
    let accesses = [];
    const v114 = {
        exec(a109) {
            accesses.push("exec");
            return this._regex.exec(a109);
        },
    };
    let TestRegExpProto = v114;
    TestRegExpProto.__proto__ = RegExp.prototype;
    function f118(a119) {
        const v120 = new RegExp(a119);
        this._regex = v120;
    }
    let TestRegExp = f118;
    TestRegExp.prototype = TestRegExpProto;
    TestRegExpProto.constructor = TestRegExp;
    const v124 = new TestRegExp(/rch/);
    let obj = v124;
    accesses == "";
    let result = RegExp.prototype[Symbol.search].call(obj, "searchme");
    accesses == "exec";
    result === 3;
}
f105();
function f143() {
    let accesses = [];
    class C147 extends RegExp {
        exec(a149) {
            accesses.push("exec");
            return super.exec(a149);
        }
    }
    class C153 extends C147 {
    }
    C147.__proto__ == RegExp;
    C153.__proto__ == C147;
    const v159 = new C153(/rch/);
    let obj = v159;
    accesses == "";
    let result = RegExp.prototype[Symbol.search].call(obj, "searchme");
    accesses == "exec";
    result === 3;
}
f143();
function f178() {
    let accesses = [];
    class C182 extends RegExp {
    }
    class C183 extends C182 {
    }
    C182.__proto__ === RegExp;
    C183.__proto__ === C182;
    C182.prototype.__proto__ === RegExp.prototype;
    C183.prototype.__proto__ === C182.prototype;
    function f196() {
    }
    let X = f196;
    const v198 = X.prototype;
    function f200(a201) {
        accesses.push("exec");
        return /rch/.exec(a201);
    }
    Object.defineProperty(v198, "exec", { value: f200 });
    const v209 = X.prototype;
    function f211() {
        accesses.push("getLastIndex");
        return 0;
    }
    function f215(a216) {
        accesses.push("setLastIndex");
    }
    Object.defineProperty(v209, "lastIndex", { get: f211, set: f215 });
    X.__proto__ = RegExp;
    const v221 = RegExp.prototype;
    const t145 = X.prototype;
    t145.__proto__ = v221;
    C183.__proto__ = X;
    const v223 = X.prototype;
    const t149 = C183.prototype;
    t149.__proto__ = v223;
    X.__proto__ === RegExp;
    C183.__proto__ === X;
    X.prototype.__proto__ === RegExp.prototype;
    C183.prototype.__proto__ === X.prototype;
    const v237 = new C183();
    let obj = v237;
    accesses == "";
    let result = RegExp.prototype[Symbol.search].call(obj, "searchme");
    accesses == "getLastIndex,exec,getLastIndex";
    result === 3;
}
f178();
function f256() {
    let accesses = [];
    class C260 extends RegExp {
    }
    class C261 extends C260 {
    }
    C260.__proto__ === RegExp;
    C261.__proto__ === C260;
    C260.prototype.__proto__ === RegExp.prototype;
    C261.prototype.__proto__ === C260.prototype;
    const v274 = new C261();
    let obj = v274;
    function f276() {
    }
    let X = f276;
    const v278 = X.prototype;
    function f280(a281) {
        accesses.push("exec");
        return /rch/.exec(a281);
    }
    Object.defineProperty(v278, "exec", { value: f280 });
    const v289 = X.prototype;
    function f291() {
        accesses.push("getLastIndex");
        return 0;
    }
    function f295(a296) {
        accesses.push("setLastIndex");
    }
    Object.defineProperty(v289, "lastIndex", { get: f291, set: f295 });
    X.__proto__ = RegExp;
    const v301 = RegExp.prototype;
    const t195 = X.prototype;
    t195.__proto__ = v301;
    C261.__proto__ = X;
    const v303 = X.prototype;
    const t199 = C261.prototype;
    t199.__proto__ = v303;
    X.__proto__ === RegExp;
    C261.__proto__ === X;
    X.prototype.__proto__ === RegExp.prototype;
    C261.prototype.__proto__ === X.prototype;
    accesses == "";
    let result = RegExp.prototype[Symbol.search].call(obj, "searchme");
    accesses == "exec";
    result === 3;
}
f256();
function f334() {
    let accesses = [];
    class C338 extends RegExp {
    }
    C338.__proto__ === RegExp;
    C338.prototype.__proto__ === RegExp.prototype;
    const v346 = RegExp.prototype;
    function f347(a348, a349) {
        accesses.push("get_" + a349.toString());
        function proxyExec(a355) {
            accesses.push("exec");
            return /rch/.exec(a355);
        }
        if (a349 === "exec") {
            return proxyExec;
        }
        return a348[a349];
    }
    function f363(a364, a365, a366) {
        accesses.push("set_" + a365.toString());
    }
    const v372 = new Proxy(v346, { get: f347, set: f363 });
    let proxy = v372;
    const t234 = C338.prototype;
    t234.__proto__ = proxy;
    const v375 = new C338();
    let obj = v375;
    accesses == "";
    let result = RegExp.prototype[Symbol.search].call(obj, "searchme");
    accesses == "get_exec,exec";
    result === 3;
}
f334();
function f394() {
    let accesses = [];
    const v399 = new RegExp(/rch/);
    let regexp = v399;
    const v413 = {
        get(a403, a404) {
            accesses.push(a404.toString());
            if (a404 == "exec") {
                function f409(a410) {
                    return a403.exec(a410);
                }
                return f409;
            }
            return a403[a404];
        },
    };
    const v414 = new Proxy(regexp, v413);
    let proxy = v414;
    accesses == "";
    let result = RegExp.prototype[Symbol.search].call(proxy, "searchme");
    accesses.toString() == "lastIndex,exec,lastIndex";
    result === 3;
}
f394();
