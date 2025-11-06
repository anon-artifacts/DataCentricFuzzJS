try {
    var f = Function("const x = 10; return x;");
    print("Syntax check succeeded");
} catch(e7) {
    print(e7);
}
try {
    var f = Function("{const x = 10; return x;}");
    print("Syntax check succeeded");
} catch(e17) {
    print(e17);
}
try {
    var f = Function("const x = 10; x = 20;");
    print("Syntax check succeeded");
} catch(e27) {
    print(e27);
}
try {
    var f = Function("{const x = 10; x = 20;}");
    print("Syntax check succeeded");
} catch(e37) {
    print(e37);
}
try {
    var f = Function("const x = 10; {x = 20;}");
    print("Syntax check succeeded");
} catch(e47) {
    print(e47);
}
try {
    var f = Function("{x = 20;} const x = 10;");
    print("Syntax check succeeded");
} catch(e57) {
    print(e57);
}
try {
    var f = Function("{x = 20;} let x = 10;");
    print("Syntax check succeeded");
} catch(e67) {
    print(e67);
}
try {
    var f = Function("const x = 10; function f() {x = 10;}");
    print("Syntax check succeeded");
} catch(e77) {
    print(e77);
}
try {
    var f = Function("const x = 10; function f() {let x; x = 10;}");
    print("Syntax check succeeded");
} catch(e87) {
    print(e87);
}
try {
    var f = Function("const x = 10; {let x = 1; x = 20;}");
    print("Syntax check succeeded");
} catch(e97) {
    print(e97);
}
try {
    var f = Function("let x = 10; {const x = 1; x = 20;}");
    print("Syntax check succeeded");
} catch(e107) {
    print(e107);
}
try {
    var f = Function("const x;");
    print("Syntax check succeeded");
} catch(e117) {
    print(e117);
}
try {
    var f = Function("{const x;}");
    print("Syntax check succeeded");
} catch(e127) {
    print(e127);
}
try {
    var f = Function("function g(){const x;}");
    print("Syntax check succeeded");
} catch(e137) {
    print(e137);
}
try {
    var f = Function("const x = 10; const x = 20;");
    print("Syntax check succeeded");
} catch(e147) {
    print(e147);
}
try {
    var f = Function("const x = 10; let x = 20;");
    print("Syntax check succeeded");
} catch(e157) {
    print(e157);
}
try {
    var f = Function("let x = 10; const x = 20;");
    print("Syntax check succeeded");
} catch(e167) {
    print(e167);
}
try {
    var f = Function("let x = 10; let x = 20;");
    print("Syntax check succeeded");
} catch(e177) {
    print(e177);
}
try {
    var f = Function("{const x = 10; const x = 20;}");
    print("Syntax check succeeded");
} catch(e187) {
    print(e187);
}
try {
    var f = Function("{const x = 10; let x = 20;}");
    print("Syntax check succeeded");
} catch(e197) {
    print(e197);
}
try {
    var f = Function("{let x = 10; const x = 20;}");
    print("Syntax check succeeded");
} catch(e207) {
    print(e207);
}
try {
    var f = Function("{let x = 10; let x = 20;}");
    print("Syntax check succeeded");
} catch(e217) {
    print(e217);
}
try {
    var f = Function("function g(){const x = 10; const x = 20;}");
    print("Syntax check succeeded");
} catch(e227) {
    print(e227);
}
try {
    var f = Function("function g(){const x = 10; let x = 20;}");
    print("Syntax check succeeded");
} catch(e237) {
    print(e237);
}
try {
    var f = Function("function g(){let x = 10; const x = 20;}");
    print("Syntax check succeeded");
} catch(e247) {
    print(e247);
}
try {
    var f = Function("function g(){let x = 10; let x = 20;}");
    print("Syntax check succeeded");
} catch(e257) {
    print(e257);
}
try {
    var f = Function("var x = 10; const x = 20;");
    print("Syntax check succeeded");
} catch(e267) {
    print(e267);
}
try {
    var f = Function("var x = 10; let x = 20;");
    print("Syntax check succeeded");
} catch(e277) {
    print(e277);
}
try {
    var f = Function("const x = 10; var x = 20;");
    print("Syntax check succeeded");
} catch(e287) {
    print(e287);
}
try {
    var f = Function("let x = 10; var x = 20;");
    print("Syntax check succeeded");
} catch(e297) {
    print(e297);
}
try {
    var f = Function("{var x = 10; const x = 20;}");
    print("Syntax check succeeded");
} catch(e307) {
    print(e307);
}
try {
    var f = Function("{var x = 10; let x = 20;}");
    print("Syntax check succeeded");
} catch(e317) {
    print(e317);
}
try {
    var f = Function("{const x = 10; var x = 20;}");
    print("Syntax check succeeded");
} catch(e327) {
    print(e327);
}
try {
    var f = Function("{let x = 10; var x = 20;}");
    print("Syntax check succeeded");
} catch(e337) {
    print(e337);
}
try {
    var f = Function("function g(){var x = 10; const x = 20;}");
    print("Syntax check succeeded");
} catch(e347) {
    print(e347);
}
try {
    var f = Function("function g(){var x = 10; let x = 20;}");
    print("Syntax check succeeded");
} catch(e357) {
    print(e357);
}
try {
    var f = Function("function g(){const x = 10; var x = 20;}");
    print("Syntax check succeeded");
} catch(e367) {
    print(e367);
}
try {
    var f = Function("function g(){let x = 10; var x = 20;}");
    print("Syntax check succeeded");
} catch(e377) {
    print(e377);
}
