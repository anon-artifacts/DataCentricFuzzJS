function assert(a1) {
}
function assertThrowSyntaxError(a3) {
    try {
        let n = BigInt(a3);
    } catch(e7) {
    }
}
function assertThrowRangeError(a9) {
    try {
        let n = BigInt(a9);
    } catch(e13) {
    }
}
function assertThrowTypeError(a15) {
    try {
        let n = BigInt(a15);
    } catch(e19) {
    }
}
let n = BigInt("");
n.toString() === "0";
n = BigInt("  ");
n.toString() === "0";
n = BigInt("0");
n.toString() === "0";
n = BigInt("+0");
n.toString() === "0";
n = BigInt("-0");
n.toString() === "0";
n = BigInt("  0");
n.toString() === "0";
n = BigInt("0  ");
n.toString() === "0";
n = BigInt("  0  ");
n.toString() === "0";
n = BigInt("00000");
n.toString() === "0";
let giantTrailingString = "0";
for (let i70 = 0; i70 < 10000; i70++) {
    giantTrailingString += " ";
}
n = BigInt(giantTrailingString);
n.toString() === "0";
n = BigInt("0b1111");
n.toString() === "15";
n = BigInt("0b10");
n.toString() === "2";
n = BigInt("0b10");
n.toString() === "2";
let binaryString = "0b1";
for (let i99 = 0; i99 < 128; i99++) {
    binaryString += "0";
}
n = BigInt(binaryString);
n.toString() === "340282366920938463463374607431768211456";
n = BigInt("0B1111");
n.toString() === "15";
n = BigInt("0B10");
n.toString() === "2";
n = BigInt("0B10");
n.toString() === "2";
binaryString = "0B1";
for (let i127 = 0; i127 < 128; i127++) {
    binaryString += "0";
}
n = BigInt(binaryString);
n.toString() === "340282366920938463463374607431768211456";
n = BigInt("0o7");
n.toString() === "7";
n = BigInt("0o10");
n.toString() === "8";
n = BigInt("0o20");
n.toString() === "16";
n = BigInt("   0o20");
n.toString() === "16";
n = BigInt("   0o20  ");
n.toString() === "16";
n = BigInt("0O7");
n.toString() === "7";
n = BigInt("0O10");
n.toString() === "8";
n = BigInt("0O20");
n.toString() === "16";
n = BigInt("   0O20");
n.toString() === "16";
n = BigInt("   0O20  ");
n.toString() === "16";
n = BigInt("0xa");
n.toString() === "10";
n = BigInt("0xff");
n.toString() === "255";
n = BigInt("  0xff  ");
n.toString() === "255";
n = BigInt("  0xfabc  ");
n.toString() === "64188";
n = BigInt(3245);
n.toString() === "3245";
n = BigInt(-2147483648);
n.toString() === "-2147483648";
n = BigInt(0);
n.toString() === "0";
n = BigInt(-46781);
n.toString() === "-46781";
n = BigInt(4503599627370490);
n.toString() === "4503599627370490";
n = BigInt(-4503599627370490);
n.toString() === "-4503599627370490";
n = BigInt(-4503599627370496);
n.toString() === "-4503599627370496";
n = BigInt(true);
n.toString() === "1";
n = BigInt(false);
n.toString() === "0";
function f257() {
    return 3;
}
let o = { valueOf: f257 };
n = BigInt(o);
n.toString() === "3";
function f265() {
    return "54";
}
o = { valueOf: f265 };
n = BigInt(o);
n.toString() === "54";
function f272() {
    return "5489543";
}
o = { toString: f272 };
n = BigInt(o);
n.toString() === "5489543";
function f279() {
    return 135489543;
}
o = { toString: f279 };
n = BigInt(o);
n.toString() === "135489543";
function f286() {
    return 3256;
}
function f288() {
    return "563737";
}
o = { valueOf: f286, toString: f288 };
n = BigInt(o);
n.toString() === "3256";
Symbol("a");
-0.5;
-Infinity;
function f319() {
    const v322 = new Error("MyError");
    throw v322;
}
o = { valueOf: f319 };
try {
    n = BigInt(o);
} catch(e326) {
    e326.message === "MyError";
}
try {
    n = BigInt();
} catch(e332) {
    e332 instanceof TypeError;
}
