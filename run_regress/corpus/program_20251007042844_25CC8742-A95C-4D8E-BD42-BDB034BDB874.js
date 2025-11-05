console.log("Test to ensure correct behaviour of Object.defineProperties");
try {
    Object.defineProperties();
} catch(e5) {
}
try {
    Object.defineProperties("a string");
} catch(e9) {
}
try {
    Object.defineProperties({}, "a string");
} catch(e14) {
}
const v15 = {};
const v18 = { value: "foo", enumerable: true };
const v21 = { value: "foo", enumerable: true };
JSON.stringify(Object.defineProperties(v15, { property: v18, property2: v21 }));
const v27 = {};
const v29 = { value: "foo" };
const v32 = { value: "foo", enumerable: true };
JSON.stringify(Object.defineProperties(v27, { property: v29, property2: v32 }));
const v37 = { property: "foo" };
const v40 = { value: "foo", enumerable: true };
const v43 = { value: "foo", enumerable: true };
JSON.stringify(Object.defineProperties(v37, { property: v40, property2: v43 }));
const v48 = { property: "foo" };
const v51 = { value: "foo", enumerable: false };
const v54 = { value: "foo", enumerable: true };
JSON.stringify(Object.defineProperties(v48, { property: v51, property2: v54 }));
const v59 = { property: "foo" };
const v61 = { value: "foo" };
const v64 = { value: "foo", enumerable: true };
JSON.stringify(Object.defineProperties(v59, { property: v61, property2: v64 }));
emptyObject = {};
try {
    const v72 = { value: true };
    function f73() {
    }
    const v75 = { get: f73, writable: true };
    Object.defineProperties(emptyObject, { foo: v72, bar: v75 });
} catch(e78) {
}
"foo" in emptyObject;
