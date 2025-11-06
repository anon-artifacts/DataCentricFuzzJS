let v1;
try { v1 = new Set(); } catch (e) {}
var s = v1;
s?.size;
let v6;
try { v6 = new Set(undefined); } catch (e) {}
s = v6;
s?.size;
let v10;
try { v10 = new Set(null); } catch (e) {}
s = v10;
s?.size;
const v13 = () => {
    let v14;
    try { v14 = Set(); } catch (e) {}
    return v14;
};
try { v13(); } catch (e) {}
const v17 = () => {
    let v19;
    try { v19 = Set(undefined); } catch (e) {}
    return v19;
};
try { v17(); } catch (e) {}
const v21 = () => {
    let v23;
    try { v23 = Set(null); } catch (e) {}
    return v23;
};
try { v21(); } catch (e) {}
