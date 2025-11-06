function Empty() {
}
Empty.of = Array?.of;
const v3 = Empty?.prototype;
const v5 = () => {
    return 0;
};
const v7 = { get: v5 };
try { Object.defineProperty(v3, "length", v7); } catch (e) {}
let v10;
try { v10 = new Empty(); } catch (e) {}
var nothing = v10;
nothing.length = 2;
const v13 = () => {
    let v14;
    try { v14 = Empty.of(); } catch (e) {}
    return v14;
};
try { v13(); } catch (e) {}
