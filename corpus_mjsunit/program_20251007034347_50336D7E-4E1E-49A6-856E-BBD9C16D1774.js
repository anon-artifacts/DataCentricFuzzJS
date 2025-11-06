const v0 = () => {
    const a = [1,2,3,4,5];
    let result = 0;
    function earlyExit() {
        const v11 = (a12) => {
            result += a12;
            return a12 < 2;
        };
        let v15;
        try { v15 = a.every(v11); } catch (e) {}
        return v15;
    }
    try { earlyExit(); } catch (e) {}
    try { earlyExit(); } catch (e) {}
    try { earlyExit(); } catch (e) {}
};
try { v0(); } catch (e) {}
const v21 = () => {
    const a = [1,2,3,4,5,6,7,8,9,10];
    let result = 0;
    function softyPlusEarlyExit(a37) {
        const v38 = (a39) => {
            result += a39;
            if ((a39 === 4) && a37) {
                a.abc = 25;
            }
            return a39 < 8;
        };
        let v46;
        try { v46 = a.every(v38); } catch (e) {}
        return v46;
    }
    try { softyPlusEarlyExit(false); } catch (e) {}
    try { softyPlusEarlyExit(false); } catch (e) {}
    try { softyPlusEarlyExit(true); } catch (e) {}
    36 * 3;
};
try { v21(); } catch (e) {}
const v57 = () => {
    const a = [1,2,3,4,5,6,7,8,9,10];
    let called_values = [];
    function softyPlusEarlyExit(a73) {
        called_values = [];
        const v75 = (a76) => {
            try { called_values.push(a76); } catch (e) {}
            if ((a76 === 4) && a73) {
                a.abc = 25;
                return false;
            }
            return a76 < 8;
        };
        let v85;
        try { v85 = a.every(v75); } catch (e) {}
        return v85;
    }
    try { softyPlusEarlyExit(false); } catch (e) {}
    [1,2,3,4,5,6,7,8];
    try { softyPlusEarlyExit(false); } catch (e) {}
    try { softyPlusEarlyExit(true); } catch (e) {}
    [1,2,3,4];
};
try { v57(); } catch (e) {}
const v107 = () => {
    const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    let result = 0;
    function eagerDeoptInCalled(a138) {
        const v139 = (a140, a141) => {
            if ((a141 === 13) && a138) {
                a.abc = 25;
            }
            result += a140;
            return true;
        };
        let v147;
        try { v147 = a.every(v139); } catch (e) {}
        return v147;
    }
    try { eagerDeoptInCalled(); } catch (e) {}
    try { eagerDeoptInCalled(); } catch (e) {}
    try { eagerDeoptInCalled(); } catch (e) {}
    try { eagerDeoptInCalled(true); } catch (e) {}
    try { eagerDeoptInCalled(); } catch (e) {}
};
try { v107(); } catch (e) {}
const v156 = () => {
    let called_values;
    function eagerDeoptInCalled(a160) {
        const a = [1,2,3,4,5,6,7,8,9,10];
        called_values = [];
        const v174 = (a175, a176) => {
            try { called_values.push(a175); } catch (e) {}
            a.length = (a176 === 5) && a160 ? 8 : 10;
            return true;
        };
        let v185;
        try { v185 = a.every(v174); } catch (e) {}
        return v185;
    }
    try { eagerDeoptInCalled(); } catch (e) {}
    [1,2,3,4,5,6,7,8,9,10];
    try { eagerDeoptInCalled(); } catch (e) {}
    try { eagerDeoptInCalled(); } catch (e) {}
    try { eagerDeoptInCalled(true); } catch (e) {}
    [1,2,3,4,5,6,7,8];
    try { eagerDeoptInCalled(); } catch (e) {}
};
try { v156(); } catch (e) {}
const v213 = () => {
    const a = [1,2,3,4,5];
    function lazyChanger(a222) {
        const v223 = (a224, a225) => {
            if ((a225 === 3) && a222) {
                a[3] = 100;
            }
            return true;
        };
        let v231;
        try { v231 = a.every(v223); } catch (e) {}
        return v231;
    }
    try { lazyChanger(); } catch (e) {}
    try { lazyChanger(); } catch (e) {}
    try { lazyChanger(true); } catch (e) {}
    try { lazyChanger(); } catch (e) {}
};
try { v213(); } catch (e) {}
const v238 = () => {
    const a = [1,2,3,4,5];
    function lazyChanger(a247) {
        const v248 = (a249, a250) => {
            if ((a250 === 3) && a247) {
            }
            return true;
        };
        let v255;
        try { v255 = a.every(v248); } catch (e) {}
        return v255;
    }
    try { lazyChanger(); } catch (e) {}
    try { lazyChanger(); } catch (e) {}
    try { lazyChanger(true); } catch (e) {}
    try { lazyChanger(); } catch (e) {}
};
try { v238(); } catch (e) {}
const v262 = () => {
    const a = [1,2,3,4,5];
    function lazyChanger(a271) {
        const v272 = (a273, a274) => {
            if ((a274 === 2) && a271) {
                a[3] = 100;
            }
            return true;
        };
        let v280;
        try { v280 = a.every(v272); } catch (e) {}
        return v280;
    }
    try { lazyChanger(); } catch (e) {}
    try { lazyChanger(); } catch (e) {}
    try { lazyChanger(true); } catch (e) {}
    try { lazyChanger(); } catch (e) {}
};
try { v262(); } catch (e) {}
const v287 = () => {
    let result = 0;
    function eagerDeoptInCalled(a291) {
        const a_noescape = [0,1,2,3,4,5];
        const v300 = (a301, a302) => {
            result += a301 | 0;
            if ((a302 === 13) && a291) {
                a_noescape.length = 25;
            }
            return true;
        };
        try { a_noescape.every(v300); } catch (e) {}
    }
    try { eagerDeoptInCalled(); } catch (e) {}
    try { eagerDeoptInCalled(); } catch (e) {}
    try { eagerDeoptInCalled(); } catch (e) {}
    try { eagerDeoptInCalled(true); } catch (e) {}
    try { eagerDeoptInCalled(); } catch (e) {}
};
try { v287(); } catch (e) {}
const v319 = () => {
    const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    let result = 0;
    function lazyDeopt(a350) {
        const v351 = (a352, a353) => {
            result += a353;
            if ((a353 === 13) && a350) {
            }
            return true;
        };
        try { a.every(v351); } catch (e) {}
    }
    try { lazyDeopt(); } catch (e) {}
    try { lazyDeopt(); } catch (e) {}
    try { lazyDeopt(); } catch (e) {}
    try { lazyDeopt(true); } catch (e) {}
    try { lazyDeopt(); } catch (e) {}
};
try { v319(); } catch (e) {}
const v367 = () => {
    const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    let result = 0;
    function lazyDeopt(a398) {
        function callback(a400, a401) {
            result += a401;
            if ((a401 === 13) && a398) {
            }
            return true;
        }
        try { a.every(callback); } catch (e) {}
    }
    try { lazyDeopt(); } catch (e) {}
    try { lazyDeopt(); } catch (e) {}
    try { lazyDeopt(); } catch (e) {}
    try { lazyDeopt(true); } catch (e) {}
    try { lazyDeopt(); } catch (e) {}
};
try { v367(); } catch (e) {}
const v415 = () => {
    const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    let caught = false;
    function lazyDeopt(a446) {
        try {
            const v447 = (a448, a449) => {
                if ((a449 === 1) && a446) {
                    throw "a";
                }
                return true;
            };
            try { a.every(v447); } catch (e) {}
        } catch(e456) {
            caught = true;
        }
    }
    try { lazyDeopt(); } catch (e) {}
    try { lazyDeopt(); } catch (e) {}
    try { lazyDeopt(); } catch (e) {}
    const v461 = () => {
        let v463;
        try { v463 = lazyDeopt(true); } catch (e) {}
        return v463;
    };
    try { v461(); } catch (e) {}
    try { lazyDeopt(); } catch (e) {}
};
try { v415(); } catch (e) {}
const v467 = () => {
    let a = [1,2,3,4,5,6,7,8,9,10];
    let caught = false;
    function lazyDeopt(a483) {
        function callback(a485, a486) {
            if ((a486 === 1) && a483) {
                throw "a";
            }
            return true;
        }
        try {
            try { a.every(callback); } catch (e) {}
        } catch(e493) {
            caught = true;
        }
    }
    try { lazyDeopt(); } catch (e) {}
    try { lazyDeopt(); } catch (e) {}
    try { lazyDeopt(); } catch (e) {}
    const v498 = () => {
        let v500;
        try { v500 = lazyDeopt(true); } catch (e) {}
        return v500;
    };
    try { v498(); } catch (e) {}
    try { lazyDeopt(); } catch (e) {}
};
try { v467(); } catch (e) {}
function TestThrowIntoDeoptimizedOuter() {
    const a = [1,2,3,4];
    function lazyDeopt(a512) {
        function callback(a514, a515) {
            if ((a515 === 1) && a512) {
                throw "some exception";
            }
            return true;
        }
        let result = 0;
        try {
            let v523;
            try { v523 = a.every(callback); } catch (e) {}
            result = v523;
        } catch(e524) {
            result = "nope";
        }
        return result;
    }
    try { lazyDeopt(false); } catch (e) {}
    try { lazyDeopt(false); } catch (e) {}
    try { lazyDeopt(true); } catch (e) {}
    try { lazyDeopt(true); } catch (e) {}
    try { lazyDeopt(false); } catch (e) {}
    try { lazyDeopt(true); } catch (e) {}
}
try { TestThrowIntoDeoptimizedOuter(); } catch (e) {}
const v546 = () => {
    const re = /Array\.every/;
    function lazyDeopt(a550) {
        const b = [1,2,3];
        let result = 0;
        const v558 = (a559, a560) => {
            result += a559;
            if (a560 === 1) {
                let v564;
                try { v564 = new Error(); } catch (e) {}
                const e = v564;
                const v566 = e?.stack;
                let v567;
                try { v567 = re.exec(v566); } catch (e) {}
                v567 !== null;
            }
            return true;
        };
        try { b.every(v558); } catch (e) {}
    }
    try { lazyDeopt(); } catch (e) {}
    try { lazyDeopt(); } catch (e) {}
    try { lazyDeopt(); } catch (e) {}
};
try { v546(); } catch (e) {}
const v576 = () => {
    const re = /Array\.every/;
    function lazyDeopt(a580) {
        const b = [1,2,3];
        let did_assert_error = false;
        let result = 0;
        function callback(a591, a592) {
            result += a591;
            if (a592 === 1) {
                let v596;
                try { v596 = new Error(); } catch (e) {}
                const e = v596;
                const v598 = e?.stack;
                let v599;
                try { v599 = re.exec(v598); } catch (e) {}
                v599 !== null;
                did_assert_error = true;
            }
            return true;
        }
        try { b.every(callback); } catch (e) {}
        return did_assert_error;
    }
    try { lazyDeopt(); } catch (e) {}
    try { lazyDeopt(); } catch (e) {}
    try { lazyDeopt(); } catch (e) {}
};
try { v576(); } catch (e) {}
const v609 = () => {
    const re = /Array\.every/;
    function lazyDeopt(a613) {
        const b = [1,2,3];
        let did_assert_error = false;
        let result = 0;
        const v623 = (a624, a625) => {
            result += a624;
            if (a625 === 1) {
            } else {
                if (a625 === 2) {
                    let v631;
                    try { v631 = new Error(); } catch (e) {}
                    const e = v631;
                    const v633 = e?.stack;
                    let v634;
                    try { v634 = re.exec(v633); } catch (e) {}
                    v634 !== null;
                    did_assert_error = true;
                }
            }
            return true;
        };
        try { b.every(v623); } catch (e) {}
        return did_assert_error;
    }
    try { lazyDeopt(); } catch (e) {}
    try { lazyDeopt(); } catch (e) {}
    try { lazyDeopt(); } catch (e) {}
};
try { v609(); } catch (e) {}
const v644 = () => {
    const re = /Array\.every/;
    const a = [1,2,3];
    let result = 0;
    function lazyDeopt() {
        const v655 = (a656, a657) => {
            result += a657;
            if (a657 === 1) {
                let v661;
                try { v661 = new Error(); } catch (e) {}
                throw v661;
            }
            return true;
        };
        try { a.every(v655); } catch (e) {}
    }
    const v664 = () => {
        let v665;
        try { v665 = lazyDeopt(); } catch (e) {}
        return v665;
    };
    try { v664(); } catch (e) {}
    const v667 = () => {
        let v668;
        try { v668 = lazyDeopt(); } catch (e) {}
        return v668;
    };
    try { v667(); } catch (e) {}
    try {
        try { lazyDeopt(); } catch (e) {}
    } catch(e671) {
        const v672 = e671?.stack;
        let v673;
        try { v673 = re.exec(v672); } catch (e) {}
        v673 !== null;
    }
    try {
        try { lazyDeopt(); } catch (e) {}
    } catch(e677) {
        const v678 = e677?.stack;
        let v679;
        try { v679 = re.exec(v678); } catch (e) {}
        v679 !== null;
    }
};
try { v644(); } catch (e) {}
const v683 = () => {
    const a = [1,2,,3,4];
    function withHoles() {
        const callback_values = [];
        const v694 = (a695) => {
            try { callback_values.push(a695); } catch (e) {}
            return true;
        };
        try { a.every(v694); } catch (e) {}
        return callback_values;
    }
    try { withHoles(); } catch (e) {}
    try { withHoles(); } catch (e) {}
    [1,2,3,4];
    try { withHoles(); } catch (e) {}
};
try { v683(); } catch (e) {}
const v708 = () => {
    const a = [1.5,2.5,,3.5,4.5];
    function withHoles() {
        const callback_values = [];
        const v719 = (a720) => {
            try { callback_values.push(a720); } catch (e) {}
            return true;
        };
        try { a.every(v719); } catch (e) {}
        return callback_values;
    }
    try { withHoles(); } catch (e) {}
    try { withHoles(); } catch (e) {}
    [1.5,2.5,3.5,4.5];
    try { withHoles(); } catch (e) {}
};
try { v708(); } catch (e) {}
const v733 = () => {
    function side_effect(a735, a736) {
        if (a736) {
            a735.foo = 3;
        }
        return a735;
    }
    function unreliable(a739, a740) {
        const v741 = (a742) => {
            return true;
        };
        let v744;
        try { v744 = side_effect(a739, a740); } catch (e) {}
        let v745;
        try { v745 = a739.every(v741, v744); } catch (e) {}
        return v745;
    }
    let a = [1,2,3];
    try { unreliable(a, false); } catch (e) {}
    try { unreliable(a, false); } catch (e) {}
    try { unreliable(a, false); } catch (e) {}
    try { unreliable(a, true); } catch (e) {}
};
try { v733(); } catch (e) {}
const v760 = () => {
    const a = [1,2,3,4,5];
    function notCallable() {
        let v770;
        try { v770 = a.every(undefined); } catch (e) {}
        return v770;
    }
    try { notCallable(); } catch (e) {}
    try {
        try { notCallable(); } catch (e) {}
    } catch(e774) {
    }
    try { notCallable(); } catch (e) {}
};
try { v760(); } catch (e) {}
const v777 = () => {
    const a = [1,2,3];
    let result = 0;
    function prototypeChanged() {
        const v786 = (a787, a788) => {
            result += a787;
            return true;
        };
        try { a.every(v786); } catch (e) {}
    }
    try { prototypeChanged(); } catch (e) {}
    try { prototypeChanged(); } catch (e) {}
    try { prototypeChanged(); } catch (e) {}
    a.constructor = {};
    try { prototypeChanged(); } catch (e) {}
    try { prototypeChanged(); } catch (e) {}
};
try { v777(); } catch (e) {}
