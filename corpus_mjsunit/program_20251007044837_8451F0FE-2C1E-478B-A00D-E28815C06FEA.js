const v0 = () => {
    const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    let result = 0;
    function eagerDeoptInCalled(a31) {
        const v32 = (a33, a34) => {
            if ((a34 === 13) && a31) {
                a.abc = 25;
            }
            result += a33;
            return a33 === 20;
        };
        return a.find(v32);
    }
    eagerDeoptInCalled();
    eagerDeoptInCalled();
    eagerDeoptInCalled();
    eagerDeoptInCalled(true);
    eagerDeoptInCalled();
};
v0();
const v51 = () => {
    let called_values;
    function eagerDeoptInCalled(a55) {
        const a = [1,2,3,4,5,6,7,8,9,10];
        called_values = [];
        const v69 = (a70, a71) => {
            called_values.push(a70);
            a.length = (a71 === 5) && a55 ? 8 : 10;
            return a70 === 9;
        };
        return a.find(v69);
    }
    eagerDeoptInCalled();
    [1,2,3,4,5,6,7,8,9];
    eagerDeoptInCalled();
    eagerDeoptInCalled();
    eagerDeoptInCalled(true);
    [1,2,3,4,5,6,7,8,,,];
    eagerDeoptInCalled();
};
v51();
const v113 = () => {
    const a = [1,2,3,4,5];
    function lazyChanger(a122) {
        const v123 = (a124, a125) => {
            if ((a125 === 3) && a122) {
                a[3] = 100;
            }
            return a124 > 3;
        };
        return a.find(v123);
    }
    lazyChanger();
    lazyChanger();
    lazyChanger(true);
    lazyChanger();
};
v113();
const v142 = () => {
    const a = [1,2,3,4,5];
    function lazyChanger(a151) {
        const v152 = (a153, a154) => {
            if ((a154 === 3) && a151) {
            }
            return false;
        };
        return a.find(v152);
    }
    lazyChanger();
    lazyChanger();
    lazyChanger(true);
    lazyChanger();
};
v142();
const v169 = () => {
    const a = [1,2,3,4,5];
    function lazyChanger(a178) {
        const v179 = (a180, a181) => {
            if ((a181 === 2) && a178) {
                a[3] = 100;
            }
            return a180 > 3;
        };
        return a.find(v179);
    }
    lazyChanger();
    lazyChanger();
    lazyChanger(true);
    lazyChanger();
};
v169();
const v198 = () => {
    let result = 0;
    function eagerDeoptInCalled(a202) {
        const a_noescape = [0,1,2,3,4,5];
        const v211 = (a212, a213) => {
            result += a212 | 0;
            if ((a213 === 13) && a202) {
                a_noescape.length = 25;
            }
            return false;
        };
        a_noescape.find(v211);
    }
    eagerDeoptInCalled();
    eagerDeoptInCalled();
    eagerDeoptInCalled();
    eagerDeoptInCalled(true);
    eagerDeoptInCalled();
};
v198();
const v230 = () => {
    const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    let result = 0;
    function lazyDeopt(a261) {
        const v262 = (a263, a264) => {
            result += a264;
            if ((a264 === 13) && a261) {
            }
            return false;
        };
        a.find(v262);
    }
    lazyDeopt();
    lazyDeopt();
    lazyDeopt();
    lazyDeopt(true);
    lazyDeopt();
};
v230();
const v278 = () => {
    const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    let result = 0;
    function lazyDeopt(a309) {
        function callback(a311, a312) {
            result += a312;
            if ((a312 === 13) && a309) {
            }
            return false;
        }
        a.find(callback);
    }
    lazyDeopt();
    lazyDeopt();
    lazyDeopt();
    lazyDeopt(true);
    lazyDeopt();
};
v278();
const v326 = () => {
    const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    let caught = false;
    function lazyDeopt(a357) {
        try {
            const v358 = (a359, a360) => {
                if ((a360 === 1) && a357) {
                    throw "a";
                }
                return false;
            };
            try { a.find(v358); } catch (e) {}
        } catch(e367) {
            caught = true;
        }
    }
    lazyDeopt();
    lazyDeopt();
    lazyDeopt();
    const v372 = () => {
        return lazyDeopt(true);
    };
    v372();
    lazyDeopt();
};
v326();
const v378 = () => {
    let a = [1,2,3,4,5,6,7,8,9,10];
    let caught = false;
    function lazyDeopt(a394) {
        function callback(a396, a397) {
            if ((a397 === 1) && a394) {
                throw "a";
            }
            return false;
        }
        try {
            try { a.find(callback); } catch (e) {}
        } catch(e404) {
            caught = true;
        }
    }
    lazyDeopt();
    lazyDeopt();
    lazyDeopt();
    const v409 = () => {
        return lazyDeopt(true);
    };
    v409();
    lazyDeopt();
};
v378();
function TestThrowIntoDeoptimizedOuter() {
    const a = [1,2,3,4];
    function lazyDeopt(a423) {
        function callback(a425, a426) {
            if ((a426 === 1) && a423) {
                throw "some exception";
            }
            return a425 === 3;
        }
        let result = 0;
        try {
            let v435;
            try { v435 = a.find(callback); } catch (e) {}
            result = v435;
        } catch(e436) {
            result = "nope";
        }
        return result;
    }
    lazyDeopt(false);
    lazyDeopt(false);
    lazyDeopt(true);
    lazyDeopt(true);
    lazyDeopt(false);
    lazyDeopt(true);
}
TestThrowIntoDeoptimizedOuter();
const v458 = () => {
    const re = /Array\.find/;
    function lazyDeopt(a462) {
        const b = [1,2,3];
        let result = 0;
        const v470 = (a471, a472) => {
            result += a471;
            if (a472 === 1) {
                const v476 = new Error();
                const e = v476;
                re.exec(e.stack) !== null;
            }
            return false;
        };
        b.find(v470);
    }
    lazyDeopt();
    lazyDeopt();
    lazyDeopt();
};
v458();
const v488 = () => {
    const re = /Array\.find/;
    function lazyDeopt(a492) {
        const b = [1,2,3];
        let did_assert_error = false;
        let result = 0;
        function callback(a503, a504) {
            result += a503;
            if (a504 === 1) {
                const v508 = new Error();
                const e = v508;
                re.exec(e.stack) !== null;
                did_assert_error = true;
            }
            return false;
        }
        b.find(callback);
        return did_assert_error;
    }
    lazyDeopt();
    lazyDeopt();
    lazyDeopt();
};
v488();
const v521 = () => {
    const re = /Array\.find/;
    function lazyDeopt(a525) {
        const b = [1,2,3];
        let did_assert_error = false;
        let result = 0;
        const v535 = (a536, a537) => {
            result += a536;
            if (a537 === 1) {
            } else {
                if (a537 === 2) {
                    const v543 = new Error();
                    const e = v543;
                    re.exec(e.stack) !== null;
                    did_assert_error = true;
                }
            }
            return false;
        };
        b.find(v535);
        return did_assert_error;
    }
    lazyDeopt();
    lazyDeopt();
    lazyDeopt();
};
v521();
const v556 = () => {
    const re = /Array\.find/;
    const a = [1,2,3];
    let result = 0;
    function lazyDeopt() {
        const v567 = (a568, a569) => {
            result += a569;
            if (a569 === 1) {
                const v573 = new Error();
                throw v573;
            }
            return false;
        };
        try { a.find(v567); } catch (e) {}
    }
    const v576 = () => {
        return lazyDeopt();
    };
    v576();
    const v579 = () => {
        return lazyDeopt();
    };
    v579();
    try {
        lazyDeopt();
    } catch(e583) {
        const v584 = e583?.stack;
        let v585;
        try { v585 = re.exec(v584); } catch (e) {}
        v585 !== null;
    }
    try {
        lazyDeopt();
    } catch(e589) {
        const v590 = e589?.stack;
        let v591;
        try { v591 = re.exec(v590); } catch (e) {}
        v591 !== null;
    }
};
v556();
const v595 = () => {
    const a = [1,2,3];
    let result = 0;
    function prototypeChanged() {
        const v604 = (a605, a606) => {
            result += a605;
            return false;
        };
        a.find(v604);
    }
    prototypeChanged();
    prototypeChanged();
    prototypeChanged();
    a.constructor = {};
    prototypeChanged();
    prototypeChanged();
};
v595();
const v617 = () => {
    const a = [1,2,,3,4];
    function withHoles() {
        const callback_values = [];
        const v628 = (a629) => {
            callback_values.push(a629);
            return false;
        };
        a.find(v628);
        return callback_values;
    }
    withHoles();
    withHoles();
    [1,2,,3,4];
    withHoles();
};
v617();
const v643 = () => {
    const a = [1.5,2.5,,3.5,4.5];
    function withHoles() {
        const callback_values = [];
        const v654 = (a655) => {
            callback_values.push(a655);
            return false;
        };
        a.find(v654);
        return callback_values;
    }
    withHoles();
    withHoles();
    [1.5,2.5,,3.5,4.5];
    withHoles();
};
v643();
const v669 = () => {
    function side_effect(a671, a672) {
        if (a672) {
            a671.foo = 3;
        }
        return a671;
    }
    function unreliable(a675, a676) {
        const v677 = (a678) => {
            return false;
        };
        return a675.find(v677, side_effect(a675, a676));
    }
    let a = [1,2,3];
    unreliable(a, false);
    unreliable(a, false);
    unreliable(a, false);
    unreliable(a, true);
};
v669();
const v696 = () => {
    const a = [1,2,3,4,5];
    function notCallable() {
        let v706;
        try { v706 = a.find(undefined); } catch (e) {}
        return v706;
    }
    notCallable();
    try {
        notCallable();
    } catch(e710) {
    }
    notCallable();
};
v696();
