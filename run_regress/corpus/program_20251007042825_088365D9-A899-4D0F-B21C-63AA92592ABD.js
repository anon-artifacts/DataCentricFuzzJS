function f0() {
    return f0;
}
class C2 {
    static {
        [-1.0,0.015489650207357153,0.0];
        [0.0,654572.3446594856,-2.2250738585072014e-308,5.0,-2.0,2.0,1000000000000.0,1.898758264941156e+307,1e-15];
        [-2.2250738585072014e-308,-0.0,1000.0,5.0,3.0,-2.2250738585072014e-308];
    }
    static a = -31378;
    static {
        f0();
    }
}
const v9 = new C2();
new C2();
new C2();
function f12() {
    return v9;
}
try {
    function f13() {
    }
    let v14 = false;
    const v15 = { foo: v14 };
    let obj = v15;
    function f17() {
    }
    let C = f17;
    const v20 = Symbol.hasInstance;
    function f21(a22) {
        v14 = a22;
    }
    Object.defineProperty(C, v20, { value: f21 });
    obj instanceof C;
    {
        const v27 = Symbol.hasInstance;
        const v30 = {
            [v27](a29) {
            },
        };
        let obj = v30;
        let whatevs = {};
        whatevs instanceof obj;
    }
    {
        function f35() {
        }
        const v36 = new f35();
        let xxxx = v36;
        xxxx instanceof f35;
        v15.hasInstance;
        f35[f35](xxxx);
    }
    const v45 = [1,,null,"nope"];
    const nonCallables = v45;
    for (const v47 of nonCallables) {
        v47 instanceof Function;
        v47 instanceof Object;
    }
    const v51 = () => {
        function f52() {
        }
        let obj = {};
        f52 instanceof obj;
    };
    try { v51(); } catch (e) {}
    const v57 = Symbol.hasInstance;
    const v60 = {
        [v57](a59) {
        },
    };
    let o = v60;
    1 instanceof o;
    v45.call();
} catch(e65) {
}
