function f0() {
    function __f_2530() {
    }
    const v5 = {
        mSloppy() {
            super.ownReadonlyAccessor = 25;
            this.ownReadonlyAccessor;
        },
    };
    __f_2530.prototype = v5;
    const v6 = new __f_2530();
    var __v_11980 = v6;
    function f9() {
        console.log("hello");
    }
    function f13() {
        console.log("goodbye");
    }
    Object.defineProperty(__v_11980, "ownReadonlyAccessor", { get: f9, set: f13 });
    __v_11980.mSloppy();
}
f0();
