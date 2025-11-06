var v = [];
const v5 = { value: 3, writable: false };
try { Object.defineProperty(v, "length", v5); } catch (e) {}
const v8 = () => {
    try { v.pop(); } catch (e) {}
};
try { v8(); } catch (e) {}
const v11 = () => {
    try { v.shift(); } catch (e) {}
};
try { v11(); } catch (e) {}
