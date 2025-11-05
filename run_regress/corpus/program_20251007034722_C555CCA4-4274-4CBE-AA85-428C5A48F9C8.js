let global = this;
let p = {};
let q = {};
function f6() {
}
let g1 = f6;
g1(...[]);
const v12 = (a13) => {
};
let g2 = v12;
g2(...[]);
function f18() {
}
let g3 = f18;
g3.apply(p, ...[]);
g3.call(p, ...[]);
g2.apply(p, ...[]);
g2.call(p, ...[]);
function f29() {
    function f32() {
    }
    let g1 = f32;
    g1(...[]);
    const v38 = (a39) => {
    };
    let g2 = v38;
    g2(...[]);
    function f44() {
    }
    let g3 = f44;
    g3.apply(q, ...[]);
    g3.call(q, ...[]);
    const v51 = (a52) => {
    };
    let g4 = v51;
    g4.apply(q, ...[]);
    g4.call(q, ...[]);
}
const v59 = (a60) => {
    function f62() {
    }
    let g1 = f62;
    g1(...[]);
    const v68 = (a69) => {
    };
    let g2 = v68;
    g2(...[]);
    function f74() {
    }
    let g3 = f74;
    g3.apply(q, ...[]);
    g3.call(q, ...[]);
    const v81 = (a82) => {
    };
    let g4 = v81;
    g4.apply(q, ...[]);
    g4.call(q, ...[]);
};
function f89() {
    function f91() {
    }
    let g1 = f91;
    g1(...[]);
    const v97 = (a98) => {
    };
    let g2 = v97;
    g2(...[]);
    function f103() {
    }
    let g3 = f103;
    g3.apply(q, ...[]);
    g3.call(q, ...[]);
    const v110 = (a111) => {
    };
    let g4 = v110;
    g4.apply(q, ...[]);
    g4.call(q, ...[]);
}
let o = { f1: f29, f2: v59, f3: f89 };
o.f1(...[]);
o.f2(...[]);
const v124 = [];
o.f3.apply(p, ...v124);
const v127 = [];
o.f2.apply(p, ...v127);
