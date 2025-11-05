var gTestfile = "arrow-function-in-for-statement-head.js";
var BUGNUMBER = 1302994;
var summary = "Don't assert when an arrow function occurs at the end of a declaration " + "init-component of a for(;;) loop head";
print((BUGNUMBER + ": ") + summary);
function f1() {
    for (let i17 = (() => {
            const v14 = (a15) => {
                return b;
            };
            return v14;
        })();
        false;
        ) {
    }
}
f1();
function f2() {
    for (let [i30, i31] = (() => {
            const v24 = (a25) => {
                return b;
            };
            const v27 = (a28) => {
                return d;
            };
            return [v24, v27];
        })();
        false;
        ) {
    }
}
f2();
function f3() {
    for (let i42 = (() => {
            const v40 = (a41) => {
            };
            return v40;
        })();
        false;
        ) {
    }
}
f3();
function f4() {
    for (let [i53, i54] = (() => {
            const v49 = (a50) => {
            };
            const v51 = (a52) => {
            };
            return [v49, v51];
        })();
        false;
        ) {
    }
}
f4();
function g1() {
    for ((() => {
            const v63 = (a64) => {
                return b;
            };
        })();
        false;
        ) {
    }
}
g1();
function g2() {
    for ((() => {
            const v70 = (a71) => {
            };
        })();
        false;
        ) {
    }
}
g2();
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
