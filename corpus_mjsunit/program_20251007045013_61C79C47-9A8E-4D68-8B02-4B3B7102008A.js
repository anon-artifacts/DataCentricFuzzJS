const v2 = Symbol?.species;
function f3(a4) {
    function f5() {
    }
    function f6() {
    }
    try { a4(f5, f6); } catch (e) {}
}
const v8 = { value: f3 };
try { Object.defineProperty(Promise, v2, v8); } catch (e) {}
let v12;
try { v12 = new ReadableStream(); } catch (e) {}
try { v12.tee(); } catch (e) {}
