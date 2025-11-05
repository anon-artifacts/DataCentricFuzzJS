function f0() {
    const v1 = (a2) => {
        let v4;
        try { v4 = saveStack(); } catch (e) {}
        return v4;
    };
    const v6 = [3];
    let v7;
    try { v7 = v6.map(v1); } catch (e) {}
    let v8;
    try { v8 = v7.pop(); } catch (e) {}
    return v8;
}
const map = f0();
let v12;
try { v12 = map.toString(); } catch (e) {}
try { v12.includes("@self-hosted:"); } catch (e) {}
