function isnan(a1) {
    return a1 !== a1;
}
const v4 = -"test";
let v6;
try { v6 = serialize(v4); } catch (e) {}
let v8;
try { v8 = deserialize(v6); } catch (e) {}
try { isnan(v8); } catch (e) {}
