const constructors = [Intl.Collator,Intl.NumberFormat,Intl.DateTimeFormat];
function t1() {
    function test(a8, a9) {
        try {
            new a8(a9);
        } catch(e11) {
        }
    }
    function testWithVariants(a13) {
        for (const v14 of constructors) {
            for (let i16 = 0; i16 < a13.length; ++i16) {
                for (let i23 = 0; i23 < a13.length; ++i23) {
                    for (let i30 = 0; i30 < a13.length; ++i30) {
                        test(v14, `und-${a13[i16]}-${a13[i23]}-${a13[i30]}`);
                        test(v14, `en-${a13[i16]}-${a13[i23]}-${a13[i30]}`);
                        test(v14, `de-DE-${a13[i16]}-${a13[i23]}-${a13[i30]}`);
                        test(v14, `zh-Hans-CN-${a13[i16]}-${a13[i23]}-${a13[i30]}`);
                    }
                    test(v14, `und-${a13[i16]}-${a13[i23]}`);
                    test(v14, `en-${a13[i16]}-${a13[i23]}`);
                    test(v14, `de-DE-${a13[i16]}-${a13[i23]}`);
                    test(v14, `zh-Hans-CN-${a13[i16]}-${a13[i23]}`);
                }
            }
        }
    }
}
t1();
function t2() {
    function test(a75, a76, a77, a78) {
        const options = {};
        let calledSecondGetter = false;
        const v91 = {
            get() {
                const v88 = {
                    get() {
                        calledSecondGetter = true;
                        return undefined;
                    },
                };
                Object.defineProperty(options, a76, v88);
                return a77;
            },
            configurable: true,
        };
        Object.defineProperty(options, a76, v91);
        a75(options);
        console.log(a78, calledSecondGetter);
    }
    const v97 = (a98) => {
        const t50 = Intl.Collator;
        const v103 = new t50("en-US", a98);
        return v103.compare("A", "a");
    };
    test(v97);
    const v106 = (a107) => {
        const t56 = Intl.Collator;
        const v112 = new t56("en-US", a107);
        return v112.compare("A", "B");
    };
    test(v106);
    const v115 = (a116) => {
        const t62 = Intl.Collator;
        const v121 = new t62("en-US", a116);
        return v121.compare("a", "â");
    };
    test(v115);
    const v124 = (a125) => {
        const t68 = Intl.NumberFormat;
        const v129 = new t68("en-US", a125);
        return v129.format(1000);
    };
    test(v124);
    const v132 = (a133) => {
        const v135 = Intl.NumberFormat;
        const v141 = new v135("en-US", Object.assign(a133, { currency: "USD" }));
        return v141.format(1.5);
    };
    test(v132);
    const v144 = (a145) => {
        const t80 = Intl.DateTimeFormat;
        const v148 = new t80("en-US", a145);
        return v148.format();
    };
    test(v144);
    const v151 = (a152) => {
        const t86 = Intl.DateTimeFormat;
        const v155 = new t86("en-US", a152);
        return v155.format();
    };
    test(v151);
}
t2();
function t3() {
    function testFallbackSymbol(a161, a162) {
        const v163 = new a161();
        const objNew = v163;
        const objCall = a161.call(objNew);
        const symbols = Object.getOwnPropertySymbols(objCall);
        console.log(objCall instanceof a161, `The given object should be an instance of ${a161.name}`);
        console.log(0, Object.getOwnPropertyNames(objCall).length);
        if (a162) {
            console.log(1, symbols.length);
            const fallbackSymbol = symbols[0];
            console.log("Symbol(Intl.FallbackSymbol)", fallbackSymbol.toString());
            console.log("object", typeof objCall[fallbackSymbol]);
            console.log(objCall[fallbackSymbol] instanceof a161, `objCall[fallbackSymbol] should be an instance of ${a161.name}`);
            try {
                a161.call(objNew);
            } catch(e197) {
            }
            try {
                a161.call(objCall);
            } catch(e199) {
            }
            console.log(objNew, objCall);
        } else {
            console.log(0, symbols.length);
        }
    }
    testFallbackSymbol(Intl.Collator, false);
    testFallbackSymbol(Intl.NumberFormat, true);
    testFallbackSymbol(Intl.DateTimeFormat, true);
    try {
        const t124 = Intl.PluralRules;
        const v214 = new t124();
        Intl.PluralRules.call(v214);
    } catch(e217) {
    }
}
t3();
