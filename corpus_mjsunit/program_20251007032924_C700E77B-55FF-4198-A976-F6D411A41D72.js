var M4x4 = {};
function M4x4_mul(a3, a4, a5) {
    a11 = a3[0];
    a21 = a3[1];
    a31 = a3[2];
    a12 = a3[4];
    a22 = a3[5];
    a32 = a3[6];
    a13 = a3[8];
    a23 = a3[9];
    a33 = a3[10];
    a14 = a3[12];
    a24 = a3[13];
    a34 = a3[14];
    a4[3];
    a4[4];
    b13 = a4[8];
    b23 = a4[9];
    b33 = a4[10];
    b43 = a4[11];
    a5[8] = (((a11 * b13) + (a12 * b23)) + (a13 * b33)) + (a14 * b43);
    a5[9] = (((a21 * b13) + (a22 * b23)) + (a23 * b33)) + (a24 * b43);
    a5[10] = (((a31 * b13) + (a32 * b23)) + (a33 * b33)) + (a34 * b43);
    return a5;
}
M4x4.mul = M4x4_mul;
function M4x4_scale3(a78, a79, a80, a81) {
    a81[0] *= a78;
    a81[3] *= a78;
    a81[4] *= a79;
    a81[11] *= a80;
}
M4x4.scale3 = M4x4_scale3;
function M4x4_makeLookAt() {
    const v85 = new Float32Array(16);
    tm1 = v85;
    const v88 = new Float32Array(16);
    tm2 = v88;
    const v91 = new Float32Array(16);
    r = v91;
    return M4x4.mul(tm1, tm2, r);
}
M4x4.makeLookAt = M4x4_makeLookAt;
var jellyfish = {};
jellyfish.order = [];
function jellyfishInstance() {
}
function f101() {
    pMatrix = M4x4.makeLookAt();
    M4x4.mul(M4x4.makeLookAt(), pMatrix, pMatrix);
    M4x4.scale3(6, 180, 0, pMatrix);
}
const t52 = jellyfishInstance.prototype;
t52.drawShadow = f101;
function drawScene() {
    const v115 = [0,0];
    jellyfish.order.push(v115);
    const v118 = new jellyfishInstance();
    jellyfish[0] = v118;
    for (let i121 = 0, i122 = 0; i121 < jellyfish.count, i122 < 30; ++i122) {
        jellyfish.order[i121][0];
        jellyfish[0].drawShadow();
    }
}
drawScene();
