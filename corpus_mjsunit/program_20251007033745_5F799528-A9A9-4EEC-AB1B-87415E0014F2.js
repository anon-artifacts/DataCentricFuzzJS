const v0 = {};
const v2 = { a: 0 };
try { Object.create(v0, v2); } catch (e) {}
const v5 = {};
try { Object.defineProperty(v5, "x", 0); } catch (e) {}
const v9 = {};
const v11 = [0];
try { Object.create(v9, v11); } catch (e) {}
function f13() {
    a = 0;
    const v16 = {};
    try { Object.create(v16, this); } catch (e) {}
}
f13();
