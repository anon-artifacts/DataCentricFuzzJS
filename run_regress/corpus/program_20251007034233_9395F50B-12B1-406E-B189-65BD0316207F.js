var max_smi = 1073741823;
var o = { x: 0 };
function inc1(a6) {
    a6++;
    o.x = a6;
}
inc1(max_smi);
max_smi + 1;
o.x;
inc1(1.1);
o.x;
function inc2(a17) {
    let v18 = a17.x;
    v18++;
}
o.x = "42";
inc2(o);
o.x;
var s = max_smi - 10;
o.x = s;
for (let i28 = 0; i28 < 20; i28++) {
    inc2(o);
    if (i28 == 4) {
    }
}
max_smi + 10;
o.x;
function inc3(a41, a42) {
    let v43 = a41[a42];
    v43++;
}
o = ["42"];
inc3(o, 0);
o[0];
var s = max_smi - 10;
o[0] = s;
for (let i55 = 0; i55 < 20; i55++) {
    inc3(o, 0);
    if (i55 == 4) {
    }
}
max_smi + 10;
o[0];
inc3(o, "0");
max_smi + 11;
o[0];
o[0] = 0;
for (let i75 = 0; i75 < 5; i75++) {
    inc3(o, 0);
}
inc3(o, 0);
inc3(o, 1);
function inc4(a88, a89) {
    return a88++ + a89;
}
for (let i93 = 0; i93 < 5; ++i93) {
    inc4(2, 1);
}
inc4(2, 1);
inc4(2, 1.1);
function inc5(a111, a112) {
    return ++a111 + a112;
}
for (let i116 = 0; i116 < 5; ++i116) {
    inc5(2, 1);
}
inc5(2, 1);
inc5(2, 1.1);
inc5(2.1, 1);
function inc6(a139, a140) {
    let v141 = a139.x;
    return v141++ + a140;
}
o = { x: 0 };
for (let i147 = 0; i147 < 5; ++i147) {
    o.x = 42;
    inc6(o, 1);
}
o.x = 42;
inc6(o, 1);
o.x = 42;
inc6(o, 1.1);
o.x = 42.1;
inc6(o, 1);
function inc7(a170, a171) {
    let v172 = a170.x;
    return ++v172 + a171;
}
o = { x: 0 };
for (let i178 = 0; i178 < 5; ++i178) {
    o.x = 42;
    inc7(o, 1);
}
o.x = 42;
inc7(o, 1);
o.x = 42;
inc7(o, 1.1);
o.x = 42.1;
inc7(o, 1);
function inc8(a201, a202) {
    let v203 = a201[0];
    return v203++ + a202;
}
var q = [0];
for (let i210 = 0; i210 < 5; ++i210) {
    q[0] = 42;
    inc8(q, 1);
}
q[0] = 42;
inc8(q, 1);
q[0] = 42;
inc8(q, 1.1);
q[0] = 42.1;
inc8(q, 1);
function inc9(a233, a234) {
    let v235 = a233[0];
    return ++v235 + a234;
}
q = [0];
for (let i241 = 0; i241 < 5; ++i241) {
    q[0] = 42;
    inc9(q, 1);
}
q[0] = 42;
inc9(q, 1);
q[0] = 42;
inc9(q, 1.1);
q[0] = 42.1;
inc9(q, 1);
function inc10(a264) {
    let v265 = a264.x;
    return v265++;
}
var g1 = { x: 0 };
var g2 = { y: 0, x: 42 };
for (let i275 = 0; i275 < 5; ++i275) {
    g1.x = 42;
    inc10(g1);
    g1.x;
}
g1.x = 42;
inc10(g1);
g1.x;
inc10(g2);
g2.x;
function inc11(a296) {
    let v298 = this.x;
    return a296[v298++];
}
var g3 = { x: null, f: inc11 };
var g4 = [42];
g3.f(g4);
