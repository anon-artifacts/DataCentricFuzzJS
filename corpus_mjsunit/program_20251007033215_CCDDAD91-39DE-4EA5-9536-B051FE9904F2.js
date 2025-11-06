const a = /x/;
a.exec = RegExp?.prototype?.test;
const v5 = () => {
    const v7 = RegExp?.prototype?.test;
    let v8;
    try { v8 = v7.call(a); } catch (e) {}
    return v8;
};
try { v5(); } catch (e) {}
