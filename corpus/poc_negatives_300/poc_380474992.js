class C6 {}
const v14 = new C6();
class C19 {
}
new C19();
for (let i25 = 0, i26 = 56;
    i25 < i26;
    (() => {
        const v30 = new C6();
    })()) {
}
class C46 {
    constructor() {
        for (let i58 = (() => {
                function f51() {
                    const o54 = {
                    };
                }
            })();
            i58 < 0;
            i58++) {
         }
    }
}

//FOR CRASHES, PLEASE INCLUDE THE FOLLOWING ADDITIONAL INFORMATION
//Type of crash: SEGV but only with MSAN
//Crash State:
//$ ./d8 --disable-in-process-stack-traces ~/fuzzilli_corpus/expo/compact5389_mod.js 