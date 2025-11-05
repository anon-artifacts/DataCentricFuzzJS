Array?.prototype?.flat?.length;
Array?.prototype?.flat?.name;
{
    const input = [1,[2],[[3]]];
    try { input.flat(); } catch (e) {}
    [1,2,[3]];
    try { input.flat(1); } catch (e) {}
    [1,2,[3]];
    try { input.flat(true); } catch (e) {}
    [1,2,[3]];
    try { input.flat(undefined); } catch (e) {}
    [1,2,[3]];
    const v45 = -Infinity;
    try { input.flat(v45); } catch (e) {}
    [1,[2],[[3]]];
    const v55 = -1;
    try { input.flat(v55); } catch (e) {}
    [1,[2],[[3]]];
    const v65 = -0;
    try { input.flat(v65); } catch (e) {}
    [1,[2],[[3]]];
    try { input.flat(0); } catch (e) {}
    [1,[2],[[3]]];
    try { input.flat(false); } catch (e) {}
    [1,[2],[[3]]];
    try { input.flat(null); } catch (e) {}
    [1,[2],[[3]]];
    try { input.flat(""); } catch (e) {}
    [1,[2],[[3]]];
    try { input.flat("foo"); } catch (e) {}
    [1,[2],[[3]]];
    const v119 = /./;
    try { input.flat(v119); } catch (e) {}
    [1,[2],[[3]]];
    const v128 = [];
    try { input.flat(v128); } catch (e) {}
    [1,[2],[[3]]];
    const v137 = {};
    try { input.flat(v137); } catch (e) {}
    [1,[2],[[3]]];
    const v147 = {};
    const v148 = {};
    let v149;
    try { v149 = new Proxy(v147, v148); } catch (e) {}
    try { input.flat(v149); } catch (e) {}
    [1,[2],[[3]]];
    const v158 = (a159) => {
        return a159;
    };
    try { input.flat(v158); } catch (e) {}
    [1,[2],[[3]]];
    try { input.flat(String); } catch (e) {}
    [1,[2],[[3]]];
    try { input.flat(2); } catch (e) {}
    [1,2,3];
    try { input.flat(Infinity); } catch (e) {}
    [1,2,3];
    const v188 = () => {
        let v190;
        try { v190 = Symbol(); } catch (e) {}
        try { input.flat(v190); } catch (e) {}
    };
    try { v188(); } catch (e) {}
    const v194 = () => {
        let v197;
        try { v197 = Object.create(null); } catch (e) {}
        try { input.flat(v197); } catch (e) {}
    };
    try { v194(); } catch (e) {}
}
{
    const input = { 0: "a", 1: "b", 2: "c", length: "wat" };
    const v208 = Array?.prototype?.flat;
    try { v208.call(input, Infinity); } catch (e) {}
    [];
}
{
    let count = 0;
    const v216 = {
        get length() {
            ++count;
            return 0;
        },
    };
    const input = v216;
    const v220 = Array?.prototype?.flat;
    let v221;
    try { v221 = v220.call(input, Infinity); } catch (e) {}
    const result = v221;
}
{
    const v224 = Array?.prototype;
    let v227;
    try { v227 = Object.getOwnPropertyDescriptor(v224, "flat"); } catch (e) {}
    const descriptor = v227;
    descriptor?.value;
    Array?.prototype?.flat;
    descriptor?.writable;
    descriptor?.enumerable;
    descriptor?.configurable;
}
