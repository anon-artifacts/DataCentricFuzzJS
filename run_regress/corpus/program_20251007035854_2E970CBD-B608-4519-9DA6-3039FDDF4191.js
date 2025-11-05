function Obj1(a1) {
    this.x = a1;
}
function f1() {
    var arr = [];
    var o = {};
    for (let i9 = 0; i9 < 2500; i9++) {
        const v15 = new Obj1(o);
        arr.push(v15);
        if (i9 < 15) {
            const t10 = arr[i9];
            t10.x = undefined;
            const t12 = arr[i9];
            t12.x = Math;
        }
    }
    for (let i24 = 0; i24 < 2500; i24++) {
        var y = i24 > 2000 ? undefined : o;
        const t18 = arr[i24];
        t18.x = y;
    }
}
f1();
function f2() {
    var arr = [];
    var p = {};
    for (let i43 = 0; i43 < 2500; i43++) {
        var x = i43 < 2000 ? p : undefined;
        var o = { x: x };
        if (i43 < 5) {
            o.x = undefined;
            o.x = p;
        }
        arr.push(o);
    }
    for (let i61 = 0; i61 < 2500; i61++) {
        arr[i61].x;
        i61 < 2000 ? p : undefined;
    }
}
f2();
function f3() {
    var arr = [];
    var p = {};
    for (let i80 = 0; i80 < 2500; i80++) {
        var x = i80 < 2000 ? p : true;
        var o = { x: x };
        if (i80 < 5) {
            o.x = true;
            o.x = p;
        }
        arr.push(o);
    }
    for (let i98 = 0; i98 < 2500; i98++) {
        arr[i98].x;
        i98 < 2000 ? p : true;
    }
}
f3();
