function filter(a1) {
    return /^[a-z]$/.test(a1);
}
function printfilteredprops(a5) {
    printprops(a5, filter);
}
function printprops(a9, a10) {
    var s = "{";
    var prependComma = false;
    for (const v15 in a9) {
        if (!a10 || a10(v15)) {
            if (prependComma) {
                s += "\n";
            } else {
                s += "\n";
                prependComma = true;
            }
            s += (("    " + v15) + ": ") + a9[v15];
        }
    }
    if (prependComma) {
        s += "\n}";
    } else {
        s += " }";
    }
    print(s);
}
print("\n==== Let/const globals should not show up in for-in enumeration ====\n");
print("\nBefore x, y, z, w declarations and globals\n");
try {
    print(x);
} catch(e39) {
    print(e39);
}
try {
    print(y);
} catch(e43) {
    print(e43);
}
try {
    print(z);
} catch(e47) {
    print(e47);
}
try {
    print(w);
} catch(e51) {
    print(e51);
}
print(this.x);
print(this.y);
print(this.z);
print(this.w);
printfilteredprops(this);
let x = "let x";
this.y = "this.y";
const z = "const z";
this.w = "this.w";
print("\nAfter let x, this.y, const z, this.w\n");
try {
    print(x);
} catch(e78) {
    print(e78);
}
try {
    print(y);
} catch(e82) {
    print(e82);
}
try {
    print(z);
} catch(e85) {
    print(e85);
}
try {
    print(w);
} catch(e89) {
    print(e89);
}
print(this.x);
print(this.y);
print(this.z);
print(this.w);
printfilteredprops(this);
this.x = "this.x";
let y = "let y";
this.z = "this.z";
const w = "const w";
print("\nAfter this.x, let y, this.z, const w\n");
try {
    print(x);
} catch(e116) {
    print(e116);
}
try {
    print(y);
} catch(e119) {
    print(e119);
}
try {
    print(z);
} catch(e122) {
    print(e122);
}
try {
    print(w);
} catch(e125) {
    print(e125);
}
print(this.x);
print(this.y);
print(this.z);
print(this.w);
printfilteredprops(this);
print("\n==== Attributes on global properties should not be lost with let/const shadowing ====\n");
Object.defineProperty(this, "p", { configurable: false, enumerable: false, writable: false, value: "this.p" });
try {
    print(p);
} catch(e154) {
    print(e154);
}
print(this.p);
printprops(Object.getOwnPropertyDescriptor(this, "p"));
let p = "let p";
try {
    print(p);
} catch(e166) {
    print(e166);
}
print(this.p);
printprops(Object.getOwnPropertyDescriptor(this, "p"));
let r = 0;
print(r);
print(this.r);
r = 1;
print(r);
print(this.r);
Object.defineProperty(this, "r", {});
print(r);
print(this.r);
r = 2;
print(r);
print(this.r);
Object.defineProperty(this, "s", {});
let s = 0;
print(s = 3);
print(this.s);
