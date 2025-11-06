let v1;
try { v1 = saveStack(); } catch (e) {}
let s = v1;
const v3 = () => {
    try { saveStack(); } catch (e) {}
};
try { oomTest(v3); } catch (e) {}
