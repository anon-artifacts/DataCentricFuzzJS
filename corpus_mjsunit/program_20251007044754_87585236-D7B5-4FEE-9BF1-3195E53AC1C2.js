const v2 = Object.getPrototypeOf({});
function f4() {
    console.log(this);
}
Object.defineProperty(v2, "echo", { value: f4 });
function AssertEqual(a11, a12, a13) {
    ((a11 === a12 ? "Passed! " : ((("Failed (actual: " + a11) + ", expected: ") + a12) + "). Message: ") + a13).echo();
}
const v27 = Object.getPrototypeOf({});
function f29(a30, a31) {
    AssertEqual(this.constructor(this), a30, a31);
}
Object.defineProperty(v27, "equalTo", { value: f29 });
try {
    String.prototype.codePointAt.call();
} catch(e42) {
    e42.echo();
}
try {
    String.prototype.codePointAt.call(null);
} catch(e49) {
    e49.echo();
}
try {
    String.prototype.codePointAt.call(undefined);
} catch(e56) {
    e56.echo();
}
try {
    const t29 = String.prototype.codePointAt;
    new t29();
} catch(e62) {
    e62.echo();
}
try {
    String.fromCodePoint.call();
} catch(e67) {
    ("Fail!").echo();
}
try {
    String.fromCodePoint.call(null);
} catch(e74) {
    ("Fail!").echo();
}
try {
    String.fromCodePoint.call(undefined);
} catch(e81) {
    ("Fail!").echo();
}
try {
    const t50 = String.fromCodePoint;
    new t50();
} catch(e87) {
    e87.echo();
}
try {
    String.fromCodePoint(1.1);
} catch(e92) {
    e92.echo();
}
try {
    String.fromCodePoint(100000000);
} catch(e97) {
    e97.echo();
}
try {
    String.fromCodePoint(-0.0001);
} catch(e103) {
    e103.echo();
}
try {
    String.fromCodePoint(Infinity);
} catch(e108) {
    e108.echo();
}
AssertEqual(("").codePointAt(0), undefined, "Size = 0, index 0 test.");
AssertEqual(("a").codePointAt(-1), undefined, "Size = 1, index -1 test.");
String.fromCodePoint(97).codePointAt(0).equalTo(97, "Simple character test.");
String.fromCodePoint(65536).codePointAt(0).equalTo(65536, "Surrogate pair treated as a single code point.");
String.fromCodePoint(65536).codePointAt(1).equalTo(56320, "Index pointing to a second surrogate code unit returns the value of that code unit.");
String.fromCodePoint(55296).codePointAt(0).equalTo(55296, "Partial surrogate code unit.");
String.fromCodePoint(55295, 56320).codePointAt(0).equalTo(55295, "First surrogate code unit not in range [D800-DBFF].");
String.fromCodePoint(56320, 56320).codePointAt(0).equalTo(56320, "First surrogate code unit not in range [D800-DBFF].");
String.fromCodePoint(65536).codePointAt(0).equalTo(65536, "First surrogate code unit min value.");
String.fromCodePoint(55296, 56320).codePointAt(0).equalTo(65536, "First surrogate code unit min value.");
String.fromCodePoint(1113088).codePointAt(0).equalTo(1113088, "First surrogate code unit max value.");
String.fromCodePoint(56319, 56320).codePointAt(0).equalTo(1113088, "First surrogate code unit max value.");
String.fromCodePoint(55296, 56319).codePointAt(0).equalTo(55296, "Second surrogate code unit not in range [DC00-DFFF].");
String.fromCodePoint(55296, 57344).codePointAt(0).equalTo(55296, "Second surrogate code unit not in range [DC00-DFFF].");
String.fromCodePoint(65536).codePointAt(0).equalTo(65536, "Second surrogate code unit min value.");
String.fromCodePoint(55296, 56320).codePointAt(0).equalTo(65536, "Second surrogate code unit min value.");
String.fromCodePoint(66559).codePointAt(0).equalTo(66559, "Second surrogate code unit max value.");
String.fromCodePoint(55296, 57343).codePointAt(0).equalTo(66559, "Second surrogate code unit max value.");
String.prototype.codePointAt.call(5, 0).equalTo(53, "Calling on a number object instead of string object.");
if (String.fromCodePoint.length !== 1) {
    WScript.Echo("String.fromCodePoint length should be 1, actual: " + String.fromCodePoint.length);
}
