const v1 = {};
const v3 = new Proxy({}, v1);
v1.__proto__ = v3;
try {
    v3.__proto__ = v3;
} catch(e4) {
}
const v5 = {};
const v7 = new Proxy({}, v5);
v5.__proto__ = v7;
try {
    for (const v8 in v7) {
    }
} catch(e9) {
}
const v11 = {};
const v13 = new Proxy({}, v11);
v11.__proto__ = v13;
try {
    Object.getOwnPropertyDescriptor(v13);
} catch(e16) {
}
const v17 = {};
const v19 = new Proxy({}, v17);
v17.__proto__ = v19;
try {
    Object.defineProperty(v19, "foo", {});
} catch(e24) {
}
const v25 = {};
const v27 = new Proxy({}, v25);
v25.__proto__ = v27;
try {
    Reflect.ownKeys(v27);
} catch(e29) {
}
