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
        return a.findIndex(v32);
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
        return a.findIndex(v69);
    }
    eagerDeoptInCalled();
    [1,2,3,4,5,6,7,8,9];
    eagerDeoptInCalled();
    eagerDeoptInCalled();
    -1;
    eagerDeoptInCalled(true);
    [1,2,3,4,5,6,7,8,,,];
    eagerDeoptInCalled();
};
v51();
const v114 = () => {
    const a = [1,2,3,4,5];
    function lazyChanger(a123) {
        const v124 = (a125, a126) => {
            if ((a126 === 3) && a123) {
                a[3] = 3;
            }
            return a125 > 3;
        };
        return a.findIndex(v124);
    }
    lazyChanger();
    lazyChanger();
    lazyChanger(true);
    lazyChanger();
};
v114();
const v143 = () => {
    const a = [1,2,3,4,5];
    function lazyChanger(a152) {
        const v153 = (a154, a155) => {
            if ((a155 === 3) && a152) {
            }
            return false;
        };
        return a.findIndex(v153);
    }
    -1;
    lazyChanger();
    lazyChanger();
    -1;
    lazyChanger(true);
    -1;
    lazyChanger();
};
v143();
const v173 = () => {
    const a = [1,2,3,4,5];
    function lazyChanger(a182) {
        const v183 = (a184, a185) => {
            if ((a185 === 2) && a182) {
                a[3] = 2;
            }
            return a184 > 3;
        };
        return a.findIndex(v183);
    }
    lazyChanger();
    lazyChanger();
    lazyChanger(true);
    lazyChanger();
};
v173();
const v202 = () => {
    let result = 0;
    function eagerDeoptInCalled(a206) {
        const a_noescape = [0,1,2,3,4,5];
        const v215 = (a216, a217) => {
            result += a216 | 0;
            if ((a217 === 13) && a206) {
                a_noescape.length = 25;
            }
            return false;
        };
        a_noescape.findIndex(v215);
    }
    eagerDeoptInCalled();
    eagerDeoptInCalled();
    eagerDeoptInCalled();
    eagerDeoptInCalled(true);
    eagerDeoptInCalled();
};
v202();
const v234 = () => {
    const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    let result = 0;
    function lazyDeopt(a265) {
        const v266 = (a267, a268) => {
            result += a268;
            if ((a268 === 13) && a265) {
            }
            return false;
        };
        a.findIndex(v266);
    }
    lazyDeopt();
    lazyDeopt();
    lazyDeopt();
    lazyDeopt(true);
    lazyDeopt();
};
v234();
const v282 = () => {
    const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    let result = 0;
    function lazyDeopt(a313) {
        function callback(a315, a316) {
            result += a316;
            if ((a316 === 13) && a313) {
            }
            return false;
        }
        a.findIndex(callback);
    }
    lazyDeopt();
    lazyDeopt();
    lazyDeopt();
    lazyDeopt(true);
    lazyDeopt();
};
v282();
const v330 = () => {
    const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    let caught = false;
    function lazyDeopt(a361) {
        try {
            const v362 = (a363, a364) => {
                if ((a364 === 1) && a361) {
                    throw "a";
                }
                return false;
            };
            try { a.findIndex(v362); } catch (e) {}
        } catch(e371) {
            caught = true;
        }
    }
    lazyDeopt();
    lazyDeopt();
    lazyDeopt();
    const v376 = () => {
        return lazyDeopt(true);
    };
    v376();
    lazyDeopt();
};
v330();
const v382 = () => {
    let a = [1,2,3,4,5,6,7,8,9,10];
    let caught = false;
    function lazyDeopt(a398) {
        function callback(a400, a401) {
            if ((a401 === 1) && a398) {
                throw "a";
            }
            return false;
        }
        try {
            try { a.findIndex(callback); } catch (e) {}
        } catch(e408) {
            caught = true;
        }
    }
    lazyDeopt();
    lazyDeopt();
    lazyDeopt();
    const v413 = () => {
        return lazyDeopt(true);
    };
    v413();
    lazyDeopt();
};
v382();
function TestThrowIntoDeoptimizedOuter() {
    const a = [1,2,3,4];
    function lazyDeopt(a427) {
        function callback(a429, a430) {
            if ((a430 === 1) && a427) {
                throw "some exception";
            }
            return a429 === 3;
        }
        let result = 0;
        try {
            let v439;
            try { v439 = a.findIndex(callback); } catch (e) {}
            result = v439;
        } catch(e440) {
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
const v462 = () => {
    const re = /Array\.findIndex/;
    function lazyDeopt(a466) {
        const b = [1,2,3];
        let result = 0;
        const v474 = (a475, a476) => {
            result += a475;
            if (a476 === 1) {
                const v480 = new Error();
                const e = v480;
                re.exec(e.stack) !== null;
            }
            return false;
        };
        b.findIndex(v474);
    }
    lazyDeopt();
    lazyDeopt();
    lazyDeopt();
};
v462();
const v492 = () => {
    const re = /Array\.findIndex/;
    function lazyDeopt(a496) {
        const b = [1,2,3];
        let did_assert_error = false;
        let result = 0;
        function callback(a507, a508) {
            result += a507;
            if (a508 === 1) {
                const v512 = new Error();
                const e = v512;
                re.exec(e.stack) !== null;
                did_assert_error = true;
            }
            return false;
        }
        b.findIndex(callback);
        return did_assert_error;
    }
    lazyDeopt();
    lazyDeopt();
    lazyDeopt();
};
v492();
const v525 = () => {
    const re = /Array\.findIndex/;
    function lazyDeopt(a529) {
        const b = [1,2,3];
        let did_assert_error = false;
        let result = 0;
        const v539 = (a540, a541) => {
            result += a540;
            if (a541 === 1) {
            } else {
                if (a541 === 2) {
                    const v547 = new Error();
                    const e = v547;
                    re.exec(e.stack) !== null;
                    did_assert_error = true;
                }
            }
            return false;
        };
        b.findIndex(v539);
        return did_assert_error;
    }
    lazyDeopt();
    lazyDeopt();
    lazyDeopt();
};
v525();
const v560 = () => {
    const re = /Array\.findIndex/;
    const a = [1,2,3];
    let result = 0;
    function lazyDeopt() {
        const v571 = (a572, a573) => {
            result += a573;
            if (a573 === 1) {
                const v577 = new Error();
                throw v577;
            }
            return false;
        };
        try { a.findIndex(v571); } catch (e) {}
    }
    const v580 = () => {
        return lazyDeopt();
    };
    v580();
    const v583 = () => {
        return lazyDeopt();
    };
    v583();
    try {
        lazyDeopt();
    } catch(e587) {
        const v588 = e587?.stack;
        let v589;
        try { v589 = re.exec(v588); } catch (e) {}
        v589 !== null;
    }
    try {
        lazyDeopt();
    } catch(e593) {
        const v594 = e593?.stack;
        let v595;
        try { v595 = re.exec(v594); } catch (e) {}
        v595 !== null;
    }
};
v560();
const v599 = () => {
    const a = [1,2,3];
    let result = 0;
    function prototypeChanged() {
        const v608 = (a609, a610) => {
            result += a609;
            return false;
        };
        a.findIndex(v608);
    }
    prototypeChanged();
    prototypeChanged();
    prototypeChanged();
    a.constructor = {};
    prototypeChanged();
    prototypeChanged();
};
v599();
const v621 = () => {
    const a = [1,2,,3,4];
    function withHoles() {
        const callback_values = [];
        const v632 = (a633) => {
            callback_values.push(a633);
            return false;
        };
        a.findIndex(v632);
        return callback_values;
    }
    withHoles();
    withHoles();
    [1,2,,3,4];
    withHoles();
};
v621();
const v647 = () => {
    const a = [1.5,2.5,,3.5,4.5];
    function withHoles() {
        const callback_values = [];
        const v658 = (a659) => {
            callback_values.push(a659);
            return false;
        };
        a.findIndex(v658);
        return callback_values;
    }
    withHoles();
    withHoles();
    [1.5,2.5,,3.5,4.5];
    withHoles();
};
v647();
const v673 = () => {
    function side_effect(a675, a676) {
        if (a676) {
            a675.foo = 3;
        }
        return a675;
    }
    function unreliable(a679, a680) {
        const v681 = (a682) => {
            return false;
        };
        return a679.findIndex(v681, side_effect(a679, a680));
    }
    let a = [1,2,3];
    unreliable(a, false);
    unreliable(a, false);
    unreliable(a, false);
    unreliable(a, true);
};
v673();
const v700 = () => {
    const a = [1,2,3,4,5];
    function notCallable() {
        let v710;
        try { v710 = a.findIndex(undefined); } catch (e) {}
        return v710;
    }
    notCallable();
    try {
        notCallable();
    } catch(e714) {
    }
    notCallable();
};
v700();
