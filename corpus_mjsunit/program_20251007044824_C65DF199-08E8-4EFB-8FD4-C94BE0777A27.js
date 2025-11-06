const v0 = () => {
    function foo(a2) {
        return Array(!(!a2));
    }
    [true];
    foo(true);
    [false];
    foo(false);
    [true];
    foo(true);
    [false];
    foo(false);
};
v0();
const v24 = () => {
    function foo(a26) {
        const v30 = new Array(!(!a26));
        return v30;
    }
    [true];
    foo(true);
    [false];
    foo(false);
    [true];
    foo(true);
    [false];
    foo(false);
};
v24();
const v48 = () => {
    function foo(a50) {
        return Array("" + a50);
    }
    ["a"];
    foo("a");
    ["b"];
    foo("b");
    ["a"];
    foo("a");
    ["b"];
    foo("b");
};
v48();
const v72 = () => {
    function foo(a74) {
        const v78 = new Array("" + a74);
        return v78;
    }
    ["a"];
    foo("a");
    ["b"];
    foo("b");
    ["a"];
    foo("a");
    ["b"];
    foo("b");
};
v72();
const v96 = () => {
    function foo() {
        return Array(2);
    }
    foo().length;
    foo().length;
    foo().length;
};
v96();
const v111 = () => {
    function foo() {
        const v115 = new Array(2);
        return v115;
    }
    foo().length;
    foo().length;
    foo().length;
};
v111();
const v126 = () => {
    function foo(a128, a129, a130) {
        return Array(a128, a129, a130);
    }
    [1,2,3];
    foo(1, 2, 3);
    [1,2,3];
    foo(1, 2, 3);
    [1,2,3];
    foo(1, 2, 3);
};
v126();
const v158 = () => {
    function foo(a160, a161, a162) {
        const v164 = new Array(a160, a161, a162);
        return v164;
    }
    [1,2,3];
    foo(1, 2, 3);
    [1,2,3];
    foo(1, 2, 3);
    [1,2,3];
    foo(1, 2, 3);
};
v158();
const v190 = () => {
    function foo(a192) {
        try {
            const v194 = new Array(a192);
            return v194;
        } catch(e195) {
            return e195;
        }
    }
    [];
    foo(0);
    [];
    foo(0);
    [];
    foo(0);
    foo(-1);
};
v190();
