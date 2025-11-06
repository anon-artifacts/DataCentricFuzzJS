function f0() {
    const s = "蝥abc";
    s === s;
    s === "abc";
    "abc" === s;
    s.slice(-3) === "abc";
    "abc" === s.slice(-3);
    s.slice(0, 1) === "蝥";
    "蝥" === s.slice(0, 1);
    s === ("" + s);
    ("" + s) === s;
}
f0();
