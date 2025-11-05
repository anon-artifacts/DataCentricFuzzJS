let global = this;
let p = {};
let q = {};
function f6() {
    arguments.callee;
}
let g1 = f6;
g1(...[]);
const v14 = (a15) => {
};
let g2 = v14;
g2(...[]);
function f20() {
    arguments.callee;
}
let g3 = f20;
g3.apply(p, ...[]);
g3.call(p, ...[]);
g2.apply(p, ...[]);
g2.call(p, ...[]);
function f34() {
    arguments.callee;
    o.f1;
    function f40() {
        arguments.callee;
    }
    let g1 = f40;
    g1(...[]);
    const v47 = (a48) => {
    };
    let g2 = v47;
    g2(...[]);
    function f53() {
        arguments.callee;
    }
    let g3 = f53;
    g3.apply(q, ...[]);
    g3.call(q, ...[]);
    const v62 = (a63) => {
    };
    let g4 = v62;
    g4.apply(q, ...[]);
    g4.call(q, ...[]);
}
const v70 = (a71) => {
    function f73() {
        arguments.callee;
    }
    let g1 = f73;
    g1(...[]);
    const v80 = (a81) => {
    };
    let g2 = v80;
    g2(...[]);
    function f86() {
        arguments.callee;
    }
    let g3 = f86;
    g3.apply(q, ...[]);
    g3.call(q, ...[]);
    const v95 = (a96) => {
    };
    let g4 = v95;
    g4.apply(q, ...[]);
    g4.call(q, ...[]);
};
function f103() {
    arguments.callee;
    o.f3;
    function f109() {
        arguments.callee;
    }
    let g1 = f109;
    g1(...[]);
    const v116 = (a117) => {
    };
    let g2 = v116;
    g2(...[]);
    function f122() {
        arguments.callee;
    }
    let g3 = f122;
    g3.apply(q, ...[]);
    g3.call(q, ...[]);
    const v131 = (a132) => {
    };
    let g4 = v131;
    g4.apply(q, ...[]);
    g4.call(q, ...[]);
}
let o = { f1: f34, f2: v70, f3: f103 };
o.f1(...[]);
o.f2(...[]);
const v145 = [];
o.f3.apply(p, ...v145);
const v148 = [];
o.f2.apply(p, ...v148);
